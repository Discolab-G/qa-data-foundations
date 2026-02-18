import { primarySkills, skillsById } from "./data.js";

// --- 2) Calcul d'un % pour une compétence (moyenne pondérée)
function computePercent(skill, seen = new Set()) {
  // Anti-boucle au cas où (ex: A référence B, B référence A)
  if (seen.has(skill.id)) return 0;
  seen.add(skill.id);

  // Si pas de subskills : fallback (0)
  if (!Array.isArray(skill.subskills) || skill.subskills.length === 0) {
    return 0;
  }

  let sumCoef = 0;
  let sumWeighted = 0;

  for (const item of skill.subskills) {
    const coef = Number(item.coefficient) || 0;
    if (coef <= 0) continue;

    let value = item.acquisition;

    // Cas 1 : acquisition directe
    if (Number.isFinite(value)) {
      // ok
    }
    // Cas 2 : référence vers une autre compétence (acquisition null + refId)
    else if (value === null && item.refId && skillsById[item.refId]) {
      value = computePercent(skillsById[item.refId], new Set(seen));
    }
    // Cas 3 : inconnu => 0
    else {
      value = 0;
    }

    sumCoef += coef;
    sumWeighted += value * coef;
  }

  if (sumCoef === 0) return 0;

  // Arrondi entier 0..100
  const percent = Math.round(sumWeighted / sumCoef);
  return Math.max(0, Math.min(100, percent));
}

function getLabel(obj, fallback = "Unnamed") {
  return obj?.label ?? obj?.libelle ?? fallback;
}

function getDescriptionByRef(refId) {
  const item = skillsById[refId];
  return item?.description ?? "";
}

function openDetails(skill) {
  const panel = document.getElementById("details");
  const titleEl = document.getElementById("detailsTitle");
  const metaEl = document.getElementById("detailsMeta");
  const listEl = document.getElementById("detailsList");

  if (!panel || !titleEl || !metaEl || !listEl) return;

  titleEl.textContent = getLabel(skill, "Skill details");

  const totalCoef = (skill.subskills ?? []).reduce((acc, s) => acc + (Number(s.coefficient) || 0), 0);
  const skillPercent = computePercent(skill);

  metaEl.textContent = `Overall: ${skillPercent}% • Subskills: ${(skill.subskills ?? []).length} • Total weight: ${totalCoef}`;

  listEl.innerHTML = "";

  for (const s of (skill.subskills ?? [])) {
    const coef = Number(s.coefficient) || 0;

    // % acquisition affiché : direct si number, sinon via refId (skill primaire), sinon 0
    let acq = s.acquisition;

    if (acq === null && s.refId && skillsById[s.refId]) {
      // si la refId pointe sur une compétence primaire
      const ref = skillsById[s.refId];
      if (ref.subskills) acq = computePercent(ref);
      else acq = Number(ref.acquisition) || 0;
    }

    if (!Number.isFinite(acq)) acq = 0;

    const subLabel = getLabel(skillsById[s.refId], s.refId);
    const desc = getDescriptionByRef(s.refId);

    const li = document.createElement("li");
    li.className = "details-item";
    li.innerHTML = `
      <div class="details-row">
        <h4 class="details-subskill-title">${subLabel}</h4>
        <div class="details-subskill-stats">${Math.round(acq)}% • weight ${coef}</div>
      </div>
      <p class="details-subskill-desc">${desc || "No description yet."}</p>
      <button type="button" class="details-evidence">Evidence</button>
    `;

    // placeholder (pour plus tard)
    li.querySelector(".details-evidence").addEventListener("click", () => {
    window.open("./proof.html", "_blank", "noopener");
    });

    listEl.appendChild(li);
  }

  panel.hidden = false;
  panel.scrollIntoView({ behavior: "smooth", block: "start" });
}

function closeDetails() {
  const panel = document.getElementById("details");
  if (panel) panel.hidden = true;
}


// --- 3) Render
const container = document.getElementById("rings");

if (!container) {
  console.error('❌ Container "#rings" not found in HTML.');
} else {
  container.innerHTML = "";

  for (const skill of primarySkills) {
    const label = skill.label ?? skill.libelle ?? "Unnamed skill";
    const percent = computePercent(skill);
    console.log(skill.id, label, percent);

    const btn = document.createElement("button");
    btn.className = "ring";
    btn.type = "button";

    // Donut fill
    btn.style.setProperty("--p", String(percent));

    btn.innerHTML = `
      <span class="ring-node" aria-hidden="true"></span>
      <span class="ring-content">
        <span class="ring-text">${label}</span>
        <span class="ring-percent">${percent}%</span>
      </span>
    `;

    btn.addEventListener("click", () => {
      openDetails(skill);
    });

    

    container.appendChild(btn);
  }
}
document.getElementById("detailsClose")?.addEventListener("click", closeDetails);

// ===== Help / Explanation panel =====
const helpPanel = document.getElementById("helpPanel");
const helpOverlay = document.getElementById("helpOverlay");
const helpTitle = document.getElementById("helpTitle");
const helpContent = document.getElementById("helpContent");

const helpBtn = document.querySelector(".help-btn");
const helpClose = document.getElementById("helpClose");

const helpPages = {
  summary: {
    title: "About this dashboard",
    html: `
      <h3>What is this website?</h3>
      <p>
        This dashboard provides a structured overview of my skill acquisition
        as part of my journey toward a Quality Assurance Automation Engineer role.
      </p>
      <button class="help-link" data-target="overview_full">View more</button>

      <h3>How does it work?</h3>
      <p>
        Each circular chart represents a primary competency, calculated from
        weighted sub-skills reflecting real-world QA dependencies.
      </p>
      <button class="help-link" data-target="how_full">View more</button>

      <h3>How was this made?</h3>
      <p>
        This project was built as part of a self-training initiative combining
        JavaScript learning and QA automation concepts.
      </p>
      <button class="help-link" data-target="tech_full">View more</button>
    `
  },

  overview_full: {
    title: "What is this website?",
    html: `
      <p>
        This dashboard is a personal skills assessment tool designed to support
        my applications for Quality Assurance Automation roles.
      </p>
      <p>
        It offers a clear and transparent view of my current technical level,
        the competencies required for the role, and the roadmap I follow to
        progressively reach professional expectations.
      </p>
      <p>
        Rather than presenting isolated skills, the dashboard highlights how
        competencies interact and reinforce each other in real QA environments.
      </p>
      <button class="help-link" data-target="summary">Back</button>
    `
  },

  how_full: {
    title: "How does it work?",
    html: `
      <p>
        Each primary skill is broken down into sub-skills, each assigned a weight
        representing its relative importance.
      </p>
      <p>
        The acquisition percentage of a primary skill is calculated as a weighted
        average of its sub-skills. Some skills reference others directly, reflecting
        real technical dependencies (for example, automation tools relying on
        JavaScript fundamentals).
      </p>
      <p>
        Clicking on a skill reveals its detailed structure, allowing a transparent
        understanding of how each score is built.
      </p>
      <button class="help-link" data-target="summary">Back</button>
    `
  },

  tech_full: {
    title: "How was this made?",
    html: `
      <p>
        This dashboard was developed as part of a self-directed learning project.
        The data model, skill hierarchy, and weighting logic were designed manually.
      </p>
      <p>
        AI tools were used as learning assistants to explore approaches, validate
        logic, and review code structure. They were not used as black-box generators.
      </p>
      <p>
        All architectural decisions, calculations, and refinements were understood,
        tested, and adjusted by me to ensure relevance and consistency.
      </p>
      <button class="help-link" data-target="summary">Back</button>
    `
  }
};

// --- Functions ---
function openHelp(page = "overview") {
  const content = helpPages[page];
  if (!content) return;

  helpTitle.textContent = content.title;
  helpContent.innerHTML = content.html;

  helpPanel.classList.add("open");
  helpOverlay.hidden = false;
  helpPanel.setAttribute("aria-hidden", "false");
}

function closeHelp() {
  helpPanel.classList.remove("open");
  helpOverlay.hidden = true;
  helpPanel.setAttribute("aria-hidden", "true");
}

// --- Events ---
helpBtn?.addEventListener("click", () => openHelp("summary"));
helpClose?.addEventListener("click", closeHelp);
helpOverlay?.addEventListener("click", closeHelp);

helpContent?.addEventListener("click", (e) => {
  const target = e.target.closest(".help-link");
  if (target) {
    openHelp(target.dataset.target);
  }
});

// ===== Menu panel =====
const menuPanel = document.getElementById("menuPanel");
const menuOverlay = document.getElementById("menuOverlay");
const menuOpen = document.getElementById("menuOpen");
const menuClose = document.getElementById("menuClose");

function openMenu() {
  if (!menuPanel || !menuOverlay) return;
  menuPanel.classList.add("open");
  menuOverlay.hidden = false;
  menuPanel.setAttribute("aria-hidden", "false");
}

function closeMenu() {
  if (!menuPanel || !menuOverlay) return;
  menuPanel.classList.remove("open");
  menuOverlay.hidden = true;
  menuPanel.setAttribute("aria-hidden", "true");
}

menuOpen?.addEventListener("click", openMenu);
menuClose?.addEventListener("click", closeMenu);
menuOverlay?.addEventListener("click", closeMenu);
