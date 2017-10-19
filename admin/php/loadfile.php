<?php
session_start();
 if(isset($_FILES)){ // провіряємо наявність файла
  if ($_SESSION["logined"]) { //Провірка чи було здійснено вхід в систему
  $filename_raw = scandir("../../works");
  if(!move_uploaded_file($_FILES["img"]["tmp_name"],"../../works/".time().".png")){ // зберігаємо файл
    echo ("_error_");
  } else echo "_success_";
}
} ?>
