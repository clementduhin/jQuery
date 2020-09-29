import { apparition } from "./scroll.js";
import { panneaux } from "./panneaux.js";
import { slider } from "./slider.js";
import { ajoutInput } from "./ajoutInput.js";

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
  $(".panier").css("left", "1%");
});

$(".fermer").click(function () {
  $(".panier").css("left", "-300%");
});

var tableauProduits = [
  ["Figurine Ezio", "25 €"],
  ["Tee-shirt Odissey", "20 €"],
  ["Roman unity", "8 €"],
  ["Assassin's creed valhalla gold edition", "99 €"],
  ["Polo assassin", "15 €"],
  ["Pop Ezio", "10 €"],
  ["Porte clé assassin", "13 €"],
];

function panier() {
  $(".boutonAjoutPanier").click(function () {
    var nom = $(this),
      prixUnitaire = 3,
      quantite = 2,
      sousTotal = prixUnitaire * quantite;
    document.getElementById("tableBody").innerHTML +=
      "<tr><td>" + nom + "</td><td>" + prixUnitaire + "</td><td>" + quantite + "</td><td>" + sousTotal + "</td></tr>";
  });
}
