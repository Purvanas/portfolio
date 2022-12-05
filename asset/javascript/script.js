var slide = new Array("symfony/accueilSymfony.png", "symfony/connectionSymfony.png", "symfony/contactSymfony.png", "symfony/creationCompte.png");
var numero = 0;

function ChangeSlide(sens) {
    numero = numero + sens;
    if (numero < 0)
        numero = slide.length - 1;
    if (numero > slide.length - 1)
        numero = 0;
    document.getElementById("slide").src = slide[numero];
}