

$(document).ready(function() {

  $('.slider-card').slick({
		arrows: true,
		dots: false,
		infinite: true,
		touchThreshold: 1000,
		slidesToShow: 1,
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


  // Обработчик клика по вкладкам
  $('.tabs button').click(function(e) {
    e.preventDefault();
    var textTab = $(this).html();
    $(".btn-tab").html(textTab);
		$(".btn-tab").removeClass("active");

    $('.tabs li').removeClass('active');
    $(this).parent().addClass('active');

    var tab = $(this).data('tab');

    if (tab === 'all') {
        $('.col-catalog').fadeIn(200);
    } else {
        $('.col-catalog').fadeOut(0);
        $('.col-catalog[data-product="' + tab + '"]').fadeIn(200);
    }
});


  jQuery('.tabs-wrap').each(function() {
		var currentTab = $(this);
		var initalTextTab = currentTab.find(".active button").html();
		currentTab.find(".btn-tab").html(initalTextTab);
}); 
$('.btn-tab').click(function() {
	$(this).toggleClass("active");
	$(this).siblings(".tabs").slideToggle(200);

  $('.card-tabs li button').click(function(event) {
    event.preventDefault();
    $(".tabs").slideUp(200);
  });
}); 



 $('.card-anchors li a').on('click', function(e) {
  e.preventDefault();
  
  var targetId = $(this).attr('href');
  
  $('html, body').animate({
    scrollTop: $(targetId).offset().top - 48
  }, 800); 
});
});