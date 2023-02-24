// ==UserScript==
// @name         Stop scrolling in google slides
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Stop Google Slides from advancing between slides when (accidentially) scrolling on the mouse (esp. for Apple Magic Mouse)
// @author       Michael Eckert
// @match        https://docs.google.com/presentation/*
// @icon         https://ssl.gstatic.com/docs/presentations/images/favicon5.ico
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    window.addEventListener("wheel", function(e) {
        console.log("Stopping wheel event");
        e.stopPropagation();
    }, true);

    console.log("Tampermonkey script loaded");
})();