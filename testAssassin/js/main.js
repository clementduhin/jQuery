$(".panneau").click(function () {
  $(this).toggleClass("panneau-ouvert");
});

$(".panneau").hover(function () {
  $(this).toggleClass("panneau-survol");
});

$(document).scroll(function () {
  Scroll();
  // Scroll2();
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

function Scroll2() {
  if ($(document).scrollTop() >= $(".articles2").height() + $(".articles1").height()) {
    $(".article3").addClass("apparition");
    $(".article4").addClass("apparition");
  }
}

for (let i = 0; i < $(".containerArticles").children().length; i++) {
  if ($(document).scrollTop() >= $(".articles" + [i]).height()) {
    $(".article1").addClass("apparition");
    $(".article2").addClass("apparition");
  }
}
