"use strict";
(function () {
    "use strict";
    // Otherwise setup listeners.
    const toggle = document.querySelector('button[data-js-menu-toggle]');
    const menu = document.getElementById('menu');
    toggle.addEventListener('click', (event) => {
        event.stopPropagation();
        menu.toggleAttribute('open');
    });
    document.addEventListener('click', () => {
        if (menu.hasAttribute('open')) {
            menu.toggleAttribute('open');
        }
    });
})();
