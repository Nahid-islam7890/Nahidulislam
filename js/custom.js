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
    }
   
);