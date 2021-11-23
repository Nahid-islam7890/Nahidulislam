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
    }
   
);