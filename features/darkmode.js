//Copyright (c) 2024 SAYU
//This software is released under the MIT License, see LICENSE.

(function () {
    const overlay = document.createElement('div');
    overlay.id = 'loadingOverlay';
    overlay.style.position = 'fixed';
    overlay.style.top = '0';
    overlay.style.left = '0';
    overlay.style.width = '100vw';
    overlay.style.height = '100vh';
    overlay.style.backgroundColor = '#000000';
    overlay.style.zIndex = '9999';
    overlay.style.display = 'flex';
    overlay.style.justifyContent = 'center'; 
    overlay.style.alignItems = 'center';
    overlay.style.color = '#ffffff';
    overlay.style.fontSize = '2em';
    overlay.style.fontFamily = 'Arial, sans-serif';
    const loadingText = document.createElement('div');
    loadingText.innerText = 'Loading...';
    overlay.appendChild(loadingText);
    document.documentElement.appendChild(overlay);
})();

function DarkMode() {
    const darkModeStyles = `
        table.cs_table2 tr.tdBg01, table.cs_table5 th, table.cs_table2 th, .centerLabel, .centerLabel, .cpButton, input.cs_submitBt, input.cs_Bt, input.reload, input.cs_searchBt, p.box01, .cpButton.highlight, .dataBox, body, .menuColumn, .homeProfHeader, .homeProfContents, .homeProfImage, .study, .last_login_date, .dayBox, .cpLabel, .courseCardArea, .newsArea, .newsBlock, .newsTitle, .newsContents, .newsLine {
            background-color: #000000;
            color: #ffffff;
        }

        p.box02, .headerContents, .breadCrumbBar, .menuColumn > ul > li > ul > li, .courseMenu, div#cs_rightVox, div#cs_tab_area li.tab_active, div#cs_tab_area li, table.cs_table3a th, table.cs_table3b th, table.courseTable3 th.bg01, div.box01, div.textarea_title01, div#cs_centerVox2, p.box06, .breadCrumb li {
            background-color: #000000;
        }

        .headerContents .header {
            background-color: #000000;
            -webkit-box-shadow: 0px 1px 1px 0px #ffffff;
        }

        .userAction, .userAction ul li a, .userName, .iconText span, .homeProfName, .homeProfDetail, .study a, .last_login_date a, .newsTitle span, .newsSub a, .cpLabel, .menuColumn ul li a, p.textoverflow, .base, div#cs_tab_area a, .cpButton span {
            color: #ffffff;
        }

        .home .contentsColumn, .addMessBox p, .allDisp a {
            background-color: #000000;
            color: #ffffff;
        }

        .newsBlock {
            border-left: 5px solid #000000;
            border-right: 5px solid #000000;
        }

        .csbStr {
            background-color: #292929;
        }

        .csbSearch {
            background-color: #1e1e1e;
        }

        .courseCard {
            background-color: #222222;
            color: #ffffff;
            border: 1px solid #ffffff;
        }

        .courseCardInfo {
            background-color: #464646;
        }

        .courseCardName {
            color: #ffffff;
        }

        .menuColumn ul li span, .menuColumn li.current > a {
            color: #ffffff;
        }

        .menuColumn > ul > li > a {
            background-color: #000000;
        }

        .homeProfImage img, .iconText img, .newsSub img, .userAction img {
            filter: brightness(0.7);
        }

        .newsArea .newsBlock {
            border-bottom: 1px solid #333333;
        }

        .study a:hover, .last_login_date a:hover, .newsSubO a:hover, .allDisp a:hover {
            color: #bb86fc;
        }

        .homeProfNameLink {
            border-bottom: 1px solid #ffffff;
        }

        .dayBox {
            background-color: #000000;
        }

        .cpLabel {
            color: #ffab00;
        }

        .cpLabel.orange {
            color: #ffab00;
        }

        .menuColumn li.current > a, .menuColumn li.current > a:hover {
            background-color: #ffab00;
        }

        .menuColumn > ul > li > ul > li > a:hover {
            background-color:#ffda90;
        }

        .courseCardArea input {
            display: none;
        }

        .courseCardArea input[type="hidden"] {
            background-color: #333333;
            color: #ffffff;
        }

        a {
            color: #ebdaff;
        }

        span.grayblock {
            background-color: #212121;
        }

        span.orangeblock {
            background-color: #646464;
        }

        span.blueblock {
            background-color: #c30000;
        }

        .allOpenText {
            color: #707070;
        }

        textarea#answer, .cs_inVox textarea {
            background-color: #000000;
            color: #ffffff;
            border: 1px solid #ffffff;
        }

        .ui-wrapper, .cs_inVox .ui-wrapper {
            background-color: #000000;
            border: 1px solid #ffffff;
        }

        h3 {
            color: #ffffff;
        }

        h3.cs_h301 {
            background-color: #494949;
            border-left: 5px solid #bbbbbb;
            color: #ffffff;
        }

        h3.cs_h303 {
            background-color: #636363;
            border-left: 5px solid #ffffff;
        }

        h4.cs_h402 {
            background-color: #000000;
            color: #ffffff;
        }

        div#loadingBlock {
            z-index: 0;
        }

        div#cs_tab_area li, div#cs_tab_area li.tab_active {
            background-image: none;
            background-color:#000000;
            color:#ffffff;
        }
    `;

    const styleTag = document.createElement('style');
    styleTag.id = 'darkModeStyles';
    styleTag.innerHTML = darkModeStyles;
    document.head.appendChild(styleTag);
}

function removeLoadingOverlay() {
    const overlay = document.getElementById('loadingOverlay');
    if (overlay) {
        overlay.style.display = 'none';
        document.documentElement.removeChild(overlay);
    }
}

function applyDarkModeWithOverlayRemoval() {
    DarkMode();
    const interval = setInterval(() => {
        const header = document.querySelector('.headerContents .header');
        if (header && getComputedStyle(header).backgroundColor === 'rgb(0, 0, 0)') {
            clearInterval(interval);
            removeLoadingOverlay();
        }
    }, 100);
}

if (document.readyState === 'loading') {
    document.addEventListener('readystatechange', () => {
        if (document.readyState === 'complete') {
            applyDarkModeWithOverlayRemoval();
        }
    });
} else {
    applyDarkModeWithOverlayRemoval();
}