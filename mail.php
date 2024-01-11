<?php
 use PHPMailer\PHPMailer\PHPMailer;
 use PHPMailer\PHPMailer\Exception;
 
 require 'phpmailer/src/Exception.php';
 require 'phpmailer/src/PHPMailer.php';
 require 'phpmailer/src/SMTP.php';
 
 if (isset($_POST["send"])) {
    
         $mail = new PHPMailer(true);
 
         // Server settings
         $mail->isSMTP();
         $mail->Host       = 'smtp.gmail.com';
         $mail->SMTPAuth   = true;
         $mail->Username   = 'rohan93981@gmail.com';
         $mail->Password   = 'humfeajnbwxbqidf';
         $mail->SMTPSecure = 'ssl';
         $mail->Port       = 465;
   // Sanitize user inputs

         // Recipients and content
         $mail->setFrom($_POST["email"], $_POST["fname"]);
         $mail->addAddress('rohangade496@gmail.com');
         $mail->addReplyTo($_POST["email"], $_POST["fname"]);
         $mail->isHTML(true);
         $mail->Subject = "visionvx";
 
       
 
         // Construct email body
         $mail->Body = "First Name : " . $_POST['fname'].
         "<br> <br> Last Name : " . $_POST['lname'].
         "<br> <br>Mobile Number : " . $_POST['mobile'].
         "<br> <br>Email Id :" . $_POST['email'];
        //  "<br> Message" . $_POST['']
               
 
         // Send the email
         $mail->send();
 
         echo
         " 
         <script> 
          alert('Message was sent successfully!');
          document.location.href = 'contact.html';
         </script>
         ";
 } 