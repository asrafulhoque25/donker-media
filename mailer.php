<?php
// Change the Url with redirect page
header( "Refresh: 5 url=/donkerMedia/index.html" );

session_start();
// Put Eamil Address
$youremail = 'ashiqur687@gmail.com';
// Form Title
$fromsubject = 'Donker Media';
$fname = $_POST['fname'];
$mail = $_POST['mail'];
$subject = $_POST['subject'];
$message = $_POST['message'];
$to = $youremail;
$mailsubject = 'Masage recived from' . $fromsubject . ' Contact Page';
$body = $fromsubject . '
	
	The person that contacted you is  ' . $fname . '
	 E-mail: ' . $mail . '
	 Subject: ' . $subject . '
	
	 Message: 
	 ' . $message . '	
	|---------END MESSAGE----------|';
echo "Thank you fo your message ";
mail($to, $subject, $body);
?> 