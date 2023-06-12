<?php
// Vérifier si le formulaire a été soumis
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Récupérer les données du formulaire
    $nom = $_POST['nom'];
    $email = $_POST['email'];
    $message = $_POST['message'];

    // Ici, vous pouvez effectuer les opérations de traitement nécessaires
    // Par exemple, envoyer un e-mail ou enregistrer les données dans une base de données

    // Exemple d'envoi d'e-mail de notification
    $destinataire = 'votre-email@example.com';
    $sujet = 'Nouveau message de contact';
    $contenu = "Nom: $nom\n";
    $contenu .= "Email: $email\n";
    $contenu .= "Message: $message\n";

    // Envoyer l'e-mail
    mail($destinataire, $sujet, $contenu);

    // Rediriger l'utilisateur vers une page de confirmation
    header('Location: confirmation.html');
    exit;
}
?>