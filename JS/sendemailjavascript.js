
$(document).ready(function(){

$('.contact-form').submit(function(e){
          
   // alert("pouloulou");
//1) RECUPERATION DES DONNEES            
var nom = document.getElementById("nom");       
var emailclient = document.getElementById('email');                          
var trouvezmoi = document.getElementById('trouvezmoi');    
var message = document.getElementById('message'); 
    
    // alert(nom.value);
 /*   
   $.ajax({
    url: "https://formspree.io/morinebodjona@gmail.com",
    method: "POST",
    data: $(this).serialize(),
    dataType: "json"
    });
    e.preventDefault()
    $(this).get(0).reset()
    alertify.success('Votre message a été envoyé avec succes. Vérifiez votre boîte mail pour confirmation. Merci!')
*/
    
    });
});