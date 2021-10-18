// ==UserScript==
// @name         禁用广告检测
// @namespace    https://github.com/minosss/user.js
// @version      0.1
// @description  禁用广告检测，避免延迟的检测导致白屏
// @author       mino
// @match        https://www.cocomanga.com/*
// @grant        none
// @run-at       document-idle
// ==/UserScript==

(function() {
    'use strict';
    window.__jsadsuccess = true;
})();
