export function slider() {
  $(".flecheDroite").click(function () {
    var active = $(this).closest("div").find(".visible");
    var imageNext = active.next();
    console.log(imageNext);

    if (imageNext.length == 0) {
      active.removeClass("visible");
      active.parent().children().first().addClass("visible");
    } else {
      active.removeClass("visible");
      imageNext.addClass("visible");
    }
  });

  $(".flecheGauche").click(function () {
    var active = $(this).closest("div").children().find(".visible");
    var imagePrev = active.prev();

    if (imagePrev.length == 0) {
      active.removeClass("visible");
      active.parent().children().last().addClass("visible");
    } else {
      active.removeClass("visible");
      imagePrev.addClass("visible");
    }
  });
}
