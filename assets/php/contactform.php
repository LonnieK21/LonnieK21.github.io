<?php

  if(isset($_POST['submit'])){
    $name = $_POST['name'];
    $mailFrom = $_POST['email'];
    $message = $_POST['message'];

    $mailTo= "lonnie.kennon@yahoo.com";
    $subject ="New Form Submisssion"
    $headers = "From: ".$mailFrom;
    $txt = "You have recieved an email from ".$name.".\n\n".$message;

    mail($mailTo,$subject,$txt,$headers);
    header("Location: index.html?mailsend");
  }

?>
