<?php
$name = $_POST['name '];
$visitor_email = $_POST['email'];
$massage = $_POST['message'];

$email_from = 'Tom@gmail.com';
 $email_subject = "new form submission";
 $email_body = "User Name:$name.\n".
                 "User Email: $visitor_email.\n"  
                 "User Message: $message.\n";

$to = "juliusabigail75@gmail.com";

$headers = "From: $email_from \r\n";

$headers .= "Reply-to: $visitor_email \r\n";

mail($to,$email_subject,$email_body,$headers);

header("location: index.html");

?>