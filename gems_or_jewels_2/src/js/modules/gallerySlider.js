const gallerySlider = () => {

  $(document).ready(function(){
    $('.gallery__slider').slick({
        slidesToShow: 3,
        infinite: true,
        slidesToScroll: 1,
        autoplay: true,
        speed: 500,
        variableWidth: true,
        arrows: false,
        swipeToSlide: true,
        
    });
  }); 

};

export default gallerySlider;

