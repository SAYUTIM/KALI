document.getElementById("save").addEventListener("click", () => {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const autoLogin = document.getElementById("auto-login").checked;

    chrome.storage.sync.set({ username, password, autoLogin }, () => {
        document.getElementById("status").textContent = "設定が保存されました。";
        setTimeout(() => document.getElementById("status").textContent = "", 3000);
    });
});

document.addEventListener("DOMContentLoaded", () => {
    chrome.storage.sync.get(["username", "password", "autoLogin"], (result) => {
        document.getElementById("username").value = result.username || "";
        document.getElementById("password").value = result.password || "";
        document.getElementById("auto-login").checked = result.autoLogin || false;
    });
});
