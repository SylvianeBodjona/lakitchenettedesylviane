$(document).ready(function(){
/*POUR GERER MA NAV FIXE*/
    /* direction == pour savoir si on scroll down ou up*/
    $('.js--section-features').waypoint(function(direction){
        /*si on scroll down, ajoute/montre ma nav fixe */
    if(direction == "down"){
     $('nav').addClass('sticky');
    }
    else{  /*si on scroll up, enleve/cache ma nav fixe */
 $('nav').removeClass('sticky');
    }    
},                                        {offset: '60px;' /*pour dire que ce qui precede doit se produire 60px avant la section .js--section-features */
                                        });
    
    /* REDIRECTION VERS LES DIFFERENTES SECTIONS EN UN CLIC*/
    /*BOUTON JAI FAIM*/
$('.js--scroll-to-galerie').click(function(){
$('html, body').animate({scrollTop:$('.js--section-galerie').offset().top},1000); /*quand je clic sur le bouton ca prendra 1 seconde (1000ms) pour arriver a ladite section, avec un effet de glissement*/
});
    /*BOUTON VOIR PLUS*/
    $('.js--scroll-to-apropos').click(function(){
$('html, body').animate({scrollTop:$('.js--section-features').offset().top},1000); /*quand je clic sur le bouton ca prendra 1 seconde (1000ms) pour arriver a ladite section, avec un effet de glissement*/
});
    
    /*Pris sur internet pour faire le meme effet de scrolling leger avce les liens du nav menu
  LIEN:  https://css-tricks.com/snippets/jquery/smooth-scrolling/ */
    
    // Select all links with hashes
     $(function(){
         $('a[href*="#"]')
          // Remove links that don't actually link to anything
          .not('[href="#"]')
          .not('[href="#0"]')
          .click(function(event) {
            // On-page links
            if (
              location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
              && 
              location.hostname == this.hostname
            ) {
              // Figure out element to scroll to
              var target = $(this.hash);
              target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
              // Does a scroll target exist?
              if (target.length) {
                // Only prevent default if animation is actually gonna happen
                event.preventDefault();
                $('html, body').animate({
                  scrollTop: target.offset().top
                }, 1000, function() {
                  // Callback after animation
                  // Must change focus!
                  var $target = $(target);
                  $target.focus();
                  if ($target.is(":focus")) { // Checking if the target was focused
                    return false;
                  } else {
                    $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
                    $target.focus(); // Set focus again
                  };
                });
              }
            }
          });
    
    
  })  
     
     /*LIen vers lib animate css https://daneden.github.io/animate.css/  
     */
     /*ANIMATION SUR CERTAINES SECTION*/
     /*POUR LA SECTION DES INFOS*/
     $('.js--row-info').waypoint(function(direction){
     $('.js--row-info').addClass('animated fadeIn'); /*jutilise ici la classe animated de CSS avec la propriete fade in; jutilise aussi le waypoint pour avoir la direction et ainsi savoir a quel moment faire lanimation, cest a dire au moment ou mon scroll arrive a cette section de la page pour la premiere fois; donc il y aura un effet de fade in mais au prealable jai rendu cette section invisible dans mon css (cest logique, afin de voir mon effet revelation/fadein) */
     
     },
    {
    offset:'60%'
    });
     
     /*POUR LA SECTION DE LIMAGE DES COMPETENCES*/
          $('.js--row-imgcomp').waypoint(function(direction){
     $('.js--row-imgcomp').addClass('animated fadeInUp'); 
     
     },
    {
    offset:'60%'
    });
          
        /*la navigation sur telephone*/  
          $('.js--nav-icon').click(function(){
          var nav=$('.js--main-nav');
          var icon=$('.js--nav-icon ion-icon');
              
              nav.slideToggle(200); /*ceci fait leffet opeclose du menu sur telephone*/
              
             /*si mon icon est menu change le a close sinon fais le contraire*/ if(icon.attr('name')=='menu'){
              icon.attr('name','close');
                /*  alert("alooo");*/
              }else{
              icon.attr('name','menu');
                 /* alert("iilliiii");*/
              }
              
          });

});
