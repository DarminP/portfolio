<?php

//Config
$sendto = 'd.poturovic@gmail.com';
$subject = 'From My Website';

if (!empty($_POST)) {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];
    $url = $_POST['url'];

    // Check honeypot, if spambot filling

    //Check for empty values

    /*if ( empty( $name ) || empty( $email ) || empty( $message )) {
        echo json_decode(array('status' =>0, 'message' => 'A required field is missing'));
        die();
    }*/

    //Check for  valid email

    /*$from = filter_var($email, FILTER_VALIDATE_EMAIL);

    if( !$email ) {
        echo json_encode(array('status' =>0, 'message' => 'Not a valid email'));
        die();
    }*/

    //Send email

    $headers = sprintf('From: %s', $from) . "\r\n";
    $headers .= sprintf('Reply-To: %s', $from) . "\r\n";
    $headers .= sprintf('X-Mailer: PHP/%s', phpversion());

    /*if ( mail($sendto, $subject, $message, $headers)) {
        echo json_encode(array('status'=>1, 'message'=>'Email sent sucesfully'));
        die();
    }
    echo json_encode(array('status'=>0, 'message'=> 'Email NOT sent sucesfully, please try again!'));
}*/
