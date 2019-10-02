
$(function() {

    function setVisibleImage(i) {
        $images.each((index, el) => {
            $(el).removeClass('slider__img--visible');
            });
        $images[i].classList.add('slider__img--visible');
    }

    function setActiveDot(i) {
        $dots.each((index, el) => {
            $(el).removeClass('slider__dot--active');
            });
        $dots[i].classList.add('slider__dot--active');
    }

    function getImages() {
        return $images = $( '.slider__img '); 
    }

    function getVisibleImageIndex() {
        return $visibleImageIndex = $('li').index($visibleImage);
    }

    function getVisibleImage() {
        return $visibleImage = $('.slider__img--visible');
    }


    let $slider = $('.slider-wrapper');
    let $navButtons = $('.slider-button');
    let $imagesQuantity = getImages().length;
    let $dots = $('.slider__dot');
    

    getVisibleImage()
    getVisibleImageIndex()
    
    $dots.mouseenter(function(e) {
        $(this).addClass('slider__dot--hover');
        }).mouseout(function(e) {
        $(this).removeClass('slider__dot--hover');
    });

    $dots.click(function(e) {
        let $index = $(this).index();
        setVisibleImage($index);
        setActiveDot($index);
        $visibleImageIndex = $index;  
    })

    $slider.mouseenter(function(e) {
        $navButtons.addClass('slider-button--visible');
        }).mouseleave(function(e) {
        $navButtons.removeClass('slider-button--visible');
        }); 
    
    
    $navButtons.mouseover(function(e) {
        $(this).addClass('slider-button--hover');
        }).mouseout(function(e) {
        $(this).removeClass('slider-button--hover');
    });

    $navButtons.click(function(e) {

        $(this).hasClass('slider__previous-button') ? $visibleImageIndex-- : $visibleImageIndex++ ;
        if ($visibleImageIndex < 0) {
            $visibleImageIndex = $imagesQuantity - 1;
        }
        else if ($visibleImageIndex > 3) {
            $visibleImageIndex = 0;
        }
               
        setVisibleImage($visibleImageIndex);
        setActiveDot($visibleImageIndex);
    })
   
});


