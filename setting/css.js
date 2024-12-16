```
Copyright (c) 2024 SAYU
This software is released under the MIT License, see LICENSE.
```

window.onload = function() {
    setTimeout(function() {
        var firstLoading = document.querySelector('.loading');
        if (firstLoading) {
            firstLoading.style.transition = 'opacity 1.3s';
            firstLoading.style.opacity = 0;
            setTimeout(function() {
                firstLoading.style.display = 'none';
            }, 1000);
        }
    }, 1500);
};

document.addEventListener("settings-changed", () => {
    const status = document.getElementById("status");
    status.style.opacity = 1;
    setTimeout(() => {
        status.style.opacity = 0;
    }, 3000);
});

document.addEventListener("settings-loaded", () => {
    const switches = document.querySelectorAll(".switch-container");

    switches.forEach((switchContainer) => {
        const checkbox = switchContainer.querySelector("input[type='checkbox']");
        const label = switchContainer.querySelector(".switch-label");

        if (checkbox.checked) label.classList.add("gradient-label");
        else label.classList.remove("gradient-label");

        checkbox.addEventListener("change", () => {
            if (checkbox.checked) label.classList.add("gradient-label");
            else label.classList.remove("gradient-label");
        });
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const autoAttendCheckbox = document.getElementById("auto-attend");
    const attendSettingContainer = document.querySelector(".attendsetting");

    autoAttendCheckbox.addEventListener("change", function() {
        if (autoAttendCheckbox.checked) {
            attendSettingContainer.style.display = "block";
        } else {
            attendSettingContainer.style.display = "none";
        }
    });
});
