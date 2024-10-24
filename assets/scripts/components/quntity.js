$(document).ready(function () {

    $('.quantity input').on('focus input', function() {
      var $input = $(this);
      $input.parent().addClass("focused");
  }).blur(function() {
    $input.parent().removeClass("focused");
  });


  $(document).on('click', '.quantity-button', function() {
    var $button = $(this);
    var $input = $button.siblings('input[type="number"]');
    var currentValue = parseFloat($input.val());
    var min = parseFloat($input.attr('min'));
    var step = 1;
    var newValue;

    // Determine the step value based on the parent class
    if ($button.closest('.quantity').hasClass('quantity_square')) {
        step = 0.12;
    }

    // Increment or decrement the value
    if ($button.hasClass('quantity-up')) {
        newValue = currentValue + step;
    } else if ($button.hasClass('quantity-down')) {
        newValue = currentValue - step;
    }

    // Ensure the value doesn't go below the minimum
    if (newValue < min) {
        newValue = min;
    }

    // Set the new value to the input, format if necessary
    if (step === 0.12) {
        $input.val(newValue.toFixed(2));
    } else {
        $input.val(Math.round(newValue));
    }
});

});