$(document).ready(function() { //при запуску сторінки відправляємо ніформацію на сервер
  $.post("php/loadimgs.php" , function(data){
    var img = JSON.parse(data);
    for (var i = 1; i < img.length; i++) { // добавляємо всі картинки на сторінку
      $("div#content.row").append("<div class='col-xs-6 col-md-4'><a href='#' class='thumbnail'><img src='works/"+img[i]+"' alt='...'></a></div>")
    }

  });
})
