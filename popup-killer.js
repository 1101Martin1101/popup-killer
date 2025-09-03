// ==UserScript==
// @name         Ultra-fast popup killer
// @namespace    http://tampermonkey.net/
// @version      1.4
// @description  Instantly kills popups at start and returns focus to the original tab almost immediately
// @author       Kulih
// @match        *://*/*
// @grant        none
// @run-at       document-start
// ==/UserScript==

(function() {
    'use strict';

    if (window.opener || window.history.length <= 1) {
        console.log("Popup detected – closing immediately.");

        // Focus back to the original window
        if (window.opener && !window.opener.closed) {
            try { window.opener.focus(); } catch(e) {}
        }

        // Attempt to close instantly
        try { window.close(); } catch(e) {}

        // Second attempt right after initialization
        setTimeout(() => {
            try { window.close(); } catch(e) {}
        }, 0);
    }

    // Block opening of new tabs via JS
    window.open = function() {
        console.log("Blocked attempt to open a new tab");
        return null;
    };
})();
