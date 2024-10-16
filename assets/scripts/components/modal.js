document.addEventListener('DOMContentLoaded', () => {
  const showModal = modal => {
    document.body.style.overflow = 'hidden';

    modal.classList.toggle('modal_shown', true);
    const modalContent = modal.querySelector('.modal-content');

    modalContent.animate(
      [
        { translate: '50% calc(-50% - 10px)', opacity: 0 },
        { translate: '50% -50%', opacity: 1 }
      ],
      { duration: 200, easing: 'ease' }
    );
  };

  const hideModal = modal => {
    document.body.style.overflow = '';

    const modalContent = modal.querySelector('.modal-content');
    modal.classList.toggle('modal_shown', false);

    modalContent.animate(
      [
        { translate: '50% -50%', opacity: 1 },
        { translate: '50% calc(-50% + 10px)', opacity: 0 }
      ],
      { duration: 200, easing: 'ease' }
    );
  };

  document.querySelectorAll('.modal').forEach(modal => {
    modal.querySelector('.modal__backdrop').addEventListener('click', () => {
      hideModal(modal);
    });

    modal.querySelector('.modal-content__close-button').addEventListener('click', () => {
      hideModal(modal);
    });
  });

  document.querySelectorAll('[data-modal-id]').forEach(element => {
    if (element.classList.contains('modal') || element.dataset.modalId === undefined) {
      return;
    }

    element.addEventListener('click', () => {
      const modal = document.querySelector(`.modal[data-modal-id="${element.dataset.modalId}"]`);
      showModal(modal);
    });
  });
});


$(document).ready(function() {
  // Функция для загрузки контента через AJAX
  function loadModalContent(modalId, url) {
    $.ajax({
      url: url, // Укажите путь к вашему HTML файлу
      method: 'GET',
      success: function(response) {
        // Вставляем загруженный контент в модальное окно
        $('.modal[data-modal-id="' + modalId + '"] .modal-content__inner').html(response);
        // Показываем модальное окно
        $('.modal[data-modal-id="' + modalId + '"]').fadeIn();
      },
      error: function() {
        alert('Ошибка при загрузке контента.');
      }
    });
  }

  // Открытие модального окна при клике на кнопку
  $('button[data-modal-id]').on('click', function() {
    const modalId = $(this).data('modal-id'); 
    const url = $(this).data('modal-url'); 
    loadModalContent(modalId, url);
  });

});