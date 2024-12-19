//Copyright (c) 2024 SAYU
//This software is released under the MIT License, see LICENSE.

const interval = setInterval(() => {
    const logoutButtonFrame = document.querySelector('.logoutButtonFrame');

    if (logoutButtonFrame) {
        const time = document.createElement('li');
        const remainingTime = document.createElement('li');
        time.className = 'time';
        remainingTime.className = 'remaining-time';

        const schedule = [
            { start: "08:30", end: "10:00", label: "1限" },
            { start: "10:10", end: "11:40", label: "2限" },
            { start: "11:40", end: "12:30", label: "昼休み" },
            { start: "12:30", end: "14:00", label: "3限" },
            { start: "14:10", end: "15:40", label: "4限" },
            { start: "15:50", end: "17:20", label: "5限" },
            { start: "17:30", end: "19:00", label: "6限" }
        ];

        const updateTime = () => {
            const now = new Date();
            const nowMinutes = now.getHours() * 60 + now.getMinutes();
            time.textContent = `${now.getFullYear()}/${(now.getMonth() + 1).toString().padStart(2, '0')}/${now.getDate().toString().padStart(2, '0')} ${now.getHours().toString().padStart(2, '0')}:${now.getMinutes().toString().padStart(2, '0')}:${now.getSeconds().toString().padStart(2, '0')}`;

            let message = "授業時間外";
            for (let i = 0; i < schedule.length; i++) {
                const start = schedule[i].start.split(":").map(Number);
                const end = schedule[i].end.split(":").map(Number);
                const startMinutes = start[0] * 60 + start[1];
                const endMinutes = end[0] * 60 + end[1];

                if (nowMinutes >= startMinutes && nowMinutes < endMinutes) {
                    const remaining = endMinutes - nowMinutes;
                    message = `${schedule[i].label}終了まで残り${remaining}分`;
                    break;
                }

                if (i < schedule.length - 1) {
                    const nextStart = schedule[i + 1].start.split(":").map(Number);
                    const nextStartMinutes = nextStart[0] * 60 + nextStart[1];
                    if (nowMinutes >= endMinutes && nowMinutes < nextStartMinutes) {
                        const remaining = nextStartMinutes - nowMinutes;
                        if (schedule[i].label === "昼休み") {
                            message = "現在お昼休み";
                        } else {
                            message = `${schedule[i + 1].label}開始まで残り${remaining}分`;
                        }
                        break;
                    }
                }
            }

            remainingTime.textContent = message;
        };

        logoutButtonFrame.parentNode.insertBefore(time, logoutButtonFrame.nextSibling);
        logoutButtonFrame.parentNode.insertBefore(remainingTime, time.nextSibling);

        setInterval(updateTime, 1000);
        updateTime();

        clearInterval(interval);
    }
}, 100);
