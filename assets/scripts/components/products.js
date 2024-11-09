
$(document).ready(function() {


	  // Обработчик клика по вкладкам
	  $('.tabs-filter button').click(function(e) {
		e.preventDefault();
	
		$('.tabs-filter li').removeClass('active');
		$(this).parent().addClass('active');
	
		var tab = $(this).data('tab');
	
		if (tab === 'all') {
			$('.col-catalog').fadeIn(200);
		} else {
			$('.col-catalog').fadeOut(0);
			$('.col-catalog[data-product="' + tab + '"]').fadeIn(200);
		}
	});
	const $listSidebar = $('.page-design-projects .list-sidebar');
	const threshold = 5;

	$listSidebar.each(function() {
	  const $checkboxes = $(this).find('.checkbox');
	  if ($checkboxes.length > threshold) {
		const $showMoreBtn = $('<a href="#" class="show-more">Показать все</a>');
		$(this).after($showMoreBtn);

		$showMoreBtn.on('click', function(e) {
		  e.preventDefault();
		  const $currentListSidebar = $(this).prev('.list-sidebar');
		  const $hiddenCheckboxes = $currentListSidebar.find('.checkbox:nth-child(n+5)');
		  if ($hiddenCheckboxes.is(':visible')) {
			$hiddenCheckboxes.slideUp();
			$(this).text('Показать все');
		  } else {
			$hiddenCheckboxes.slideDown();
			$(this).hide();
		  }
		});
	  }
	});

	 /*range slider*/

   jQuery('.range-catalog').each(function() {
    var $range = $(this).find(".range-catalog__input"),
		$from = $(this).find(".control-input__from"),
		$to = $(this).find(".control-input__to"),
		min =  $(this).find(".control-input__from").attr("min"),
		max = $(this).find(".control-input__to").attr("max")
		$range.ionRangeSlider({
			type: "double",
			min: min,
			max: max,
			from: $from,
			to: $to,
			prettify_enabled: true,
			onChange: function(data) {
				updateValues()
			}
		});
		$range = $range.data("ionRangeSlider");
		var updateValues = function() {
			var res = $range.result;
			$from.val(res.from, true);
			$to.val(res.to,true)
		};
		$from.on("focus", function() {
			this.value = this.value;
			this.focus();
			this.selectionStart = this.value.length
		}).on("input", function() {
			$range.update({
				from: this.value
			})
		}).on("blur", updateValues);
		$to.on("focus", function() {
			this.value = this.value;
			this.focus();
			this.selectionStart = this.value.length
		}).on("input", function() {
			$range.update({
				to: this.value
			})
		}).on("blur", updateValues)

	});

  $(".item-sidebar__head").click(function() {
    $(this).parent().toggleClass("active");
    $(this).siblings(".item-sidebar__content").slideToggle(200);
  });

  $('.tabs-products__button').click(function(e) {
    e.preventDefault();
    var tabProd = $(this).data('value-product');
    $('.tab-products').fadeOut(0);
    $('.tab-products[data-tab-product="' + tabProd + '"]').fadeIn(200);
});

$('.item-sidebar input').on('change', function() {
  var $itemSidebar = $(this).closest('.item-sidebar');
  var $tooltipSidebar = $('.tooltip-sidebar');

  $tooltipSidebar.appendTo($itemSidebar).fadeIn(200);
});

$('.btn-open-sidebar').click(function() {
$(this).addClass("active");
  $(this).siblings(".unit-sidebar").addClass("active");
  $("body").addClass("body_fixed");
});
$('.unit-sidebar__close').click(function() {
  $(this).closest(".unit-sidebar").removeClass("active");
  $('.btn-open-sidebar').removeClass("active");
  $("body").removeClass("body_fixed");
});

});