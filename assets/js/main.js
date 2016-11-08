$(function() {

    $('.sort__category').on('click', function() {
        // $('.sort__categories').slideToggle(300);
        $(this).parent().find('.tags').slideToggle(300);
        return false;
    });

    $('.tags').on('click', 'li', function() {
        $(this).toggleClass('tags__item-active');
        return false;
    });

    $('.games__item').on('click', '.games__transparency', function() {
        $(this).parents('.games__item').find('.games__content').slideToggle(300);
        return false;
    });

    $('.games__slideup').on('click', function() {
        $(this).parents('.games__content').slideUp(300);
        return false;
    });

    $('.games__comment-link').on('click', function() {
        $(this).next('.games__comment').slideToggle(300);
        return false;
    });

    $('.games__comment-link-slideup').on('click', function() {
        $(this).parents('.games__comment').slideUp(300);
        return false;
    });
    
    $.get('index.html', function(r) {
        console.log(r);
    })


});