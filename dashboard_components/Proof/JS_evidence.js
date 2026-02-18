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

// -------- Deuxième partie : On créé un outil de Bug Report (que l'on va appeler Mini Bug report) --------

// Attribution des variables
const testStatus = document.getElementById("Result");
const taskInput = document.getElementById("taskInput");
const saveButton = document.getElementById("saveButton");
const bugDescription = document.getElementById("taskInputDescription");
const selectPriority = document.getElementById("prioritySelect");
const selectStatus = document.getElementById("statusSelect");
const selectSeverity = document.getElementById("selectSeverity");
const container = document.getElementById("container");
const listButton = document.getElementById("listButton");
const list = document.getElementById("list");
const deleteInput = document.getElementById("delete");
const deleteButton = document.getElementById("deleteButton");

// Stockage
const STORAGE_KEY = "bugReports";

// Table en mémoire
let bugReports = [];

// ---------- Fonction d'affichage (réutilisable) ----------
function renderList() {
    const listSpot = document.getElementById("list");
    listSpot.innerHTML = "";

    for (let i = 0; i < bugReports.length; i++) {
        const p = document.createElement("p");
        p.textContent = bugReports[i][1];
        listSpot.appendChild(p);
    }
}

// ---------- Sauvegarder un nouveau bug ----------
saveButton.addEventListener("click", function () {
    // Nouveau "bug" 
    const bugReports1 = [
        Date.now(),                  // [0] 
        taskInput.value,             // [1] 
        bugDescription.value,        // [2] 
        selectPriority.value,        // [3] 
        selectStatus.value,          // [4] 
        selectSeverity.value         // [5] 
    ];

    // On le met en mémoire puis stockage du nouveau tableau
    bugReports.push(bugReports1);
    const savedTable = JSON.stringify(bugReports);
    localStorage.setItem(STORAGE_KEY, savedTable);

    // afficher la liste après save
    renderList();
});

// Message "saved" 
saveButton.addEventListener("click", function () {
    const accuserDeReception = document.createElement("p");
    accuserDeReception.textContent = "Bug report saved!";
    container.appendChild(accuserDeReception);
});

// ---------- SHOW BUG LIST ----------
listButton.addEventListener("click", function () {
  const backStorage = localStorage.getItem(STORAGE_KEY);

  // Si vide, vide. 
  bugReports = backStorage ? JSON.parse(backStorage) : [];

  renderList();
});

// ---------- DELETE (par id) ----------
deleteButton.addEventListener("click", function () {
  const idToDelete = Number(deleteInput.value);

  // Si l'input n'est pas un nombre valide, on ne fait rien
  if (!Number.isFinite(idToDelete)) return;

  // id 
  bugReports = bugReports.filter(bug => bug[0] !== idToDelete);

  // Re-sauvegarde + re-render
  localStorage.setItem(STORAGE_KEY, JSON.stringify(bugReports));
  renderList();
});



