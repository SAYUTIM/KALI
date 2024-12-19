//Copyright (c) 2024 SAYU
//This software is released under the MIT License, see LICENSE.

/*
const schedule = [
    { start: "10:10", end: "11:40", label: "2" },
    { start: "12:30", end: "14:00", label: "3" },
    { start: "14:10", end: "15:40", label: "4" },
    { start: "15:50", end: "17:20", label: "5" }
];

const CHECK_INTERVAL = 1000;
const FLAG_lesson = 'lesson';
const FLAG_attend = 'attend';
const FLAG_ok = 'ok';
let lessonID = "KOG";
let meetID = "";
let day = 0;
let hours = 0;
let minutes = 0;

// 設定を取得
chrome.storage.sync.get(["attendC", "attendM", "attendD", "attendT"], (result) => {
    lessonID = result.attendC || lessonID;
    meetID = result.attendM || meetID;
    day = parseInt(result.attendD, 10) || day;

    // schedule から時間を設定
    const schedulePeriod = schedule.find(item => item.label === result.attendT});
    if (schedulePeriod) {
        const [h, m] = schedulePeriod.start.split(":").map(Number);
        hours = h;
        minutes = m;
    }
});

function autoAttend() {
    const now = new Date();
    const currentDay = now.getDay();
    const currentHours = now.getHours();
    const currentMinutes = now.getMinutes();

    if (currentDay === day && currentHours === hours && currentMinutes === minutes) {
        
        if (!(localStorage.getItem(FLAG_lesson) === 'true')) {
            
            const lesson = document.querySelector("a[onclick^=\"formSubmit('" + lessonID + "')\"]");
            if (lesson) {
                localStorage.setItem(FLAG_lesson, 'true');
                lesson.click();
            } else {
                window.location.href = 'https://study.ns.kogakuin.ac.jp/';
            }
        }

        if (!(localStorage.getItem(FLAG_attend) === 'true')) {
            const attendpush = document.querySelector("input[onclick^=\"syussekiSentakuAdd();\"]");
            if (attendpush) {
                localStorage.setItem(FLAG_attend, 'true');
                attendpush.click();
            }
        }

        if (!(localStorage.getItem(FLAG_ok) === 'true')) {
            
            const ok = document.querySelector("input[value=\"OK\"]");
            if (ok) {
                localStorage.setItem(FLAG_ok, 'true');
                ok.click();
                chrome.tabs.create({ url: `https://meet.google.com/${meetID}` });
            }
        }
    }



    if (currentDay !== day || currentHours !== hours || currentMinutes !== minutes) {
        localStorage.removeItem(FLAG_lesson);
        localStorage.removeItem(FLAG_attend);
        localStorage.removeItem(FLAG_ok);
    }
}

setInterval(autoAttend, CHECK_INTERVAL);
*/
