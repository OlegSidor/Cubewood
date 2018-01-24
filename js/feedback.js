var i = 0;
$(document).ready (function(){
    $("#form").hide(0);
    $("#addfeedbackbutton").click(function(){
    if(i == 0){
        $("#form").show(1000);
        $("#addfeedbackbutton").text("Приховати");
        i = 1;
    } else {
        $("#form").hide(1000);
        $("#addfeedbackbutton").text("Показати");
        i = 0;
    }
    })
});