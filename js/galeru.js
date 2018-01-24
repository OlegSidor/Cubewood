var timer = setInterval("nextimg()",3000)
var img;
var prev;
var next;
var slide;
var slidern;
var slider;
$(document).ready(function(){
    $(".galeru img:first").addClass("top");
    for(i=0;i<$(".galeru img").length;i++){
        $(".list ul").append("<a></a>")
    }
     $(".list ul a:eq(0)").addClass("slide");
    $(".list ul a").click(function(e){
        if($(".galeru img.top").is(":animated")) return;
        if ($(this).attr("class")=="slide"){
            return
        }
        img = $(".galeru img.top");
        slide = $(this).index();
        slider = $(".list ul a.slide");
        slidern = slider.next();
        $(".list ul a").removeClass("slide")
        $(this).addClass("slide");
        $(".galeru img:eq("+slide+")").addClass("pretop");
        var img2 = $(".galeru img:eq("+slide+")");
        img.animate({"opacity":0},500,function(){
            img2.removeClass("pretop")
            img2.addClass("top")
            img.css("opacity",1 );
            img.removeClass("top")

        });
    });
    $(".img_cube15").mouseenter(function(){
    clearInterval(timer)
    $(".img_cube15 .next button").animate({opacity: "0.8"},500)
        $(".img_cube15 .next").animate({right: "0em"},600)
        $(".img_cube15 .back button").animate({opacity: "0.8"},500)
        $(".img_cube15 .back").animate({marginLeft: "0em"},600)
        $(".list").animate({opacity: "1"},600)

 });

    $(".img_cube15").mouseleave(function(){
   timer = setInterval("nextimg()",5000)
       $(".img_cube15 .next button").animate({opacity: "0"},500)
        $(".img_cube15 .next").animate({right: "-3em"},600)
            $(".img_cube15 .back button").animate({opacity: "0"},500)
            $(".img_cube15 .back").animate({marginLeft: "-3em"},600)
            $(".list").animate({opacity: "0"},600)

 });
});
function nextimg(){
    if($(".galeru img.top").is(":animated")) return;
    slider = $(".list ul a.slide");
    slidern = slider.next();
    $(".list ul a").removeClass("slide")
    slidern.addClass("slide");
     img = $(".galeru img.top");
     next = img.next();
          if(!slidern.length){
         $(".list ul a:eq("+slidern.length+")").addClass("slide")}
    if(!next.length){
        next = $(".galeru img:first");
        next.addClass("top");
        img.animate({"opacity":0},500,function(){
            img.removeClass("top");
            img.css("opacity",1 );
        });
    }else{
    next.css({"opacity":0.0 }).addClass("top").animate({"opacity":1},500,function(){
        img.removeClass("top");
    });

}
}
function previmg(){
    if($(".galeru img.top").is(":animated")) return;
    slider = $(".list ul a.slide");
    slidern = slider.prev();
    $(".list ul a").removeClass("slide")
    slidern.addClass("slide");
    img = $(".galeru img.top");
     prev = img.prev();
     var imgcount= $(".galeru img").length;
            imgcount -=1;
     if(!slidern.length){
         $(".list ul a:eq("+imgcount+")").addClass("slide")}
    if($(".galeru img:first").attr("class") == "top"){
            img.animate({"opacity":0},500,function(){
            img.removeClass("top")
             $(".galeru img:eq("+imgcount+")").addClass("top");
             img.css("opacity",1 );
                });
    } else{
        prev.addClass("top");
        img.animate({"opacity":0},500,function(){
            img.removeClass("top")
            img.css("opacity",1 );
        })
    }

}