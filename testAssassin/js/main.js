import { apparition } from "./scroll.js";
import { panneaux } from "./panneaux.js";
import { slider } from "./slider.js";
import { ajoutInput } from "./ajoutInput.js";

$(document).ready(function () {
  $(document).scroll(function () {
    apparition();
  });

  slider();
  panneaux();
  ajoutInput();
});
