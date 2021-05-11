
$(function() {
    getImages()
    getVisibleImage()
    getVisibleImageIndex()

    let $slider = $('.slider-wrapper');
    let $navButtons = $('.slider-button');
    let $imagesQuantity = $images.length;
    let $dots = $('.slider__dot');
    
    function setVisibleImage(i) {

        getVisibleImage()

        $visibleImage.removeClass('slider__img--visible');
        $($images[i]).addClass('slider__img--visible');

    }

    function setActiveDot(i) {

        getactiveDot()

        $($activeDot).removeClass('slider__dot--active');
        $($dots[i]).addClass('slider__dot--active');

    }

    function getImages() {
        return $images = $('.slider__img'); 
    }

    function getVisibleImageIndex() {
        return $visibleImageIndex = $images.index($visibleImage);
    }

    function getVisibleImage() {
        return $visibleImage = $('.slider__img--visible');
    }

    function getactiveDot() {
        return $activeDot = $('.slider__dot--active');
    }
  
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

        $(this).hasClass('slider__previous-button') ? $visibleImageIndex--: $visibleImageIndex++ ;
        if ($visibleImageIndex < 0) {
            $visibleImageIndex = $imagesQuantity - 1;
        }
        else if ($visibleImageIndex > ($imagesQuantity - 1)) {
            $visibleImageIndex = 0;
        }
        
        setVisibleImage($visibleImageIndex);
        setActiveDot($visibleImageIndex);
    })
   
});


