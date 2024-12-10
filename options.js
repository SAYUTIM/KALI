const saveSettings = () => {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const autoLogin = document.getElementById("auto-login").checked;
    const showTime = document.getElementById("show-time").checked;
    const autoMeet = document.getElementById("auto-meet").checked;

    chrome.storage.sync.set({ username, password, autoLogin, showTime, autoMeet }, () => {
        const status = document.getElementById("status");
        status.textContent = "設定が保存されました。";
        setTimeout(() => (status.textContent = ""), 3000);
    });
};

document.addEventListener("DOMContentLoaded", () => {
    chrome.storage.sync.get(["username", "password", "autoLogin", "showTime", "autoMeet"], (result) => {
        document.getElementById("username").value = result.username || "";
        document.getElementById("password").value = result.password || "";
        document.getElementById("auto-login").checked = result.autoLogin || false;
        document.getElementById("show-time").checked = result.showTime || false;
        document.getElementById("auto-meet").checked = result.autoMeet || false;
    });

    document.getElementById("username").addEventListener("input", saveSettings);
    document.getElementById("password").addEventListener("input", saveSettings);
    document.getElementById("auto-login").addEventListener("change", saveSettings);
    document.getElementById("show-time").addEventListener("change", saveSettings);
    document.getElementById("auto-meet").addEventListener("change", saveSettings);
});
