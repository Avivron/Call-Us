    $(document).ready(function(){
        $(".button1").click(function(){
            $('.step-one').removeClass('animother');
            $('.step-one').addClass('anim');
            $('.swipeRight').removeClass('animreverse');
            $('.swipeRight').addClass('animother');
        });
        $(".backbtn1").click(function(){
            $('.step-one').addClass('animother');
            $('.swipeRight').addClass('animreverse');
            event.preventDefault();
        });
        $(".button2").click(function(){
            $('.swipeRight').removeClass('animother');
            $('.swipeRight').addClass('anim');
            $('.swipeRight1').removeClass('animreverse');
            $('.swipeRight1').addClass('animother');
            $("html").css("overflow-x", "hidden");

        });
        $(".backbtn2").click(function(){
            $('.swipeRight').addClass('animother');
            $('.swipeRight1').addClass('animreverse');
        });
        $(".button3").click(function(){
            $('.swipeRight1').removeClass('animother');
            $('.swipeRight1').addClass('anim');
            $('.swipeRight2').removeClass('animreverse');
            $('.swipeRight2').addClass('animother');
        });
        $(".backbtn3").click(function(){
            $('.swipeRight1').addClass('animother');
            $('.swipeRight2').addClass('animreverse');
        });
        $(".button4").click(function(){
            $('.swipeRight2').removeClass('animother');
            $('.swipeRight2').addClass('anim');
            $('.swipeRight3').removeClass('animreverse');
            $('.swipeRight3').addClass('animother');
        });
        $(".backbtn4").click(function(){
            $('.swipeRight2').addClass('animother');
            $('.swipeRight3').addClass('animreverse');

        });
        $(".button5").click(function(){
            $('.swipeRight3').removeClass('animother');
            $('.swipeRight3').addClass('anim');
            $('.swipeRight4').removeClass('animreverse');
            $('.swipeRight4').addClass('animother');
            event.preventDefault();

        });
        $(".backbtn5").click(function(){
            $('.swipeRight3').addClass('animother');
            $('.swipeRight4').addClass('animreverse');

        });
        $(".button6").click(function(){
            $('.swipeRight4').removeClass('animother');
            $('.swipeRight4').addClass('anim');
            $('.swipeRightlast').addClass('animother');
            event.preventDefault();

        });
      
    

      });
