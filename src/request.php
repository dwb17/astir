<?php
  $response = array();
  $values = $_POST;

  // exit if no submit value.
  if(!isset($values['op'])){
    $response['status'] = "NOK";
    $response['message'] = "OP Unable to process your request. Please try again shortly.";
    echo json_encode($response);
    return;
  }

  // exit if honeypot is provided.
  if (!empty($values['url'])) {
    $response['status'] = "NOK";
    $response['message'] = "Unable to process your request. Please try again shortly.";
    echo json_encode($response);
    return;
  }

  // build message.
  $current_date = date('F j, Y, g:i a');
  $message = 'Request form submission on: ' . $current_date . "\r\n";
  $message .= 'Name/Surname: ' . $values['name'] . "\r\n";
  $message .= 'Email address: ' . filter_var($values['e_mail'], FILTER_VALIDATE_EMAIL) . "\r\n";
  $message .= (!empty($values['company'])) ? 'Company: ' . $values['company'] . "\r\n" : '';
  $message .= (!empty($values['position'])) ? 'Position: ' . $values['position'] . "\r\n" : '';
  $message .= (!empty($values['address'])) ? 'Address: ' . $values['address'] . "\r\n" : '';
  $message .= (!empty($values['telephone'])) ? 'Phone number: ' . $values['telephone'] . "\r\n" : '';
  $message .= 'Message: ' . $values['message']. "\r\n";
  $message_sanitize = filter_var($message, FILTER_SANITIZE_STRING);

  require $_SERVER["DOCUMENT_ROOT"] . '/PHPMailer/PHPMailerAutoload.php';
  $mail = new PHPMailer;

  //$mail->SMTPDebug = 3;                               // Enable verbose debug output

  $mail->isSMTP();                                      // Set mailer to use SMTP
  $mail->Host = 'ns1.pointblank.gr';  // Specify main and backup SMTP servers
  $mail->SMTPAuth = true;                               // Enable SMTP authentication
  $mail->Username = 'contact@astircrowns.com';                 // SMTP username
  $mail->Password = 'De9H68TAQQ1fTHF1Ts';
  $mail->SMTPSecure = 'ssl';                            // Enable TLS encryption, `ssl` also accepted
  $mail->Port = 465;                          // SMTP password

  $mail->setFrom('contact@astircrowns.com');
  $mail->addAddress('astir@vitogiannis.gr');     // Add a recipient

  $mail->isHTML(false);                                  // Set email format to HTML

  $mail->Subject = 'Request form submission.';
  $mail->Body    = $message_sanitize;

  if(!$mail->send()) {
      $response['status'] = "NOK";
      $response['message'] = "Unable to send email. Please try again shortly.";
  } else {
    $response['status'] = "OK";
    $response['message'] = "Thank you for your submission.";
  }
  echo json_encode($response);
?>
