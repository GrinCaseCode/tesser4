

$(document).ready(function() {

  $('.slider-for').slick({
		arrows: false,
		dots: false,
		infinite: true,
		touchThreshold: 1000,
    asNavFor: '.slider-nav',
		slidesToShow: 1,
		slidesToScroll: 1,
		prevArrow: '<div class="slick-prev slick-arrow"><i class="far fa-chevron-left"></i><div/>',
		nextArrow: '<div class="slick-next slick-arrow"><i class="far fa-chevron-right"></i><div/>',
	});

  $('.slider-nav').slick({
		arrows: true,
		dots: false,
		infinite: true,
		touchThreshold: 1000,
    asNavFor: '.slider-for',
    focusOnSelect: true,
		slidesToShow: 3,
		slidesToScroll: 1,
		prevArrow: '<div class="slick-prev slick-arrow"><i class="far fa-chevron-left"></i><div/>',
		nextArrow: '<div class="slick-next slick-arrow"><i class="far fa-chevron-right"></i><div/>',
	});

  					// Функция для автоскроллинга
	function startAutoScroll(slider, direction) {
		return setInterval(function() {
			if (direction === 'prev') {
				slider.slick('slickPrev');
			} else {
				slider.slick('slickNext');
			}
		}, 20); // Интервал в 300 мс
	}

	let autoScrollInterval;

	// Обработчик для кнопки "prev"
	$('.slick-prev').on('mousedown', function() {
		autoScrollInterval = startAutoScroll($('.slick-slider'), 'prev');
	}).on('mouseup mouseleave', function() {
		clearInterval(autoScrollInterval);
	});

	// Обработчик для кнопки "next"
	$('.slick-next').on('mousedown', function() {
		autoScrollInterval = startAutoScroll($('.slick-slider'), 'next');
	}).on('mouseup mouseleave', function() {
		clearInterval(autoScrollInterval);
	});


  $(".tabs-product a").click(function (event) {
    event.preventDefault();
    $(this).parent().parent().find("li").removeClass("active");
    $(this).parent().addClass("active");
    $(".tab-pane-product").fadeOut(0);
    var selectTab = $(this).attr("href");
    $(selectTab).slideDown(200);
  });


});