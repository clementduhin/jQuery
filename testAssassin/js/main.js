$(".panneau").click(function () {
  $(this).toggleClass("panneau-ouvert");
});

$(".panneau").hover(function () {
  $(this).toggleClass("panneau-survol");
});

$(document).scroll(function () {
  Scroll();
});

function Scroll() {
  for (let i = 0; i < $(".containerArticles").children().length; i++) {
    if ($(document).scrollTop() >= $(".articles" + [i]).offset().top - $(window).height() / 1.5) {
      $(".articles" + [i])
        .children()
        .addClass("apparition");
    }
  }
}
