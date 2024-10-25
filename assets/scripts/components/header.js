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

  let isMouseOverCatalog = false;
let isMouseOverButton = false;

catalog.addEventListener('mouseenter', () => {
  isMouseOverCatalog = true;
});


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
    isMouseOverButton = true;
  });

  catalogButton.addEventListener('mouseenter', () => {
    catalog.classList.toggle('header-catalog_shown', true);
    catalogButton.classList.toggle('header-bottom-navigation-catalog-button_active', true);
  });

  catalogButton.addEventListener('mouseleave', () => {
    isMouseOverButton = false;
    setTimeout(() => {
      if (!isMouseOverCatalog && !isMouseOverButton) {
        catalog.classList.remove('header-catalog_shown');
        catalogButton.classList.remove('header-bottom-navigation-catalog-button_active');
      }
    }, 100); // задержка для проверки положения курсора
  });



  catalog.addEventListener('mouseleave', () => {
    isMouseOverCatalog = false;
    setTimeout(() => {
      if (!isMouseOverCatalog && !isMouseOverButton) {
        catalog.classList.remove('header-catalog_shown');
        catalogButton.classList.remove('header-bottom-navigation-catalog-button_active');
      }
    }, 100); // задержка для проверки положения курсора
  });

});

document.addEventListener('DOMContentLoaded', () => {
  const cart = document.querySelector('.header-cart');
  const cartPopup = document.querySelector('.header-cart-popup');

  // Показать popup при наведении на .header-cart
  cart.addEventListener('mouseenter', () => {
    cart.classList.add('header-cart_expanded');
    cartPopup.classList.add('header-cart-popup_shown');
  });

  // Скрыть popup при уходе за пределы .header-cart
  cart.addEventListener('mouseleave', (event) => {
    // Проверяем, что курсор ушёл за пределы и не попадает на popup
    if (!cart.contains(event.relatedTarget)) {
      cart.classList.remove('header-cart_expanded');
      cartPopup.classList.remove('header-cart-popup_shown');
    }
  });
});


$(document).ready(function() {
  $('.header-region-select').click(function() {
    if ($(this).siblings(".header-region__dropdown").is(":hidden")) {
      $(this).siblings(".header-region__dropdown").fadeIn(200);
    } else {
      $(this).siblings(".header-region__dropdown").fadeOut (200);
    }
  });

  $('.header-region__dropdown li').click(function() {
    var textRegion = $(this).html();
    $(this).siblings().removeClass("active");
    $(this).addClass("active");
    $(this).parents(".header-region").find(".header-region-select-button__text").html(textRegion);
    $(this).parents(".header-region").find(".header-region__dropdown").fadeOut (200);
  });


  $(document).mouseup(function (e) {
    var container = $(".header-region__dropdown");
    if (container.has(e.target).length === 0){
      $(".header-region__dropdown").fadeOut (200);
    }
  });

  $(".search-main input").on("keyup", function() {
    var $searchMain = $(this).closest(".search-main");
    var $searchResults = $searchMain.find(".search-results");

    if ($(this).val().trim() === "") {
        $searchResults.fadeOut(200);
    } else {
        $searchResults.fadeIn(200);
    }
});

$(document).mouseup(function(e) {
    $(".search-main").each(function() {
        var $searchMain = $(this);
        if (!$searchMain.is(e.target) && $searchMain.has(e.target).length === 0) {
            $searchMain.find(".search-results").fadeOut(200);
        }
    });
});
});