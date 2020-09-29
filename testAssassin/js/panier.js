export function panier() {
  $(".boutonAjoutPanier").click(function () {
    var nom = tableauProduits[0],
      prixUnitaire = produits[0],
      quantite = 2,
      sousTotal = prixUnitaire * quantite;
    $(".tableauPanier")
      .find("#tableBody")
      .html(function () {
        "<tr><td>" + nom + "</td><td>" + prixUnitaire + "</td><td>" + quantite + "</td><td>" + sousTotal + "</td></tr>";
      });
  });
}
