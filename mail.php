<?php

require_once('phpmailer/PHPMailerAutoload.php');
$mail = new PHPMailer;
$mail->CharSet = 'utf-8';

$mail2 = new PHPMailer;
$mail2->CharSet = 'utf-8';

$name = $_POST['name'];
$phone = $_POST['phone'];
$email = $_POST['email'];

//$mail->SMTPDebug = 3;                               // Enable verbose debug output

$mail->isSMTP();                                      // Set mailer to use SMTP
$mail->Host = 'smtp.mail.ru';  																							// Specify main and backup SMTP servers
$mail->SMTPAuth = true;                               // Enable SMTP authentication
$mail->Username = 'osoobshcheniy@mail.ru'; // Ваш логин от почты с которой будут отправляться письма
$mail->Password = 'ORAR1tpt2%ho'; // Ваш пароль от почты с которой будут отправляться письма
$mail->SMTPSecure = 'ssl';                            // Enable TLS encryption, `ssl` also accepted
$mail->Port = 465; // TCP port to connect to / этот порт может отличаться у других провайдеров

$mail2->isSMTP();                                      // Set mailer to use SMTP
$mail2->Host = 'smtp.mail.ru';  																							// Specify main and backup SMTP servers
$mail2->SMTPAuth = true;                               // Enable SMTP authentication
$mail2->Username = 'osoobshcheniy@mail.ru'; // Ваш логин от почты с которой будут отправляться письма
$mail2->Password = 'ORAR1tpt2%ho'; // Ваш пароль от почты с которой будут отправляться письма
$mail2->SMTPSecure = 'ssl';                            // Enable TLS encryption, `ssl` also accepted
$mail2->Port = 465; // TCP port to connect to / этот порт может отличаться у других провайдеров

$mail2->setFrom('osoobshcheniy@mail.ru');
$mail2->addAddress($email);

$mail->setFrom('osoobshcheniy@mail.ru'); // от кого будет уходить письмо?
$mail->addAddress('hikom28259@mailop7.com');
//$mail->addAddress('ellen@example.com');               // Name is optional
//$mail->addReplyTo('info@example.com', 'Information');
//$mail->addCC('cc@example.com');
//$mail->addBCC('bcc@example.com');
//$mail->addAttachment('/var/tmp/file.tar.gz');         // Add attachments
//$mail->addAttachment('/tmp/image.jpg', 'new.jpg');    // Optional name
$mail->isHTML(true);
                                 // Set email format to HTML
$mail->Subject = 'Заявка ';
$mail->Body    = '' .$name . ' оставил заявку, его телефон ' .$phone. '<br>Почта этого пользователя: ' .$email;
$mail->AltBody = '';

$mail2->isHTML(true);
                                 // Set email format to HTML
$mail2->Subject = 'Заявка';
$mail2->Body    = ''.$name.' ,в ближайшее время с ваши свяжутся';
$mail2->AltBody = '';

if(!$mail->send()) {
    echo 'Error';
} else {
    echo 'Sucsess';
}
if(!$mail2->send()) {
    echo 'Error';
} else {
    echo ' Sucsess';
}
?>
