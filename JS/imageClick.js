//$(document).ready(function(){

  
    // Get the modal
var modal = document.getElementById('myModal');

// Get the image and insert it inside the modal - use its "alt" text as a caption

var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");

function growImage(theid)
{
     // alert("alooo "+  modalImg.src);
    
   modal.style.display = "block";
   modalImg.src = document.getElementById(theid).src;
    //captionText.innerHTML = document.getElementById(theid).alt;
    
        
}
  
// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
    modal.style.display = "none";
}

//});