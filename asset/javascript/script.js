var slide = new Array("symfony/accueilSymfony.png", "symfony/connectionSymfony.png", "symfony/contactSymfony.png", "symfony/creationCompte.png");
var numero = 0;
var cpt=0;



function ChangeSlide(sens) {
    numero = numero + sens;
    if (numero < 0)
        numero = slide.length - 1;
    if (numero > slide.length - 1)
        numero = 0;
    document.getElementById("slide").src = slide[numero];
}

function sleep(ms) {
    return new Promise(
      resolve => setTimeout(resolve, ms)
    );
  }


async function showNav(){
    document.getElementById("boutonDeNav").classList.toggle('loaded'); 
    if(cpt%2 == 0){
        await sleep(500)
        document.getElementById("nav-link-button-div").style.display = "contents";
        cpt++;
    }
    else{
        document.getElementById("nav-link-button-div").style.display = "none";
        cpt++;
    }
}



window.onresize = function(){
    if(window.screen.width >= 991){
    document.getElementById("boutonDeNav").style.height = "0";
    document.getElementById("nav-link-button-div").style.display = "none";
    cpt=0;
  }
}