var r = 0;
var scroll = 0;
var timer
var y;
var a;
var m = 4;
$(document).ready(function(){
    $(".under-scroll a").addClass("mine")
    $(".under-scroll .scroll figcaption").text("");
    $(".scrollnext").mouseenter(function(e){
            timer = setInterval("scrollr()",10)
    })
    $(".scrollnext").mouseleave(function(){
            clearInterval(timer);
    })
    //назад
        $(".scrollback").mouseenter(function(e){
            timer = setInterval("scrolll()",10)
    })
        $(".scrollback").mouseleave(function(){
            clearInterval(timer);
    })
})
function scrollr(){
    r +=m;
    $(".under-scroll").scrollLeft(r);

if($(".scroll a:last").offset().left - 200 <= $(".under-scroll").scrollLeft()){

var clone = $('.scroll a').clone().removeClass("mine").addClass("clon");
$(".scroll").append(clone)
    }
}
function scrolll(){
    r -=m;
    $(".under-scroll").scrollLeft(r);
}