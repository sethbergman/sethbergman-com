<?php

if(isset($_POST['message'])){

	$name = $_POST['name'];
	$email = $_POST['email'];
	$message = $_POST['message'];
    
	
	$to      = 'hello@sethbergman.com';
	$subject = 'Connect with Seth';

	$headers = 'From: '. $email . "\r\n" .
    'Reply-To: '. $email . "\r\n" .
    'X-Mailer: PHP/' . phpversion();

	$status = mail($to, $subject, $message, $headers);

	if($status == TRUE){	
		$res['sendstatus'] = 'done';
	
		//Edit your message here
		$res['message'] = 'Success!';
    }
	else{
		$res['message'] = 'Failed to send mail. Please email me at hello@sethbergman.com';
	}
	
	
	echo json_encode($res);
}

?>