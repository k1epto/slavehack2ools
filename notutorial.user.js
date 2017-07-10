// ==UserScript==
// @name         notutorial
// @namespace    https://github.com/mcdfinn/slavehack2ools
// @version      0.1
// @description  remove annoying tutorial screen
// @author       professedhate
// @include      https://www.slavehack2.com/*
// @match        http://tampermonkey.net/?ext=dhdg&browser=chrome
// @require      http://code.jquery.com/jquery-latest.js
// ==/UserScript==

var gameStartScreen = document.getElementById("start_overlay");
setTimeout(function removeStart() {
    if (gameStartScreen === null) {
        gameStartScreen = document.getElementById("start_overlay");
    }
    else {
        document.getElementById("no1").click();
        document.getElementById("no2").click();
        getIpButton();
    }
}, 2000);