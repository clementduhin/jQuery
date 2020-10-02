import { apparition } from "./scroll.js";
import { panneaux } from "./panneaux.js";
import { slider } from "./slider.js";
import { ajoutInput } from "./ajoutInput.js";
import { panier } from "./panier.js";

$(document).ready(function () {
  $(document).scroll(function () {
    apparition();
  });

  slider();
  panneaux();
  ajoutInput();
  panier();
});

$(".voirPanier").click(function () {
  $(".panier").toggleClass("panierOuvert");
});

$(".fermer").click(function () {
  $(".panier").removeClass("panierOuvert");
});
