

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


  $('.card-tabs li a').click(function(event) {
    event.preventDefault();
    var textTab = $(this).html();
    $(this).parent().parent().find("li").removeClass('active');
    $(this).parent().addClass('active');
    $(".tab-pane").fadeOut(0);
    var selectTab = $(this).attr("href");
    $(selectTab).fadeIn(200);

    $(".btn-tab").html(textTab);
		$(".btn-tab").removeClass("active");
  });

  jQuery('.tabs-wrap').each(function() {
		var currentTab = $(this);
		var initalTextTab = currentTab.find(".active a").html();
		currentTab.find(".btn-tab").html(initalTextTab);
}); 
$('.btn-tab').click(function() {
	$(this).toggleClass("active");
	$(this).siblings(".tabs").slideToggle(200);

  $('.card-tabs li a').click(function(event) {
    event.preventDefault();
    $(".tabs").slideUp(200);
  });
}); 



 $('.card-anchors li a').on('click', function(e) {
  e.preventDefault();
  
  var targetId = $(this).attr('href');
  
  $('html, body').animate({
    scrollTop: $(targetId).offset().top - 148
  }, 800); 
});
});