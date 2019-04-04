<?php 
// 1) VERIFIER QUE LE BOUTON A BIEN ETE CLIQUE
if(isset($_POST["butsendmail"]))
{
    echo "ouii";
    //RECUPERER LES DONEES UNE A UNE
$nom=$_POST["nom"];
$email=$_POST["email"];
$trouvezmoi=$_POST["trouvezmoi"];
 $message=$_POST["message"];
    
//Preparation des valeurs a envoyer
    $objet="Bienvenue ".$nom."! - La Kitchenette de Sylviane";
    $destinataire=$email; $expediteur='morinebodjona@gmail.com';
    $messageAenvoyer="Bonjour ". $nom ."\r\n". " Je vous souhaite la bienvenue dans mon univers et vous remercie de l'interet que vous portez a mon travail. Votre message a bien été recu. Je vous répondrai sous peu. Au plaisir d'échanger avec vous! " ."\r\n". "Sylviane Bodjona " ."\r\n"." Copyright © 2019 by La Kitchenette de Sylviane";   
   $headers = 'From: morinebodjona@gmail.com' . "\r\n" .
    'Reply-To: morinebodjona@gmail.com' . "\r\n" ;
  $headers .="Content-type: text/html\r\n";  
    
    $messageAenvoyer2="Message envoye par ".$nom." ; Son email ".$email." ; Son message ".$message." ; Comment il m'a trouve ".$trouvezmoi;
    
    //ENVOIE DU MESSAGE PAR LEXECUTION DE LA FONCTION MAIL DE PHP
    // lien pour regler probleme du mon email -- https://www.guru99.com/php-mail.html 
    //ENVOI DU MESSAGE DE LUTILISATEUR A MOI
    $mail1=mail('morinebodjona@gmail.com', 'NOUVEAU MESSAGE RECU DEPUIS LA KITCHENETTE DE SYLVIANE', $messageAenvoyer2, $headers);
    //ENVOI DE MON MESSAGE GENERIQUE A LUTILISATEUR
    $mail=mail($destinataire, $objet, $messageAenvoyer, $headers);
    
    //POUR AFFICHER UN MESSAGE AFIN DE ME CONFIRMER LENVOI
    if ($mail)echo'Email envoye avec succes ! '.$messageAenvoyer;else echo 'echec de lenvoi';
  
}
else echo "formulaire non soumis";
    
?>