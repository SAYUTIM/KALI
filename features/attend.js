/*
const CHECK_INTERVAL = 1000;
const FLAG_lesson = 'lesson';
const FLAG_attend = 'attend';
const FLAG_ok = 'ok';
const lessonID = "KOG";
const meetID = "";
const d = 4,h = 14, m = 0;
*/
/*
function autoAttend() {
    const now = new Date();
    const day = now.getDay();
    const hours = now.getHours();
    const minutes = now.getMinutes();

    if (day === d && hours === h && minutes === m) {

        if (!(localStorage.getItem(FLAG_lesson) === 'true')) {
            const lesson = document.querySelector("a[onclick^=\"formSubmit('"+lessonID+"')\"]");
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
            //OKボタンクリック
            localStorage.setItem(FLAG_ok, 'true');
            window.location.href = "https://meet.google.com/" + meetID;
        }
    }

    if (day === 4 && hours === 11 && minutes === 35 && !location.href.startsWith("https://study.ns.kogakuin.ac.jp/")) {
        const outattend = document.querySelector('[aria-label="通話から退出"]');
        if (outattend) outattend.click();
        window.location.href = 'https://study.ns.kogakuin.ac.jp/';
    }

    if (day !== d || hours !== h || minutes !== m) {
        localStorage.removeItem(FLAG_lesson);
        localStorage.removeItem(FLAG_attend);
        localStorage.removeItem(FLAG_ok);
    }
}*/

//setInterval(autoAttend, CHECK_INTERVAL);