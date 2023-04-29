<?php

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'phpmailer/src/Exception.php';
require 'phpmailer/src/PHPMailer.php';
require 'phpmailer/src/SMTP.php';

$mail = new PHPMailer(true);
$mail->isSMTP();
$mail->Host = "smtp.gmail.com";
$mail->SMTPAuth = true;
$mail->Username = "md.repon56655@gmail.com";
$mail->Password = "cseudmiqxjqcxfsi";
$mail->SMTPSecure = "ssl";
$mail->Port = 465;
$mail->setFrom("md.repon56655@gmail.com");
$mail->addAddress($_POST['email']);
$mail->isHTML(true);
$mail->Subject = $_POST['subject'];
$mail->Body = $_POST['message'];
$mail->send();

echo 
"
<script>
alert('Email sent successfully');
document.location.href = 'index.html';
</script>
";
// Get the form data


// Set the recipient email address
$to = 'md.repon56655@gmail.com';

// Set the email subject and message
$subject = 'New registration';
$message = "Name: $name\nEmail: $email";

// Set the email headers
$headers = "From: webmaster@example.com\r\n";
$headers .= "Reply-To: webmaster@example.com\r\n";
$headers .= "CC: john@example.com\r\n";
$headers .= "X-Mailer: PHP/" . phpversion();

// Send the email
if (mail($to, $subject, $message, $headers)) {
  echo "Email sent successfully!";
} else {
  echo "Email failed to send!";
}
?>
