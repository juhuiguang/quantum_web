$(function(){
    console.log("又是一年迎财神，前30年都没有遇上，希望今年财神赏个脸！");
    console.log("爆料，此网站一边迎着财神一边开发的。");
    fullscreen();
    var mySwiper = new Swiper ('.swiper-container', {
        direction: 'vertical',
        loop: true,
        effect: 'fade',
        direction : 'vertical',
        autoplay:true,
        speed:3000,
        // 如果需要分页器
        pagination: '.swiper-pagination',

        // // 如果需要前进后退按钮
        // nextButton: '.swiper-button-next',
        // prevButton: '.swiper-button-prev',

        // // 如果需要滚动条
        // scrollbar: '.swiper-scrollbar',
    });

    $("#menu").click(function(){
        gotomain();
    });

    function fullscreen(){
        var width=$(window).width();
        var height=$(window).height();
        //竖屏的情况
        if(height>width){
            //var rate=height/1080*100;
            $(".fullscreen").width(width).height(height).css("background-size","auto 100%");
        }else{
            //var rate=width/1920*100;
            $(".fullscreen").width(width).height(height).css("background-size","100% auto");
        }
    }

    function gotomain(){
        $("#main").show().animate({left:0},800,null,function(){
            $("#main").css({position:"relative"});
            $(".welcomgroup").remove();
        });
    }

    $("#togglebtn").click(function(){
        $("#mobilenavlist").toggle();
    });
});
