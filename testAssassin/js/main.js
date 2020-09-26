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
    if ($(document).scrollTop() > $(".articles" + [i]).offset().top - $(window).height() / 1.5) {
      $(".articles" + [i])
        .children()
        .addClass("apparition");
    }
  }
}

$(".right").click(function () {
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

$(".left").click(function () {
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

for (var i = 0; i < $(".numberAchat").length; i++) {
  $(".numberAchat")[i].value = 1;
}

$(".boutonPlus").click(function () {
  $(this).closest("div").find("input")[0].value++;
  $(this).closest("div").find(".boutonMoins").css("background-color", "black");
});

$(".boutonMoins").click(function () {
  if ($(this).closest("div").find("input")[0].value <= 1) {
    $(this).css("background-color", "grey");
    $(this).closest("div").find("input")[0].value = 0;
  } else {
    $(this).closest("div").find("input")[0].value--;
  }
});
