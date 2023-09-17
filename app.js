

function afficher(val){     
   document.querySelector(".ecran").value += val; }


   function removescreen(){
    document.querySelector(".ecran").value=""
}

function calcul(){ 
     var a = document.querySelector(".ecran").value;  
    document.querySelector(".ecran").value = eval(a);
}


function sqr(){
    document.querySelector(".ecran").value = Math.sqrt(document.querySelector(".ecran").value)
}





//____________________________________________________not in "less js possinle challenge"____________________________________________

document.addEventListener("DOMContentLoaded", function() { //utilisation async meilleure ? 

const closeBtn = document.querySelector('.closebtn');
closeBtn.addEventListener("click", function() {
  var div = this.parentElement;
  div.style.opacity = "0";
  setTimeout(function() {
    div.style.display = "none";
  }, 600);
});
})