(function () {

  "use strict";

  // Are we on mobile?
  const list = matchMedia(
    '(max-width: 425px)'
  );

  if (!list.matches) return;

  // Otherwise setup listeners.
  const toggle = document.querySelector(
    'button[data-js-menu-toggle]'
  ) as HTMLButtonElement;

  const menu = document.getElementById(
    'menu'
  ) as HTMLDivElement;

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
