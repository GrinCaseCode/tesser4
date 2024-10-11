

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

  $('.btn-tab-quantity').click(function(event) {
    event.preventDefault();
    $(this).siblings().removeClass('active');
    $(this).addClass('active');
    $(".tab-pane-quantity").fadeOut(0);
    var selectTab = $(this).attr("data-tab-quantity");
    $('.tab-pane-quantity[data-quantity="' + selectTab + '"]').fadeIn(0);
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