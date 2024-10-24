$(document).ready(function() {

    //Аякс запросы
    $('.link-card_favorite').on('click', function(e) {
        e.preventDefault(); 
        var idItem = $(this).parents(".item-catalog").attr("id");
        $.ajax({
            url: '/path/to/your/api',
            method: 'POST', 
            data: {
                itemId: idItem 
            },
            success: function(response) {
                console.log('Успешно добавлено в избранное:', response);
            },
            error: function(xhr, status, error) {
                console.error('Ошибка при добавлении в избранное:', error);
            }
        });
    });

    $('.link-card_compare').on('click', function(e) {
        e.preventDefault(); 
        var idItem = $(this).parents(".item-catalog").attr("id");
        $.ajax({
            url: '/path/to/your/api',
            method: 'POST', 
            data: {
                itemId: idItem 
            },
            success: function(response) {
                console.log('Успешно добавлено в сравнения:', response);
            },
            error: function(xhr, status, error) {
                console.error('Ошибка при добавлении в сравнения:', error);
            }
        });
    });

    $('.item-catalog .link-card').on('click', function() {
      $(this).toggleClass("active");
    });

    $(document).on('click', '.btn-tab-quantity', function() {
        event.preventDefault();
        $(this).siblings().removeClass('active');
        $(this).addClass('active');
        $(".tab-pane-quantity").fadeOut(0);
        var selectTab = $(this).attr("data-tab-quantity");
        $('.tab-pane-quantity[data-quantity="' + selectTab + '"]').fadeIn(0);
      });
    
});
