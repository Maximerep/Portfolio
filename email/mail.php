<?php
// Inclure le fichier d'autoloader de PHPMailer
require 'email.PHPMailer.php';

// Créer une nouvelle instance de PHPMailer
$mail = new PHPMailer\PHPMailer\PHPMailer();

// Configurer les paramètres d'envoi d'e-mails
$mail->isSMTP();
$mail->Host = 'REPINCAY Maxime'; // Remplacez par le nom d'hôte du serveur SMTP
$mail->SMTPAuth = true;
$mail->Username = 'max.repincay@gmail.com'; // Remplacez par votre adresse e-mail
$mail->Password = 'Portfolio'; // Remplacez par votre mot de passe
$mail->SMTPSecure = 'ssl';
$mail->Port = 465;

// Récupérer les données du formulaire
$nom = $_POST['nom'];
$email = $_POST['email'];
$message = $_POST['message'];

// Configurer les détails du message
$mail->setFrom($email, $nom); // Utiliser l'e-mail et le nom de l'expéditeur fournis dans le formulaire
$mail->addAddress('destinataire@example.com', 'Nom du Destinataire'); // Remplacez par l'adresse e-mail du destinataire et son nom
$mail->Subject = 'Nouveau message de contact'; // Remplacez par le sujet de l'e-mail
$mail->Body = $message; // Utiliser le contenu du message fourni dans le formulaire

// Envoyer l'e-mail
if ($mail->send()) {
    // L'e-mail a été envoyé avec succès
    echo 'E-mail envoyé avec succès !';
} else {
    // Une erreur s'est produite lors de l'envoi de l'e-mail
    echo 'Erreur lors de l\'envoi de l\'e-mail : ' . $mail->ErrorInfo;
}
?>
