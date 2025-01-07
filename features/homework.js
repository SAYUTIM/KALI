//Copyright (c) 2024 SAYU
//This software is released under the MIT License, see LICENSE.

const nodeadline = "期限未設定";

function search() {

  chrome.storage.local.get("homeworkopen", (result) => {
    const homeworkopen = result.homeworkopen;
    if (homeworkopen) {
      const { id, num } = homeworkopen;
      const targetLink = document.querySelector(`a[onclick^="kyozaiTitleLink('${id}','${num}')"]`);
      if (targetLink) {
        chrome.storage.local.remove("homeworkopen");
        targetLink.click();
      }
    }
  });

  const tables = document.querySelectorAll("table[id^='table']");
  if (!tables) return;

  tables.forEach((table) => {
    table.querySelectorAll("tbody tr").forEach((row) => {
      var imgTag = row.querySelector(".kyozaititleCell img");
      var aTag = row.querySelector(".kyozaititleCell a");
      var dateCell = row.querySelector(".jyugyeditCell:nth-child(3)");
      var statusSpan = row.querySelector(".jyugyeditCell span");
      var courseDiv = document.querySelector(".courseName");

      if (!imgTag || !aTag || !dateCell || !statusSpan || !courseDiv) return;

      if (!["テスト", "レポート"].includes(imgTag.getAttribute("alt").trim())) return;

      var onclickText = aTag.getAttribute("onclick");
      var idMatch = onclickText.match(/'([^']+)'/);
      var numMatch = onclickText.match(/'([^']+)'/g);
      if (!idMatch || !numMatch) return;

      var id = idMatch[1];
      var num = numMatch[1].replace(/'/g, "");
      var name = aTag.textContent.trim();
      var date = dateCell.textContent.trim();
      var course = courseDiv.textContent.trim().replace(/\[.*\]/, "");
      var status = statusSpan.textContent.trim();

      if(["‐"].includes(date)) date = nodeadline;
      var data = { id, num, name, date, course };

      chrome.storage.local.get("homework", (result) => {
        var storedData = result.homework || [];
        var exists = storedData.some((item) => item.id === id);

        if (["未参照", "未提出", "未実施"].includes(status)) {
          if (!exists) {
            storedData.push(data);
            chrome.storage.local.set({ homework: storedData });
            console.log(storedData);
          }
        } else if (exists || date === "公開終了") {
          var updatedData = storedData.filter((item) => item.id !== id);
          chrome.storage.local.set({ homework: updatedData });
        }
      });
    });
  });
}

function show() {
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  chrome.storage.local.get("homework", (result) => {
    let homework = result.homework || [];

    const validHomework = homework.filter((item) => {
      if (item.date === nodeadline) return true;
      const itemDate = new Date(item.date);
      return !isNaN(itemDate) && itemDate >= today;
    });

    if (validHomework.length !== homework.length) {
      chrome.storage.local.set({ homework: validHomework });
    }

    validHomework.sort((a, b) => {
      if (a.date === nodeadline && b.date === nodeadline) return 0;
      if (a.date === nodeadline) return 1;
      if (b.date === nodeadline) return -1;
      return new Date(a.date) - new Date(b.date);
    });
    
    const displayArea = document.createElement("div");
    displayArea.style.marginTop = "20px";
    formElement.appendChild(displayArea);
    displayArea.innerHTML = "";

    validHomework.forEach((item) => {
      const element = document.createElement("div");
      element.style.border = "1px solid #ccc";
      element.style.borderRadius = "5px";
      element.style.padding = "10px";
      element.style.marginBottom = "5px";
      element.style.boxShadow = "0 2px 5px rgba(0, 0, 0, 0.1)";
      element.style.cursor = "pointer";

      element.innerHTML = `
        <div>
          <div class="date-element" style="font-size: 14px; color: #666;">[${item.date}]</div>
          <div style="font-size: 16px; font-weight: bold; margin-top: 5px;">${item.course}</div>
          <div style="font-size: 12px; margin-top: 5px;">→ ${item.name}</div>
        </div>
      `;

      const dateElement = element.querySelector(".date-element");

      const itemDate = new Date(item.date);
      const threeDaysLater = new Date(today);
      threeDaysLater.setDate(today.getDate() + 3);
      if (!isNaN(itemDate) && itemDate >= today && itemDate <= threeDaysLater) {
        dateElement.style.color = "red";
      }

      dateElement.addEventListener("mouseenter", () => {
        dateElement.style.color = "#007bff";
      });
      dateElement.addEventListener("mouseleave", () => {
        const isNearDeadline = !isNaN(itemDate) && itemDate >= today && itemDate <= threeDaysLater;
        dateElement.style.color = isNearDeadline ? "red" : "#666";
      });

      dateElement.addEventListener("click", (e) => {
        e.stopPropagation();

        const newDate = prompt(`日付を変更してください：年/月/日 時:分 \n「${nodeadline}」にすると優先度を低くできます。\n今日の日付より前を入力すると削除します。`, item.date);
        if (newDate && newDate !== item.date) {
          item.date = newDate;

          chrome.storage.local.get("homework", (result) => {
            const storedData = result.homework || [];
            const updatedData = storedData.map((data) => data.id === item.id ? item : data);
            chrome.storage.local.set({ homework: updatedData });
          });

          dateElement.textContent = `[${item.date}]`;
        }
      });

      element.addEventListener("click", () => {
        const courseCards = document.querySelectorAll(".courseCardName");
        for (const card of courseCards) {
          const courseName = card.textContent.trim();
          const link = card.querySelector("a");
          if (courseName === item.course && link) {
            chrome.storage.local.set({ homeworkopen: { id: item.id, num: item.num } });
            link.click();
            break;
          }
        }
      });

      displayArea.appendChild(element);
    });
  });
}

const formElement = document.querySelector("form#homehomlInfo");
if (!formElement) search();
else show();