$(window).on("scroll", function() {
    if ($(this).scrollTop() > 150) {
        document.getElementById("headerModoMapa").classList.add('fondoHeaderScroll');
    } else {
        document.getElementById("headerModoMapa").classList.remove('fondoHeaderScroll');
    }
});