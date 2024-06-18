<?php
$name = $_POST['name'];
$email = $_POST['email'];
$phone = $_POST['phone'];
$message = $_POST['comment'];
$subject = $_POST['subject'];
$month = $_POST['month'];
$redirect = "http://www.saiparivarfoundation.org/index.html";

$formcontent=" Hello Administrator, \n \n You got a new message from SaiParivarFoundation! \n \n
 From: $name \n Phone: $phone \n Month: $month \n Message: $message";
$recipient = "info@saiparivarfoundation.org";
$mailheader = "From: $email \r\n";



    mail($recipient, $subject, $formcontent, $mailheader) or die("Error!");
    echo "Thank You!" . " - Redirecting page in 2 seconds to " . "<a href='index.html' style='text-decoration:none;color:#ff0099;'> Home</a>";


?>
<script LANGUAGE="JavaScript">
  redirTime = "2000";
  redirURL = "<?php echo $redirect ?>";
  function redirTimer() {
  self.setTimeout("self.location.href = redirURL;",redirTime);}
  </script>
  <BODY onLoad="redirTimer()">