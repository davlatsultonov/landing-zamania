$(function () {
    $('.js-feedback-toggle').click(function (e) {
        e.preventDefault();

        $('.modal-view').toggleClass('modal-view--open');
        $('.wrapper').toggleClass('modal-view--open');
    })

    let isValidMask = false;

    $('.phone-mask').mask('+7 (000) 000-00-00', {
        onComplete: function (cep) {
            isValidMask = true;
        },
        onInvalid: function (cep) {
            isValidMask = false;
        },

    });

    // Отправка заявки
    $('.js-zayavka').submit(function (e) {
        e.preventDefault();

        if (isValidMask) {
            $.post('https://zamania.vskidke.ru/bx', $(this).serialize(), function (response) {
                location.href = '/thanks';
            })
        }
    })

    resizeWrapper()

    $(window).resize(resizeWrapper);

    function resizeWrapper() {
        $('.wrapper').height($('body').height() - 64);
    }
})