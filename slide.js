$(document).ready(function() {

    var currentIndex = 0;
    slides = $('#slideshow div');
    slideslength = slides.length;

    function cycle() {
        var slide = $('#slideshow div').eq(currentIndex);
        slides.hide();
        slide.fadeIn(500).css('display', 'inline-block');
    }

    var autoSlide = setInterval(function() {
        currentIndex++;
        if (currentIndex > slideslength - 1) {
            currentIndex = 0;
        }
        cycle();
    }, 3000);

    $('.right').click(function() {
        // clearInterval(autoSlide);
        currentIndex++;
        if (currentIndex > slideslength - 1) {
            currentIndex = 0;
        }
        cycle();
    });

    $('.left').click(function() {
        currentIndex--;
        if (currentIndex < 0) {
            currentIndex = slideslength - 1;
        }
        cycle();
    });

    $('#slideshow').hover(function() {
        clearInterval(autoSlide);
    }, function() {
        autoSlide = setInterval(function() {
            currentIndex++;
            if (currentIndex > slideslength - 1) {
                currentIndex = 0;
            }
            cycle();
        }, 3000);
    });



});
