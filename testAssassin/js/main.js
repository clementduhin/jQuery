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
    if ($(document).scrollTop() >= (i + 1) * $(".articles").height()) {
      $(".articles" + [i])
        .children()
        .addClass("apparition");
    }
  }
}
