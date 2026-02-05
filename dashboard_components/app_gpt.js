// ====== UI: Drawer + Modal ======
const drawer = document.getElementById("drawer");
const btnMenu = document.getElementById("btnMenu");
const btnCloseDrawer = document.getElementById("btnCloseDrawer");

const helpModal = document.getElementById("helpModal");
const btnHelp = document.getElementById("btnHelp");
const btnCloseHelp = document.getElementById("btnCloseHelp");

function openDrawer() {
  drawer.classList.add("is-open");
  drawer.setAttribute("aria-hidden", "false");
}
function closeDrawer() {
  drawer.classList.remove("is-open");
  drawer.setAttribute("aria-hidden", "true");
}
function openHelp() {
  helpModal.classList.add("is-open");
  helpModal.setAttribute("aria-hidden", "false");
}
function closeHelp() {
  helpModal.classList.remove("is-open");
  helpModal.setAttribute("aria-hidden", "true");
}

btnMenu.addEventListener("click", openDrawer);
btnCloseDrawer.addEventListener("click", closeDrawer);

btnHelp.addEventListener("click", openHelp);
btnCloseHelp.addEventListener("click", closeHelp);

// close modal when clicking backdrop
helpModal.addEventListener("click", (e) => {
  if (e.target === helpModal) closeHelp();
});

// ====== Rings generation ======
// For now we use a small local list.
// Next step: compute these values from data.js once it's clean/valid JS.
const primarySkills = [
  { id: "HTML", label: "HTML", percent: 10 },
  { id: "CSS", label: "CSS", percent: 12 },
  { id: "JS", label: "JavaScript", percent: 15 },
  { id: "QA", label: "QA automation", percent: 35 },
  { id: "CYPRESS", label: "Cypress", percent: 5 },
  { id: "TEST", label: "Test\nMethodologies", percent: 45 },
  { id: "CICD", label: "CI/CD", percent: 0 },
];

const ringsContainer = document.getElementById("rings");

function polarToXY(centerX, centerY, radius, angleDeg) {
  const rad = (angleDeg * Math.PI) / 180;
  return {
    x: centerX + radius * Math.cos(rad),
    y: centerY + radius * Math.sin(rad),
  };
}

function renderRings() {
  ringsContainer.innerHTML = "";

  const orbit = document.querySelector(".skills-orbit");
  const rect = orbit.getBoundingClientRect();

  const centerX = rect.width / 2;
  const centerY = rect.height / 2;

  const radius = Math.min(rect.width, rect.height) * 0.33;

  // distribute evenly
  primarySkills.forEach((skill, index) => {
    const angle = -110 + (index * 360) / primarySkills.length; // start angle to mimic your layout
    const { x, y } = polarToXY(centerX, centerY, radius, angle);

    const el = document.createElement("button");
    el.className = "ring";
    el.type = "button";
    el.style.setProperty("--p", String(skill.percent));
    el.style.left = `${x}px`;
    el.style.top = `${y}px`;
    el.style.transform = "translate(-50%, -50%)";
    el.setAttribute("aria-label", `${skill.label}, ${skill.percent}% acquired`);

    el.innerHTML = `
      <span class="ring-node" aria-hidden="true"></span>
      <span class="ring-label">${skill.label.replaceAll("\n", "<br/>")}</span>
    `;

    // later: open skill details
    el.addEventListener("click", () => {
      console.log("Clicked:", skill.id);
    });

    ringsContainer.appendChild(el);
  });
}

renderRings();
window.addEventListener("resize", renderRings);
