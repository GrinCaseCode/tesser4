document.addEventListener('DOMContentLoaded', () => {
  const hamburgerButton = document.querySelector('.header-touch-hamburger-button');
  const hamburgerMenu = document.querySelector('.hamburger-menu');
  const hamburgerMenuBackdrop = document.querySelector('.hamburger-menu__backdrop');
  const hamburgerMenuContentWrapper = document.querySelector('.hamburger-menu__wrapper');

  hamburgerButton.addEventListener('click', () => {
    const state = hamburgerButton.classList.toggle('header-touch-hamburger-button_active');
    hamburgerMenu.classList.toggle('hamburger-menu_shown', state);
    document.body.style.overflow = state ? 'hidden' : '';

    hamburgerMenuContentWrapper.animate(
      state ? [{ translate: '-100% 0' }, { translate: '0 0' }] : [{ translate: '0 0' }, { translate: '-100% 0' }],
      {
        duration: 150,
        easing: 'ease'
      }
    );
  });

  hamburgerMenuBackdrop.addEventListener('click', () => {
    hamburgerButton.classList.toggle('header-touch-hamburger-button_active', false);
    hamburgerMenu.classList.toggle('hamburger-menu_shown', false);
    document.body.style.overflow = '';

    hamburgerMenuContentWrapper.animate([{ translate: '0 0' }, { translate: '-100% 0' }], {
      duration: 150,
      easing: 'ease'
    });
  });
});

document.addEventListener('DOMContentLoaded', () => {
  const catalogButton = document.querySelector('.hamburger-menu-catalog-button');

  const showCatalogMenu = menu => {
    menu.classList.toggle('hamburger-menu-catalog-menu_shown', true);

    menu.animate([{ translate: '100% 0' }, { translate: '0 0' }], {
      duration: 150,
      easing: 'ease'
    });
  };

  const hideCatalogMenu = menu => {
    menu.classList.toggle('hamburger-menu-catalog-menu_shown', false);

    menu.animate([{ translate: '0 0' }, { translate: '100% 0' }], {
      duration: 150,
      easing: 'ease'
    });
  };

  catalogButton.addEventListener('click', () => {
    const menu = document.querySelector('.hamburger-menu-catalog-menu');
    showCatalogMenu(menu);
  });

  document.querySelectorAll('.hamburger-menu-catalog-menu').forEach(menu => {
    const closeMenuButton = menu.querySelector('.hamburger-menu-catalog-menu__close-button');
    closeMenuButton.addEventListener('click', () => hideCatalogMenu(menu));

    menu.querySelectorAll('.hamburger-menu-catalog-menu__item[data-catalog-menu-id]').forEach(item => {
      item.querySelector('svg').addEventListener('click', event => {
        event.preventDefault();
        const menu = document.querySelector(
          `.hamburger-menu-catalog-menu[data-catalog-menu-id="${item.dataset.catalogMenuId}"]`
        );
        showCatalogMenu(menu);
      });
    });
  });
});
