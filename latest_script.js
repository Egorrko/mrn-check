// ==UserScript==
// @name         ❌ УДАЛИТЕ МЕНЯ
// @description  Ивент закончился. Пожалуйста, удалите этот скрипт из Tampermonkey.
// @version      999.0
// @namespace    local.itd.pixelbattle.overlay
// @match        https://pixel.itd.com/*
// @match        https://pixel.xn--d1ah4a.com/*
// @grant        GM_addStyle
// @run-at       document-idle
// ==/UserScript==

// Нет @updateURL и @downloadURL — после этого обновления авто-обновления прекратятся.

(function () {
  'use strict';

  const STYLE = `
    #__itd_sunset_banner {
      position: fixed;
      bottom: 16px;
      left: 50%;
      transform: translateX(-50%);
      z-index: 2147483647;
      background: #1a1a1a;
      color: #fff;
      font: 14px/1.5 Inter, system-ui, sans-serif;
      padding: 14px 20px;
      border-radius: 12px;
      border: 1px solid rgba(255,80,80,0.5);
      box-shadow: 0 8px 24px rgba(0,0,0,0.5);
      max-width: 380px;
      text-align: center;
      pointer-events: auto;
    }
    #__itd_sunset_banner b {
      color: #ff6060;
      display: block;
      margin-bottom: 6px;
      font-size: 15px;
    }
    #__itd_sunset_banner small {
      display: block;
      opacity: 0.6;
      margin-top: 6px;
      font-size: 11px;
    }
    #__itd_sunset_close {
      display: inline-block;
      margin-top: 10px;
      padding: 6px 16px;
      background: rgba(255,255,255,0.1);
      border: 1px solid rgba(255,255,255,0.15);
      border-radius: 8px;
      cursor: pointer;
      font: inherit;
      color: #fff;
    }
    #__itd_sunset_close:hover { background: rgba(255,255,255,0.18); }
  `;

  try { GM_addStyle(STYLE); } catch (e) {
    const s = document.createElement('style');
    s.textContent = STYLE;
    document.head?.appendChild(s);
  }

  const banner = document.createElement('div');
  banner.id = '__itd_sunset_banner';
  banner.innerHTML = `
    <b>❌ Ивент завершён</b>
    Скрипт «ДЛЯ ИТД от MIRRONAKE» больше не нужен.<br>
    Пожалуйста, удалите его из Tampermonkey.
    <br>
    <button id="__itd_sunset_close">Закрыть</button>
    <small>Это сообщение исчезнет само, больше не обновляется.</small>
  `;

  const mount = () => {
    if (!document.body) return;
    document.body.appendChild(banner);
    document.getElementById('__itd_sunset_close')?.addEventListener('click', () => banner.remove());
  };

  if (document.body) {
    mount();
  } else {
    document.addEventListener('DOMContentLoaded', mount);
  }
})();
