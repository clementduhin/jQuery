$(".panneau").click(function () {
  $(this).toggleClass("panneau-ouvert");
});

$(".panneau").hover(function () {
  $(this).toggleClass("panneau-survol");
});

$(document).scroll(function () {
  Scroll1();
  Scroll2();
});

function Scroll1() {
  if ($(document).scrollTop() >= $(".articles1").height()) {
    $(".article1").addClass("apparition");
    $(".article2").addClass("apparition");
  }
}

function Scroll2() {
  if ($(document).scrollTop() >= $(".articles2").height() + $(".articles1").height()) {
    $(".article3").addClass("apparition");
    $(".article4").addClass("apparition");
  }
}
