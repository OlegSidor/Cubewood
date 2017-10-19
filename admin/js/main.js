////////////////////////////////
$(document).ready(function() {
  $.post("/admin/php/login.php" , {type:"autologin"} , function(data) {
    if(data != ""){
    $("html body").append(data)
    $(".loginform").css("display","none");
  }
  });
});

////////////////////////////////
function login() {
var login = $("#login").val();
var pass = $("#pass").val();
var stay = $("#stay").prop("checked") ? "true":"false";
$.post("/admin/php/login.php" , {type:"login",pass:pass,login:login,stay:stay},function(data) {
  if(data != "error"){
    $("html body").append(data)
    $(".loginform").css("display","none");
  } else {alert("Не правильний логін або пароль")};
});
}

////////////////////////////////
function exit() {
$.post("/admin/php/login.php" , {type:"exit"} , function() {
  window.location = "/";
})
}
////////////////////////////////
function loadF() {
var file = $("#file").prop("files")[0];
var formD = new FormData;
formD.append("img",file);
$.ajax({
    url: '/admin/php/loadfile.php',
    data: formD,
    processData: false,
    contentType: false,
    type: 'POST',
    success: function (data) {
        if (data == "_success_") {
          alert("Файл успішно завантажено");
          $("input#file")[0]["value"] = "";
          if(!$("div.delete_list").is(":empty") == true){
            simg();simg();
          }
        } else {
          alert("Помилка");
        }
    }
});
}
////////////////////////////////
var action = 0;
function simg() {
  switch (action) {
    case 0:
    $.post("/admin/php/deleteimg.php", {list:""},function (data) {
      var img = JSON.parse(data);
      for (var i = 1; i < img.length; i++) {
        $("div.delete_list").append("<img onclick='dellimg(this)' src='/works/"+img[i]+"' alt='...'>");
      }
    })
    $("button#deletebtn").text("Заховати");
    action = 1;
      break;
      case 1:
      $("div.delete_list").empty();
      $("button#deletebtn").text("Показати");
      action = 0;
      break;
    default: action = 0;

  }
}
////////////////////////////////
function dellimg(img) {
  var confirmation = confirm("Видалити файл " + img.src)
  if(confirmation){
    var src_raw = img.src;
    var src = src_raw.substr(src_raw.indexOf("works"),src_raw.length);
    $.post("/admin/php/deleteimg.php", {delete:src},function (data) {
      if(data == "_success_"){
        alert("Файл успішно видалений");
        simg();simg();
      }else {
        alert(data);
      }
    })
  }
}
