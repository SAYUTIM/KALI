function writting(){
    const textAreas = document.querySelectorAll("textarea");

    if (textAreas.length === 0) return;

    textAreas.forEach((textArea) => {

        const courseElement = document.querySelector(".courseName");
        const reportElement = document.querySelector("li.current p.textoverflow");

        if (!courseElement || !reportElement) return;

        const course = courseElement.textContent;
        const report = reportElement.textContent;
        const key = `saveText_${course.trim()}_${report.trim()}`;

        const savedContent = localStorage.getItem(key);

        if (savedContent) {
            textArea.value = savedContent;
            const characterLengthDisplay = textArea.closest(".cs_inVox").querySelector("#characterLength");
            if (characterLengthDisplay) {
                characterLengthDisplay.textContent = `入力文字数：${savedContent.length}`;
            }
        }

        textArea.addEventListener("keyup", () => {
            if (textArea.value.length > 0) localStorage.setItem(key, textArea.value);
            else localStorage.removeItem(key);
        });
    });
}

writting();