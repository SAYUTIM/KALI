chrome.runtime.onInstalled.addListener(() => {
    chrome.storage.sync.get(["autoLogin"], (result) => {
        if (result.autoLogin) {
            enableAutoLogin();
        } else {
            disableAutoLogin();
        }
    });

    chrome.storage.sync.get(["showTime"], (result) => {
        if (result.showTime) {
            enableTimeDisplay();
        } else {
            disableTimeDisplay();
        }
    });

    chrome.storage.sync.get(["autoMeet"], (result) => {
        if (result.autoMeet) {
            enableMeetjoin();
        } else {
            disableMeetjoin();
        }
    });
});

//自動ログイン
function enableAutoLogin() {
    chrome.scripting.registerContentScripts([{
        id: "AutoLoginScript",
        matches: ["https://study.ns.kogakuin.ac.jp/*", "https://auth.kogakuin.ac.jp/*"],
        js: ["AutoLogin.js"],
        runAt: "document_start"
    }]).catch((error) => {
        console.error("Failed to register content script:", error);
    });
}

function disableAutoLogin() {
    chrome.scripting.getRegisteredContentScripts((scripts) => {
        const isRegistered = scripts.some(script => script.id === "AutoLoginScript");
        if (isRegistered) {
            chrome.scripting.unregisterContentScripts({ ids: ["AutoLoginScript"] })
                .catch((error) => {
                    console.error("Failed to unregister content script:", error);
                });
        }
    });
}

//時間表示
function enableTimeDisplay() {
    chrome.scripting.registerContentScripts([{
        id: "TimeDisplayScript",
        matches: ["https://study.ns.kogakuin.ac.jp/*"],
        js: ["time.js"],
        runAt: "document_idle"
    }]).catch((error) => {
        console.error("Failed to register content script:", error);
    });
}

function disableTimeDisplay() {
    chrome.scripting.getRegisteredContentScripts((scripts) => {
        const isRegistered = scripts.some(script => script.id === "TimeDisplayScript");
        if (isRegistered) {
            chrome.scripting.unregisterContentScripts({ ids: ["TimeDisplayScript"] })
                .catch((error) => {
                    console.error("Failed to unregister content script:", error);
                });
        }
    });
}

//Meet
function enableMeetjoin() {
    chrome.scripting.registerContentScripts([{
        id: "MeetJoinScript",
        matches: ["https://meet.google.com/*"],
        js: ["meet.js"],
        runAt: "document_idle"
    }]).catch((error) => {
        console.error("Failed to register content script:", error);
    });
}

function disableMeetjoin() {
    chrome.scripting.getRegisteredContentScripts((scripts) => {
        const isRegistered = scripts.some(script => script.id === "MeetJoinScript");
        if (isRegistered) {
            chrome.scripting.unregisterContentScripts({ ids: ["MeetJoinScript"] })
                .catch((error) => {
                    console.error("Failed to unregister content script:", error);
                });
        }
    });
}

chrome.storage.onChanged.addListener((changes, area) => {
    if (area === "sync") {

        if(changes.autoLogin){
            if (changes.autoLogin.newValue) {
                enableAutoLogin();
            } else {
                disableAutoLogin();
            }
        }

        if(changes.showTime){
            if (changes.showTime.newValue) {
                enableTimeDisplay();
            } else {
                disableTimeDisplay();
            }
        }

        if(changes.autoMeet){
            if (changes.autoMeet.newValue) {
                enableMeetjoin();
            } else {
                disableMeetjoin();
            }
        }
    }
});
