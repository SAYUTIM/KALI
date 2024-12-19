//Copyright (c) 2024 SAYU
//This software is released under the MIT License, see LICENSE.

async function getCredentials() {
    return new Promise((resolve) => {
        chrome.storage.sync.get(["username", "password"], (result) => {
            resolve(result);
        });
    });
}

function autoClickButton(selector) {
    const button = document.querySelector(`button[name='${selector}']`);
    if (button) button.click();
}

function inputText(selector, value) {
    const input = document.querySelector(`input[name='${selector}']`);
    if (input) input.value = value;
}

document.addEventListener("DOMContentLoaded", async () => {
    const credentials = await getCredentials();

    if (!credentials.username || !credentials.password) return;

    if (location.href.startsWith("https://study.ns.kogakuin.ac.jp/lms/lginLgir/")) {
        autoClickButton("loginButton");
    } 
    else if (location.href.startsWith("https://study.ns.kogakuin.ac.jp/lms/error/")) {
        location.pathname = "/lms/lginLgir/";
    }
    else if (location.href.startsWith("https://auth.kogakuin.ac.jp/idp/profile/SAML2/Redirect/")) {
        const errorElement = document.querySelector("p.form-element.form-error");
        if(!errorElement) {
            inputText("j_username", credentials.username);
            inputText("j_password", credentials.password);
            autoClickButton("_eventId_proceed");
        }
    }
});