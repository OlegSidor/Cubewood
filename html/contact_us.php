
<?php
$name = $_POST['name'];
$phone = $_POST['phone'];
$email = $_POST['email'];
$text = $_POST['text'];
$submit = $_POST['submit'];
if (isset($submit)){
    mail('cubewood.nature@gmail.com',$name,"$text\n$phone\n$email");
}
?>
<!DOCTYPE html>
    <html>
    <head>
         <meta charset="utf-8">
        <link rel="stylesheet" type="text/css" href="../css/contact_us.css" />
        <link rel="stylesheet" type="text/css" href="../css/normilize.css">
        <title>Cubewood</title>
    </head>
        <body>
             <div class="body">
                <header>
                    <img class="logo" src="../images/logo.jpg" height="100px"/img>
                    <div class="sm">
                         <a href="https://www.instagram.com/cube_wood/" target="_blank"> <img id="instagram" src="../images/instagram.png" width="22px"/></a>
                        <a href="https://www.facebook.com/cubwood/" target="_blank"> <img id="facebook" src="../images/facebook.png" width="22px"/></a>
                         <a href="https://vk.com/cubewood"  target="_blank"> <img id="vk" src="../images/vk.png" width="22px"/></a>

                    </div>
                </header>

                <nav class="navigation">

                    <div class="navigation-buttons">

                          <a href="../index.html"> Головна </a>
                          <a href="https://www.etsy.com/shop/Cubewood?ref=hdr_shop_menu" target="_blank"> Etsy</a>
                          <a href="#"> Про нас </a>
                          <a href="payment_delivery.html"> Доставка і оплата </a>
                          <a href="contact_us.html"> Зв'язатися з нами</a>
                          <a href="feedback.html"> Відгуки</a>
                    </div>
                 </nav>
                 <main>
                     <div class="main-container">
                         <h3>Зв'язатися з нами</h3>
                         <br><br>
                         <p>Ви можете зв'язатися з нами написавши листа на електронну скриньку <strong>cubewood.nature@gmail.com</strong> або ж заповнивши форму внизу сторінки.</p>
                         <br><br>
                         <p><i>Наші телефони:</i></p> <br>
                             0038 097 6248321  <br>
                             0038 093 8160499 <br>
                             0038 098 8269441  <br> <br><br>
                        <p><i>Ми в соціальних мережах:</i> </p> <br>

                            <p><a id="social-media" href="https://www.facebook.com/cubwood/" target="_blank">facebook</a></p>
                            <p><a id="social-media" href="https://vk.com/cubewood" target="_blank">vkontakte</a></p>
                            <p><a id="social-media" href="https://www.instagram.com/cube_wood/" target="_blank">instagram</a></p>

                     </div>
                     <div class="connection">
                         <form action="" method="POST">
                            <input name="name" placeholder="Ваше ім'я" /><br>
                            <input name="phone" placeholder="Ваш номер телефону" /><br>
                            <input name="email" placeholder="E-mail" /><br>
                            <textarea name="text" cols="40" rows="5" placeholder="Текст повідомлення"></textarea>
							<button name="submit" type="submit">Надіслати</button>
                         </form>
                    </div>
                 </main>
                    <footer>
                <div class="footer">
                    <p>Контакти</p>
                     Львів<br>
                     0038 0976248321<br>
                     0038 0988269441
                     cubewood.nature@gmail.com
                </div>
                <div class="copyright">
                 <p> Copyright 2017. Cubewood </p>
                </div>

            </footer>
       </div>
    </body>

</html>
