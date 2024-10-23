
$(document).ready(function() {

	$(document).on('click', '.item-select__value', function() {
		var $dropdown = $(this).siblings('.item-select__dropdown');
		var $parentSelect = $(this).parent('.item-select');
		$(".item-select").not($parentSelect).removeClass("active");
		$(".item-select").not($parentSelect).find('.item-select__value input').hide();
		$(".item-select").not($parentSelect).find('.item-select__value .item-select__text').show();
		$parentSelect.removeClass("error-input");
		$parentSelect.find(".text-error").fadeOut();
		$('.item-select__dropdown').not($dropdown).hide(); // Скрыть все другие выпадающие списки
		$dropdown.toggle();
		
		// Показать поле ввода и скрыть текстовое значение
		$(this).find('input').toggle().focus();
		$(this).find('.item-select__text').toggle();
		$(this).parent().toggleClass("active");
	  });
	  
	  $(document).on('click', '.item-select__dropdown li', function() {
		var $value = $(this).text();
		var $select = $(this).closest('.item-select');
		
		$select.find('.item-select__text').text($value).show();
		$select.find('input').val($value).hide();
		$select.find('.item-select__dropdown').hide();
		$select.removeClass("active");
		$(this).siblings().removeClass("active");
		$(this).addClass("active");

		$select.find('select').val($(this).data('value')).trigger('change');
	  });

	  $(document).on('click', '.item-select__value .fa-times-circle', function() {
		$(this).siblings("input").val("");
		$(this).siblings(".item-select__text").html("");
	  });
	
	
// Search through list items
$(document).on('input', '.item-select__value input', function(e) {
    var filter = $(this).val().toLowerCase();
    var $dropdown = $(this).closest('.item-select').find('.item-select__dropdown');
    var $dropdownItems = $dropdown.find('li');
    
    var matchFound = false;
    $dropdownItems.each(function() {
        var text = $(this).text().toLowerCase();
        if (text.indexOf(filter) > -1) {
            $(this).show();
            matchFound = true;
        } else {
            $(this).hide();
        }
    });
    
    // Check if any items are visible
    if (!matchFound) {
        if ($dropdown.find('.no-results').length === 0) {
            $dropdown.append('<div class="no-results">Ничего не найдено</div>');
        }
    } else {
        $dropdown.find('.no-results').remove();
    }
	  });
	  
	
	  // Закрытие выпадающего списка при клике вне его
	  $(document).on('click', function(event) {
		if (!$(event.target).closest('.item-select').length) {
		  $('.item-select__dropdown').hide();
		  $('.item-select__value input').hide();
		  $('.item-select__value .item-select__text').show();
		  $('.item-select').removeClass("active");
		}
	  });

	  $('.check-order').click(function() {
		var tabProd = $(this).data('value-check');
		$('.tab-checks').fadeOut(0);
		$('.tab-checks[data-tab-check="' + tabProd + '"]').fadeIn(0);
	});

	$('.next-order').click(function(e) {
		e.preventDefault();
		$(this).parents(".block-order").find(".edit-order").fadeIn();
		$(this).parents(".block-order__content").slideUp(200);
		$(this).parents(".block-order").next(".block-order").find(".block-order__content").slideDown(200);
		$(this).parents(".block-order").removeClass("active");
		$(this).parents(".block-order").next(".block-order").addClass("active");
	});

	$('.prev-order').click(function(e) {
		e.preventDefault();
		$(this).parents(".block-order").find(".edit-order").fadeIn();
		$(this).parents(".block-order__content").slideUp(200);
		$(this).parents(".block-order").prev(".block-order").find(".block-order__content").slideDown(200);
		$(this).parents(".block-order").removeClass("active");
		$(this).parents(".block-order").prev(".block-order").addClass("active");
	});

	$('.edit-order').click(function(e) {
		e.preventDefault();
		$(this).parents(".block-order").addClass("active");
		$(this).parents(".block-order").siblings(".block-order").removeClass("active");
		$(this).parents(".block-order").find(".block-order__content").slideDown(200);
		$(this).parents(".block-order").siblings(".block-order").find(".block-order__content").slideUp(200);
		});

		//validation
		function validateBlockOrder(blockOrder) {
			var isValid = true;
			var alertsWrap = $('<div class="alerts-wrap"></div>');

			blockOrder.find('input[required], textarea[required]').each(function() {
				var input = $(this);
				var alertInput = input.siblings('.alert-input');

				if (!input.val().trim()) {
					input.addClass('error');
					alertInput.show();
					alertsWrap.append(alertInput.clone().show());
					isValid = false;
					blockOrder.addClass("block-order_error");
					blockOrder.removeClass("block-order_copleted");
				} else {
					input.removeClass('error');
					alertInput.hide();
					blockOrder.removeClass("block-order_error");
					blockOrder.addClass("block-order_copleted");
				}
			});

			blockOrder.find('.alerts-wrap').remove();
			if (!isValid) {
				blockOrder.append(alertsWrap);
			}

			return isValid;
		}

		$('.next-order').on('click', function(e) {
			e.preventDefault();
			var blockOrder = $(this).closest('.block-order');
			if (validateBlockOrder(blockOrder)) {
				
			} else {

			}
		});

		$('.complete-order').on('click', function(e) {
			e.preventDefault();
			var isFormValid = true;
			var firstInvalidBlockOrder = null;

			$('.block-order').each(function() {
				var blockOrder = $(this);
				if (!validateBlockOrder(blockOrder)) {
					isFormValid = false;
					if (!firstInvalidBlockOrder) {
						firstInvalidBlockOrder = blockOrder;
					}
				}
			});

			if (!isFormValid && firstInvalidBlockOrder) {
				$('html, body').animate({
					scrollTop: firstInvalidBlockOrder.offset().top - 60
				}, 500);
				
			} else {
				
			}
		});



});