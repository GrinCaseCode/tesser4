

$(document).ready(function() {

  $('.slider-catalog').slick({
		arrows: true,
		dots: false,
		infinite: false,
		touchThreshold: 1000,
		slidesToShow: 4,
		slidesToScroll: 1,
		prevArrow: '<div class="slick-prev slick-arrow"><i class="far fa-long-arrow-left"></i><div/>',
		nextArrow: '<div class="slick-next slick-arrow"><i class="far fa-long-arrow-right"></i><div/>',
		responsive: [
			{
				breakpoint: 992,
				settings: {
					slidesToShow: 3,
				}
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 2,
				}
			}
			]
		});



		$('.slider-catalog-main').slick({
			arrows: true,
			dots: false,
			infinite: false,
			touchThreshold: 1000,
			slidesToShow: 4,
			slidesToScroll: 1,
			prevArrow: '<div class="slick-prev slick-arrow"><i class="far fa-long-arrow-left"></i><div/>',
			nextArrow: '<div class="slick-next slick-arrow"><i class="far fa-long-arrow-right"></i><div/>',
			responsive: [
				{
					breakpoint: 992,
					settings: {
						slidesToShow: 3,
					}
				},
				{
					breakpoint: 768,
					settings: {
						slidesToShow: 1,
					}
				}
				]
			});


// Функция для автоскроллинга
function startAutoScroll(slider, direction) {
    return setInterval(function() {
        if (direction === 'prev') {
            slider.slick('slickPrev');
        } else {
            slider.slick('slickNext');
        }
    }, 20); // Интервал в 20 мс
}

let autoScrollInterval;

// Обработчик для кнопки "prev"
$(document).on('mousedown', '.slick-prev', function() {
    let slider = $(this).parent('.slick-slider');
    autoScrollInterval = startAutoScroll(slider, 'prev');
}).on('mouseup mouseleave', function() {
    clearInterval(autoScrollInterval);
});

// Обработчик для кнопки "next"
$(document).on('mousedown', '.slick-next', function() {
    let slider = $(this).parent('.slick-slider');
    autoScrollInterval = startAutoScroll(slider, 'next');
}).on('mouseup mouseleave', function() {
    clearInterval(autoScrollInterval);
});

});