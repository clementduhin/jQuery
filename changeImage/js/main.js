// préparer des url pour 4 images de background alternative
// stocker les url de maniere efficace
// faire en sorte que l'image de background change toute les 2 sec

var image = [
  "url(../testAssassin/img/bg1.png)",
  "url(../testAssassin/img/bg2.png)",
  "url(../testAssassin/img/bg3.png)",
  "url(../testAssassin/img/bg4.png)",
];

let index = 2;

function changerLeBackground() {
  $(".header").css("background-image", image[index]);
  index++;
  if (index == image.length) {
    index = 0;
  }
}

setInterval(changerLeBackground, 2000);

$(".droite").click(function () {
  var imageEnCours = $(this).closest("div").find(".visible");
  var imageSuivante = imageEnCours.next();
  console.log(imageSuivante);

  if (imageSuivante.length) {
    imageEnCours.removeClass("visible");
    imageSuivante.addClass("visible");
  } else {
    imageEnCours.parent().children().first().addClass("visible");
    imageEnCours.removeClass("visible");
  }
});

$(".gauche").click(function () {
  var imageEnCours = $(this).closest("div").find(".visible");
  var imageSuivante = imageEnCours.prev();
  console.log(imageSuivante);

  if (imageSuivante.length) {
    imageEnCours.removeClass("visible");
    imageSuivante.addClass("visible");
  } else {
    imageEnCours.parent().children().last().addClass("visible");
    imageEnCours.removeClass("visible");
  }
});
