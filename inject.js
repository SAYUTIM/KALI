//Copyright (c) 2024 SAYU
//This software is released under the MIT License, see LICENSE.

chrome.runtime.onInstalled.addListener(() => {

    chrome.contextMenus.create({
        id: "openOptions",
        title: "[KALI] 設定を開く",
        contexts: ["page"],
    });

    chrome.storage.sync.get(["autoLogin"], (result) => {
        if (result.autoLogin) enableAutoLogin();
        else disableScript("AutoLoginScript");
    });

    chrome.storage.sync.get(["showTime"], (result) => {
        if (result.showTime) enableTimeDisplay();
        else disableScript("TimeDisplayScript");
    });

    chrome.storage.sync.get(["autoAttend"], (result) => {
        if (result.autoAttend) enableAutoAttend();
        else disableScript("AutoAttendScript");
    });

    chrome.storage.sync.get(["autoMeet"], (result) => {
        if (result.autoMeet) enableMeetjoin();
        else disableScript("MeetJoinScript");
    });

    chrome.storage.sync.get(["searchSubject"], (result) => {
        if (result.searchSubject) enableSearchSubject();
        else disableScript("SearchSubject");
    });

    chrome.storage.sync.get(["writtingSave"], (result) => {
        if (result.writtingSave) enableWrittingSave();
        else disableScript("WrittingSave");
    });

    chrome.storage.sync.get(["darkMode"], (result) => {
        if (result.darkMode) enableDarkMode();
        else disableScript("DarkMode");
    });

    chrome.storage.sync.get(["homework"], (result) => {
        if (result.homework) enableHomework();
        else disableScript("Homework");
    });

    chrome.storage.sync.get(["openlist"], (result) => {
        if (result.openlist) enableOpenlist();
        else disableScript("Openlist");
    });

});

chrome.contextMenus.onClicked.addListener((info, tab) => {
    if (info.menuItemId === "openOptions") {
        chrome.tabs.create({ url: "setting/options.html" });
    }
});

chrome.storage.onChanged.addListener((changes, area) => {
    if (area === "sync") {

        if (changes.autoLogin) {
            if (changes.autoLogin.newValue) enableAutoLogin();
            else disableScript("AutoLoginScript");
        }

        if (changes.showTime) {
            if (changes.showTime.newValue) enableTimeDisplay();
            else disableScript("TimeDisplayScript");
            
        }

        if (changes.autoAttend) {
            if (changes.autoAttend.newValue) enableAutoAttend();
            else disableScript("AutoAttendScript");
        }

        if (changes.autoMeet) {
            if (changes.autoMeet.newValue) enableMeetjoin();
            else disableScript("MeetJoinScript");
        }

        if (changes.searchSubject) {
            if (changes.searchSubject.newValue) enableSearchSubject();
            else disableScript("SearchSubject");
        }

        if (changes.writtingSave) {
            if (changes.writtingSave.newValue) enableWrittingSave();
            else disableScript("WrittingSave");
        }

        if (changes.darkMode) {
            if (changes.darkMode.newValue) enableDarkMode();
            else disableScript("DarkMode");
        }

        if (changes.homework) {
            if (changes.homework.newValue) enableHomework();
            else disableScript("Homework");
        }

        if (changes.openlist) {
            if (changes.openlist.newValue) enableOpenlist();
            else disableScript("Openlist");
        }

    }
});

const root = "features/";

function disableScript(scriptId) {
    chrome.scripting.getRegisteredContentScripts((scripts) => {
        if (scripts.some(script => script.id === scriptId)) chrome.scripting.unregisterContentScripts({ ids: [scriptId] })
    });
}

function enableAutoLogin() {
    chrome.scripting.registerContentScripts([{
        id: "AutoLoginScript",
        matches: ["https://study.ns.kogakuin.ac.jp/*", "https://auth.kogakuin.ac.jp/*"],
        js: [`${root}AutoLogin.js`],
        runAt: "document_start"
    }]);
}

function enableTimeDisplay() {
    chrome.scripting.registerContentScripts([{
        id: "TimeDisplayScript",
        matches: ["https://study.ns.kogakuin.ac.jp/*"],
        js: [`${root}time.js`],
        runAt: "document_idle"
    }]);
}

function enableAutoAttend() {
    chrome.scripting.registerContentScripts([{
        id: "AutoAttendScript",
        matches: ["https://study.ns.kogakuin.ac.jp/*", "https://meet.google.com/*"],
        js: [`${root}attend.js`],
        runAt: "document_idle"
    }]);
}

function enableMeetjoin() {
    chrome.scripting.registerContentScripts([{
        id: "MeetJoinScript",
        matches: ["https://meet.google.com/*"],
        js: [`${root}meet.js`],
        runAt: "document_idle"
    }]);
}

function enableSearchSubject() {
    chrome.scripting.registerContentScripts([{
        id: "SearchSubject",
        matches: ["https://study.ns.kogakuin.ac.jp/*"],
        js: [`${root}subject.js`],
        runAt: "document_idle"
    }]);
}

function enableWrittingSave() {
    chrome.scripting.registerContentScripts([{
        id: "WrittingSave",
        matches: ["https://study.ns.kogakuin.ac.jp/*"],
        js: [`${root}write.js`],
        runAt: "document_end"
    }]);
}

function enableDarkMode() {
    chrome.scripting.registerContentScripts([{
        id: "DarkMode",
        matches: ["https://study.ns.kogakuin.ac.jp/*"],
        js: [`${root}darkmode.js`],
        runAt: "document_start"
    }]);
}

function enableHomework() {
    chrome.scripting.registerContentScripts([{
        id: "Homework",
        matches: ["https://study.ns.kogakuin.ac.jp/*"],
        js: [`${root}homework.js`],
        runAt: "document_end"
    }]);
}

function enableOpenlist() {
    chrome.scripting.registerContentScripts([{
        id: "Openlist",
        matches: ["https://study.ns.kogakuin.ac.jp/*"],
        js: [`${root}openlist.js`],
        runAt: "document_end"
    }]);
}

