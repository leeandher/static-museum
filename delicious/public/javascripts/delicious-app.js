import "../sass/style.scss";

import typeAhead from "./modules/typeAhead";
import ajaxHeart from "./modules/heart";

autocomplete(
  document.querySelector("#address"),
  document.querySelector("#lat"),
  document.querySelector("#lng")
);

typeAhead(document.querySelector(".search"));

document.querySelectorAll("form.heart").forEach((form) => {
  form.addEventListener("submit", ajaxHeart);
});
