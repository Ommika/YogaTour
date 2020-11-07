$(document).ready(function () {

    function openModal() {
        $('.overlay').fadeIn(500);
        $('.modal').show(500);
    }

    function closeModal() {

        if ($('.modal').css('display') == 'block') {
            $('.modal').hide(500);
            $('.overlay').fadeOut(500);
        } else if ($('.thanks').css('display') == 'block') {
            $('.thanks').hide(500);
            $('.overlay').fadeOut(500);
        } else {
            console.log("Что-то пошло не так!");
        }

    }

    $('#form').on('submit', function (event) {
        event.preventDefault();
        $('.modal').hide(500);
        $('.thanks').show(500);
    });

    function closeThanks() {
        $('.thanks').hide();
        $('.overlay').fadeOut(500);
    }

    $('.main_btna').on('click', openModal);
    $('.main_btn').on('click', openModal);
    $('.overlay').on('click', closeModal);
    $('.close:first').on('click', closeModal);
    $('.back').on('click', closeThanks);


    // Disable #x
    // $(".submit").prop("disabled", true);

    // Enable #x
    // $("#x").prop("disabled", false);


});