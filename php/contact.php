<?php

require "../lib/PHPMailerAutoload.php";
include("../lib/class.phpmailer.php");
include("../lib/class.smtp.php");

function send_mail($mail_register, $cuerpo) {
    $mail = new PHPMailer();

    $mail->IsSMTP();
    $mail->SMTPAuth = true;
    $mail->SMTPSecure = "ssl";
    $mail->Host = "smtp.gmail.com";
    $mail->Port = 465;
    $mail->Username = "webpaintitblack@gmail.com";
    $mail->Password = "paintitblack123456";


    $mail->From = "webpaintitblack@gmail.com";
    $mail->FromName = "PaintItBlack";

    $mail->addAddress($mail_register);
    $mail->WordWrap = 50;
    $mail->isHTML(true);
    $mail->Subject = "Mensaje";
    $mail->Body = $cuerpo;
    $mail->AltBody = "This is the body in plain text for non-HTML mail clients";

    if (!$mail->send()) {
        echo "Message could not be sent.";
        echo "Mailer Error: " . $mail->ErrorInfo;
        return false;
    }
    return true;
}
$mail_register=$_POST['email'];
$cuerpo="Mensaje del usuario: <b>$_POST[name]</b> con email: $_POST[email].".$_POST['message'];
if(send_mail($mail_register,$cuerpo)){
    header('Refresh: 3; contact.html');
    echo 'Se ha enviado el mensaje correctamente';
}

?>