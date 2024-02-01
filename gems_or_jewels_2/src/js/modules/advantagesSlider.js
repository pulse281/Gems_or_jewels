
const advantagesSlider = () => {

    $(document).ready(function(){
        $('.advantages__cards').slick({
            slidesToShow: 1,
            infinite: true,
            variableWidth: true,
            arrows: false,
            centerMode: true,
            initialSlide: 1,
            swipeToSlide: true
        });
      }); 

};

export default advantagesSlider;