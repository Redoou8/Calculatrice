



function afficher(val){ 

   document.querySelector(".ecran").value += val; }


   function removescreen(){
    document.querySelector(".ecran").value=""
}

function calcul(){ // touche '='

    var a = document.querySelector(".ecran").value; 
   
    var b = eval(a);

    
    document.querySelector(".ecran").value = b;
}

function sqr(){

    document.querySelector(".ecran").value = Math.sqrt(document.querySelector(".ecran").value)
}