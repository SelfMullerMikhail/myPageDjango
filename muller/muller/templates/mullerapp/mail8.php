<?php
// $to = "preensikl@mail.ru";
$name = clear_data($_POST['name']);
$email = clear_data($_POST['email']);
$text = clear_data($_POST["text"]);
$question = $_POST['Question'];
$photo = $P_POST["addFile"];

$subject = "mihailmuller";
$headers = "X-Mailer :PHP/" . phpversion();


function clear_data($val)
{
        $val = trim($val);
        $val = stripslashes($val);
        $val = htmlspecialchars($val);
        return $val;
}
// $headers = 'From: webmaster@example.com' . "\r\n" . 
// 'Reply-To: webmaster@example.com' . "\r\n" .'X-Mailer: PHP/' . phpversion();

$messege = "Имя: " . $name . "<br>"  . "Email: " . $email .
        "<br>" . $headers . "<br>" . $question . "<br>" . "Сообщение: " . $text . "<br>" . $photo;

// echo $messege;
// echo $photo;

if (mail("preensikl@mail.ru", $subject, $messege, $headers)) {
        echo "<br>Success!";
} else {
        echo "<br >Error :C";
}
