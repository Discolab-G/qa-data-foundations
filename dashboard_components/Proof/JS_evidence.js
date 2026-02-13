/* Création d'un menu "bulle" qui s'affichera lorsque l'utilisateur cliquera sur le bouton de code. 
Il contiendra des liens vers les sections de code pertinentes sur GitHub. 
Structure du fichier :
- séléction des éléments
- fonctions utilitaires
- gestion du clic bouton
- gestion clic exterieur
- gestion touche escape*/
// JS_evidence.js

// 1) Sélectionne tous les popovers (un par bloc "code")
const popovers = document.querySelectorAll(".code-popover");

// 2) Petite fonction utilitaire : ferme tous les menus
function closeAllMenus() {
  popovers.forEach((popover) => {
    const menu = popover.querySelector(".code-menu");
    const btn = popover.querySelector(".code-button");

    if (menu) menu.classList.add("hidden");
    if (btn) btn.setAttribute("aria-expanded", "false");
  });
}

// 3) Pour chaque popover : on gère le clic sur le bouton
popovers.forEach((popover) => {
  const btn = popover.querySelector(".code-button");
  const menu = popover.querySelector(".code-menu");

  // Sécurité : si la structure n'est pas complète, on ignore
  if (!btn || !menu) return;

  // Pour accessibilité : on initialise aria-expanded
  btn.setAttribute("aria-expanded", "false");

  btn.addEventListener("click", (event) => {
    // Empêche le clic de remonter jusqu'au document (sinon ça referme direct)
    event.stopPropagation();

    // Ferme tous les autres menus avant d'ouvrir celui-ci
    closeAllMenus();

    // Ouvre/ferme ce menu
    menu.classList.toggle("hidden");

    // Met à jour aria-expanded selon l'état du menu
    const isOpen = !menu.classList.contains("hidden");
    btn.setAttribute("aria-expanded", isOpen ? "true" : "false");
  });
});

// 4) Clic n'importe où ailleurs : on ferme tout
document.addEventListener("click", () => {
  closeAllMenus();
});

// 5) Touche Escape : on ferme tout
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeAllMenus();
  }
});
