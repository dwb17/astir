<?php
  $response = array();

  require 'PHPMailer/PHPMailerAutoload.php';
  $mail = new PHPMailer;

  //$mail->SMTPDebug = 3;                               // Enable verbose debug output

  $mail->isSMTP();                                      // Set mailer to use SMTP
  $mail->Host = 'interceptor.websitewelcome.com';  // Specify main and backup SMTP servers
  $mail->SMTPAuth = true;                               // Enable SMTP authentication
  $mail->Username = 'david@pointblank.gr';                 // SMTP username
  $mail->Password = 'paok@r@';
  $mail->SMTPSecure = 'ssl';                            // Enable TLS encryption, `ssl` also accepted
  $mail->Port = 465;                          // SMTP password

  $mail->setFrom('david@pointblank.gr');
  $mail->addAddress('david7bash@gmail.com');     // Add a recipient

  $mail->isHTML(true);                                  // Set email format to HTML

  $mail->Subject = 'Here is the subject';
  $mail->Body    = 'This is the HTML message body <b>in bold!</b>';
  $mail->AltBody = 'This is the body in plain text for non-HTML mail clients';

  if(!$mail->send()) {
      $response['status'] = "NOK";
      $response['message'] = "Unable to send email. Please try again shortly.";
  } else {
    $response['status'] = "OK";
    $response['message'] = "Thank you for your submission.";
  }
  echo json_encode($response);
?>
