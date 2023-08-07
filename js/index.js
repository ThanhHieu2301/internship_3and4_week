
$(document).ready(function(){

    $('.slide-s3').slick({
    dots: true,
    infinite: true,
    speed: 800,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
    {
    breakpoint: 1024,
    settings: {
    slidesToShow: 3,
    slidesToScroll: 3,
    infinite: true,
    dots: true
    }
    },
    {
    breakpoint: 600,
    settings: {
    slidesToShow: 2,
    slidesToScroll: 2
    }
    },
    {
    breakpoint: 480,
    settings: {
    slidesToShow: 1,
    slidesToScroll: 1
    }
    }
    
    ]
    });
    });
$(document).ready(function(){   

    $('.slide-s2').slick({
    infinite: true,
    slidesToShow: 4, //số lượng show
    slidesToScroll: 1   //số lượng chuyển
    });
    });


    // js cho nút scroll top 
$(document).ready(function(){
    $(window).scroll(function(){    
        if($(this).scrollTop()){    //if về top fade in và ngược lại
            $('.top').fadeIn()
                }
        else{
            $('.top').fadeOut();
        }
    });
    $(".top").click(function(){
        $('html,body').animate({
            scrollTop: 0    //quay về top (0) với tốc độ 1s
        }, 1000);   
    });
});

    // js cho bộ đếm 
$(document).ready(function(){

    $('.statistic-counter').counterUp({
    delay: 10,
    time: 2000
    });
});

    // js parallax
$(document).ready(function(){
    $('.parallax').parallax();  
    });

    $(document).ready(function() {
        $('#lightgallery').lightGallery();
    });

new WOW().init(); 