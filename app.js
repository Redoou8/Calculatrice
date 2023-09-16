
document.addEventListener("DOMContentLoaded", function() {

const closeBtn = document.querySelector('.closebtn');
closeBtn.addEventListener("click", function() {
  var div = this.parentElement;
  div.style.opacity = "0";
  setTimeout(function() {
    div.style.display = "none";
  }, 600);
});
})

function afficher(val){ 

        
   document.querySelector(".ecran").value += val; }


   function removescreen(){
    document.querySelector(".ecran").value=""
}

function calcul(){ // touche '='

    var a = document.querySelector(".ecran").value;  
    document.querySelector(".ecran").value = eval(a);
}


function sqr(){

    document.querySelector(".ecran").value = Math.sqrt(document.querySelector(".ecran").value)
}

