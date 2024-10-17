

$(document).ready(function() {

 $('.links-anchors a').on('click', function(e) {
  e.preventDefault();
  
  var targetId = $(this).attr('href');
  
  $('html, body').animate({
    scrollTop: $(targetId).offset().top - 50
  }, 800); 
});
});