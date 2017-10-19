<?php
if(isset($_POST)){ // провіряємо чи є хотяби якісь данні
  $img = scandir("../works");
    echo json_encode(array_slice($img,1)); // відправляємо масив з усіма файлами у папці
  }
 ?>
