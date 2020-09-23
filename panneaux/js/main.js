$(".panneau").click(function () {
  $(this).toggleClass("ouvert");
  $(this).$("p").toggleClass("visible");
});
