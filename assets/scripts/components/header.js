document.addEventListener('DOMContentLoaded', () => {
  const header = document.querySelector('.header');

  let headerHeight = 0;
  headerHeight += parseInt(getComputedStyle(document.querySelector('.header > .container')).height);
  headerHeight += parseInt(getComputedStyle(document.querySelector('.header > .header-middle')).height);

  header.style.position = 'sticky';
  header.style.top = `-${headerHeight}px`;
});

document.addEventListener('DOMContentLoaded', () => {
  const catalogButton = document.querySelector('.header-bottom-navigation-catalog-button');
  const catalog = document.querySelector('.header-catalog');

  const sidebarItems = catalog.querySelectorAll('.header-catalog-sidebar__item');
  const contentItems = catalog.querySelectorAll('.header-catalog-content');
  const activeSidebarItemClass = 'header-catalog-sidebar__item_active';
  let activeId = null;

  const updateView = () => {
    contentItems.forEach(item => (item.style.display = item.dataset.catalogContentId === activeId ? '' : 'none'));
  };

  sidebarItems.forEach((item, itemIndex) => {
    if (itemIndex === 0) {
      item.classList.toggle(activeSidebarItemClass, true);
      activeId = item.dataset.catalogContentId ?? null;
      updateView();
    }

    item.addEventListener('mouseenter', () => {
      sidebarItems.forEach(item => item.classList.toggle(activeSidebarItemClass, false));
      item.classList.toggle(activeSidebarItemClass, true);
      activeId = item.dataset.catalogContentId ?? null;
      updateView();
    });
  });

  catalogButton.addEventListener('mouseenter', () => {
    catalog.classList.toggle('header-catalog_shown', true);
    catalogButton.classList.toggle('header-bottom-navigation-catalog-button_active', true);
  });

  catalog.addEventListener('mouseleave', () => {
    catalog.classList.toggle('header-catalog_shown', false);
    catalogButton.classList.toggle('header-bottom-navigation-catalog-button_active', false);
  });
});

document.addEventListener('DOMContentLoaded', () => {
  const cart = document.querySelector('.header-cart');
  const cartPopup = document.querySelector('.header-cart-popup');

  cart.addEventListener('mouseenter', () => {
    cart.classList.toggle('header-cart_expanded', true);
    cartPopup.classList.toggle('header-cart-popup_shown', true);
  });

  cartPopup.addEventListener('mouseleave', () => {
    cart.classList.toggle('header-cart_expanded', false);
    cartPopup.classList.toggle('header-cart-popup_shown', false);
  });
});
