export function apparition() {
  for (let i = 0; i < $(".containerArticles").children().length; i++) {
    if ($(document).scrollTop() > $(".articles" + [i]).offset().top - $(window).height() / 1.1) {
      $(".articles" + [i])
        .children()
        .addClass("apparition");
    }
  }
}
