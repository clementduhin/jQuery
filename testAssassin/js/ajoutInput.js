export function ajoutInput() {
  for (var i = 0; i < $(".numberAchat").length; i++) {
    $(".numberAchat")[i].value = 1;
  }

  $(".boutonPlus").click(function () {
    $(this).closest("div").find("input")[0].value++;
  });

  $(".boutonMoins").click(function () {
    if ($(this).closest("div").find("input")[0].value <= 1) {
      $(this).css("background-color", "grey");
      $(this).closest("div").find("input")[0].value = 0;
    } else {
      $(this).closest("div").find("input")[0].value--;
    }
  });
}
