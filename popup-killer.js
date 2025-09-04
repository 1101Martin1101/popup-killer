// ==UserScript==
// @name         Ultra-fast popup killer
// @namespace    http://tampermonkey.net/
// @version      1.5
// @description  Instantly kills popups at start and returns focus to the original tab almost immediately
// @author       Kulih
// @match        *://*.bombuj.si/*
// @match        *://*/*
// @grant        none
// @run-at       document-start
// ==/UserScript==

(function () {
  'use strict';

  const isBombujHost = (host) =>
    !!host && (host === 'bombuj.si' || host.endsWith('.bombuj.si'));

  const hereIsBombuj = isBombujHost(location.hostname);

  if (!hereIsBombuj) {
    // We are outside Bombuj → check if this tab was opened from Bombuj
    const ref = document.referrer;
    let fromBombuj = false;
    try {
      if (ref) {
        const rh = new URL(ref).hostname;
        fromBombuj = isBombujHost(rh);
      }
    } catch (e) {}

    if (fromBombuj || window.opener) {
      console.log('Popup from Bombuj detected – closing in 10ms');
      setTimeout(() => {
        try { window.close(); } catch (e) {}
      }, 10);
    }
  }
})();


