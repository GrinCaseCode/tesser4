
$(document).ready(function() {
  $('.slider-billbord').slick({
		arrows: false,
		dots: true,
		infinite: true,
    fade: true,
    autoplay: true,
    autoplaySpeed: 4000,
		touchThreshold: 1000,
		slidesToShow: 1,
		slidesToScroll: 1,
		prevArrow: '<div class="slick-prev slick-arrow"><i class="far fa-chevron-left"></i><div/>',
		nextArrow: '<div class="slick-next slick-arrow"><i class="far fa-chevron-right"></i><div/>',
	});

  $('.tabs-main li a').click(function(event) {
    event.preventDefault();
    var textTab = $(this).html();
    $(this).parent().parent().find("li").removeClass('active');
    $(this).parent().addClass('active');
    $(".tab-pane-main").fadeOut(0);
    var selectTab = $(this).attr("href");
    $(selectTab).fadeIn(200);
    $('.tab-container-main .slider-catalog').slick('setPosition');
    $('.tab-container-main .slider-catalog-main').slick('setPosition');
  });

});