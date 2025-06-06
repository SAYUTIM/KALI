//Copyright (c) 2024 SAYU
//This software is released under the MIT License, see LICENSE.

const saveSettings = () => {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const autoLogin = document.getElementById("auto-login").checked;
    const showTime = document.getElementById("show-time").checked;
    const autoAttend = document.getElementById("auto-attend").checked;
    const attendC = document.getElementById("class-term").value;
    const attendM = document.getElementById("meet-id").value;
    const attendD = document.getElementById("day-select").value;
    const attendT = document.getElementById("class-period").value;
    const attendA = document.getElementById("attend-button").checked;
    const autoMeet = document.getElementById("auto-meet").checked;
    const searchSubject = document.getElementById("search-subject").checked;
    const writtingSave = document.getElementById("writting-save").checked;
    const darkMode = document.getElementById("dark-mode").checked;
    const homework = document.getElementById("home-work").checked;
    const openlist = document.getElementById("open-list").checked;
    //const gpaCalc = document.getElementById("gpa-calc").checked;

    chrome.storage.sync.set({ 
        username, 
        password, 
        autoLogin, 
        showTime, 
        autoAttend,
        attendC,
        attendM,
        attendD,
        attendT,
        attendA,
        autoMeet, 
        searchSubject, 
        writtingSave, 
        darkMode,
        homework,
        openlist
        //gpaCalc
    }, () => {
        document.dispatchEvent(new Event("settings-changed"));
    });
};

document.addEventListener("DOMContentLoaded", () => {
    chrome.storage.sync.get([
        "username",
        "password",
        "autoLogin",
        "showTime", 
        "autoAttend",
        "autoAttend",
        "attendC",
        "attendM",
        "attendD",
        "attendT",
        "attendA", 
        "autoMeet", 
        "searchSubject", 
        "writtingSave", 
        "darkMode",
        "homework",
        "openlist"
        //"gpaCalc"
    ], (result) => {
        document.getElementById("username").value = result.username || "";
        document.getElementById("password").value = result.password || "";
        document.getElementById("auto-login").checked = result.autoLogin || false;
        document.getElementById("show-time").checked = result.showTime || false;
        document.getElementById("auto-attend").checked = result.autoAttend || false;
        document.getElementById("class-term").checked = result.attendC || "";
        document.getElementById("meet-id").checked = result.attendM || "";
        document.getElementById("day-select").checked = result.attendD || "";
        document.getElementById("class-period").checked = result.attendT || "";
        document.getElementById("attend-button").checked = result.attendA || false;;
        document.getElementById("auto-meet").checked = result.autoMeet || false;
        document.getElementById("search-subject").checked = result.searchSubject || false;
        document.getElementById("writting-save").checked = result.writtingSave || false;
        document.getElementById("dark-mode").checked = result.darkMode || false;
        document.getElementById("home-work").checked = result.homework || false;
        document.getElementById("open-list").checked = result.openlist || false;
        //document.getElementById("gpa-calc").checked = result.gpaCalc || false;

        document.dispatchEvent(new Event("settings-loaded"));
    });

    document.getElementById("username").addEventListener("input", saveSettings);
    document.getElementById("password").addEventListener("input", saveSettings);
    document.getElementById("auto-login").addEventListener("change", saveSettings);
    document.getElementById("show-time").addEventListener("change", saveSettings);
    document.getElementById("auto-attend").addEventListener("change", saveSettings);
    document.getElementById("class-term").addEventListener("change", saveSettings);
    document.getElementById("meet-id").addEventListener("input", saveSettings);
    document.getElementById("day-select").addEventListener("change", saveSettings);
    document.getElementById("class-period").addEventListener("change", saveSettings);
    document.getElementById("attend-button").addEventListener("change", saveSettings);
    document.getElementById("auto-meet").addEventListener("change", saveSettings);
    document.getElementById("search-subject").addEventListener("change", saveSettings);
    document.getElementById("writting-save").addEventListener("change", saveSettings);
    document.getElementById("dark-mode").addEventListener("change", saveSettings);
    document.getElementById("home-work").addEventListener("change", saveSettings);
    document.getElementById("open-list").addEventListener("change", saveSettings);
    //document.getElementById("gpa-calc").addEventListener("change", saveSettings);
});