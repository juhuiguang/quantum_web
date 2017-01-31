$(function(){

    fullscreen();
    var mySwiper = new Swiper ('.swiper-container', {
        direction: 'vertical',
        loop: true,
        effect: 'fade',
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
            $(".fullscreen").width(width).height(height).css("background-size","auto 100%");
        }else{
            $(".fullscreen").width(width).height(height).css("background-size","100% auto");
        }
    }

    function gotomain(){
        $("#main").show().animate({left:0},800,null,function(){
            $("#main").css({position:"relative"});
            $(".welcomgroup").remove();
        });
    }
});
