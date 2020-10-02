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
});

$(".voirPanier").click(function () {
  $(".panier").toggleClass("panierOuvert");
});

$(".fermer").click(function () {
  $(".panier").removeClass("panierOuvert");
});

var tableauProduits = [
  ["Figurine Ezio", 25],
  ["Tee-shirt Odissey", 20],
  ["Roman unity", 8],
  ["Assassin's creed valhalla gold edition", 99],
  ["Polo assassin", 15],
  ["Pop Ezio", 10],
  ["Porte clé assassin", 13],
];

var panier = [];

$(".boutonAjoutPanier").click(function () {
  var index = $(this).attr("id");
  var nom = tableauProduits[index][0];
  var prixUnitaire = tableauProduits[index][1];
  var quantite = $(this).parent().prev().find(".nombreAchat").val();
  var quantiteInt = parseInt(quantite);
  var sousTotal = quantiteInt * prixUnitaire;

  var produitAAjouter = [nom, prixUnitaire, quantiteInt, sousTotal];

  var premierAchat = true;

  for (var i = 0; i < panier.length; i++) {
    var panierEnCours = panier[i];
    if (panierEnCours.includes(nom) === true) {
      var ancienneQuantite = panierEnCours[2];
      var nouvelleQuantite = ancienneQuantite + quantiteInt;
      var nouveauSousTotal = nouvelleQuantite * prixUnitaire;
      premierAchat = false;
      produitAAjouter = [nom, prixUnitaire, nouvelleQuantite, nouveauSousTotal];
    }
    panierEnCours[2] = nouvelleQuantite;
    panierEnCours[3] = nouveauSousTotal;
    panier[i] = panierEnCours;
  }

  if (premierAchat == true) {
    panier.push(produitAAjouter);
  }

  document.getElementById("tableBody").innerHTML = "";
  remplirPanier(panier);
});

function remplirPanier(lePanier) {
  for (let i = 0; i < lePanier.length; i++) {
    var nom1 = lePanier[i][0];
    var prixUnitaire1 = lePanier[i][1];
    var quantite1 = lePanier[i][2];
    var sousTotal1 = lePanier[i][3];
    document.getElementById("tableBody").innerHTML +=
      "<tr><td>" + nom1 + "</td><td>" + prixUnitaire1 + "</td><td>" + quantite1 + "</td><td>" + sousTotal1 + "</td></tr>";
  }
}
