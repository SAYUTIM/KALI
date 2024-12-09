chrome.runtime.onInstalled.addListener(() => {
    chrome.storage.sync.get(["autoLogin"], (result) => {
        if (result.autoLogin) {
            enableAutoLogin();
        } else {
            disableAutoLogin();
        }
    });
});

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

chrome.storage.onChanged.addListener((changes, area) => {
    if (area === "sync" && changes.autoLogin) {
        if (changes.autoLogin.newValue) {
            enableAutoLogin();
        } else {
            disableAutoLogin();
        }
    }
});
