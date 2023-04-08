"use strict";

const accordion = document.querySelector(".accordion");
accordion.addEventListener("click", (e) => {
  const activePanel = e.target.closest(".accordion-panel");
  if (!activePanel) return;
  toggleAccordion(activePanel);
});
function toggleAccordion(panelToActive) {
  const buttons = panelToActive.parentElement.querySelectorAll("button");
  const contents = panelToActive.parentElement.querySelectorAll(".accordion-content");
  buttons.forEach((button) => {
    button.setAttribute("aria-expanded", false);
  });
  contents.forEach((content) => {
    content.setAttribute("aria-hidden", true);
  });
  panelToActive.querySelector("button").setAttribute("aria-expanded", true);
  panelToActive.querySelector(".accordion-content").setAttribute("aria-hidden", false);
}
