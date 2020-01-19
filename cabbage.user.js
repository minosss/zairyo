// ==UserScript==
// @name         卷白菜
// @namespace    tm.minoprojects.com
// @version      0.1
// @description  添加资源网站播放入口，直接播放m3u8链接
// @author       mino
// @match        https://www.okzy.co/?m=*
// @connect      https://www.dplayer.tv
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    const info_c = document.querySelector('.vodInfo');
    const vod_items = document.createElement('div');

    const menu_list = document.createElement('div');
    menu_list.style.width = '20%';
    menu_list.style.height = '80%';
    menu_list.style.display = 'inline-block';
    menu_list.style.marginTop = '60px';
    menu_list.style.verticalAlign = 'top';
    menu_list.style.overflow = 'auto';
    menu_list.style.background = 'rgba(255, 255, 255, 0.1)';

    const frame = document.createElement('iframe');
    frame.style.width = '60%';
    frame.style.height = '80%';
    frame.style.marginTop = '60px';
    frame.allowFullscreen = true;

    let player = null;
    // player.url = 'https://www.dplayer.tv/dp/?url=';
    function play(url) {
        if (player == null) {
            player = document.createElement('div');
            player.style.zIndex = 99999;
            player.style.position = 'fixed';
            player.style.top = '0';
            player.style.left = '0';
            player.style.width = '100%';
            player.style.height = '100%';
            player.style.background = 'rgba(0,0,0,0.5)';
            player.style.textAlign = 'center';
            player.appendChild(frame);
            player.appendChild(menu_list);

            document.body.appendChild(player);

            player.addEventListener('click', function(e) {

                document.body.removeChild(player);
                frame.src = '';
                player = null;
            })
        }

        frame.src = 'https://www.dplayer.tv/dp/?url=' + url;
    }

    const input_list = document.querySelectorAll('input[name="copy_sel"][value$=".m3u8"]');
    let m3u8_list = '';

    input_list.forEach(function (ele) {
        const item = ele.parentElement.textContent.split('$');
        m3u8_list += '<button data-value="' + item[1] + '">' + item[0] + '</button>';
    })

    vod_items.innerHTML = '<div>' + m3u8_list + '</div>';
    info_c.appendChild(vod_items);
    menu_list.innerHTML = '<div>' + m3u8_list + '</div>';

    vod_items.addEventListener('click', function(e) {
        play(e.target.dataset.value);
    });

    menu_list.addEventListener('click', function(e) {
        e.preventDefault();
        e.stopPropagation();
        e.target.dataset.value && play(e.target.dataset.value);　
    });
})();
