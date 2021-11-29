$(document).ready(
    function(){
        $(".preloder").delay(2000).fadeOut();
        $(window).scroll(
            function(){
                var scrolling = $(this).scrollTop();
                if(scrolling > 150){
                    $(".navbar").addClass("fixed-Navbar");
        
                }else{
                    $('.navbar').removeClass("fixed-Navbar")
                }
            }
        )
        $(function() {
            $('.selector').animatedHeadline({
                animationType: 'clip'
            });
          })
          $("#portfoli .nav .nav-item").click(
            function(){
                $(this).addClass("active").siblings().removeClass("active");
            }
        );
        var mixer = mixitup('.list');
        $(document).ready(function(){
            $('.venobox').venobox(
                  {
                    closeBackground: "#ffc155",
                    closeColor: '#fff',
                    framewidth : '400px',                            // default: ''
                    frameheight: '300px',                            // default: ''                         
                    bgcolor    : '#ff014f ',                          // default: '#fff'
                    titleattr  : 'data-title',                       // default: 'title'
                    numeratio  : true,                               // default: false
                    infinigall : true,                               // default: false
                    share      : ['facebook', 'twitter', 'download'], // default: []
                    spinColor: '#ff014f',
                    
                  }
            )
        });
        new WOW().init();
        AOS.init();
        $('.clients-container').slick({
            slidesToShow: 2,
            prevArrow: '<i class="fas fa-chevron-left preArrow"></i>',
            nextArrow: '<i class="fas fa-chevron-right nextArrow"></i>',
            responsive: [
                {
                  breakpoint: 1200,
                  settings: {
                    slidesToShow: 1,
                    arrows: false,
                    autoplay: true,
                  }
                },
            ]    
        });
        $('.team-container').slick({
            slidesToShow: 5,
            autoplay: true,
            arrows: false,
            centerMode: true,
            centerPadding: '0px',
            responsive: [
                {
                  breakpoint: 1200,
                  settings: {
                    slidesToShow: 3,
                    arrows: false,
                    autoplay: true,
                  }
                },
                {
                    breakpoint: 578,
                    settings: {
                      slidesToShow: 1,
                      arrows: false,
                      autoplay: true,
                    }
                  },


            ]    
        });
    }
   
);