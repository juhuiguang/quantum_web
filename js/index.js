/**
 * Created by juhuiguang on 2017/2/1.
 */
$(function(){
    var width=$(window).width();
    var height=$(window).height();
    if(width>=1024){
        $("#mixvideo").width(width*0.8);
        $("#mixvideo").height(width*0.8*1080/1920);
    }else{
        $("#mixvideo").width(width);
        $("#mixvideo").height(width*1080/1920);

    }


    $("#mixvideo").click(function(){
        var video=document.getElementById("mixvideo");
        video.play();
    });
});
