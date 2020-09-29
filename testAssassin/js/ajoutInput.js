export function ajoutInput() {
  for (var i = 0; i < $(".nombreAchat").length; i++) {
    var valInput = $(".nombreAchat").val();
    valInput = 1;
    $(".nombreAchat").val(valInput);
  }

  $(".boutonPlus").click(function () {
    var valInput = $(this).parent().find(".nombreAchat").val();
    var valInputInt = parseInt(valInput);
    valInputInt++;
    $(this).parent().find(".nombreAchat").val(valInputInt);
  });

  $(".boutonMoins").click(function () {
    var valInput = $(this).parent().find(".nombreAchat").val();
    var valInputInt = parseInt(valInput);
    if (valInputInt > 1) {
      valInputInt--;
      $(this).parent().find(".nombreAchat").val(valInputInt);
    }
  });
}
