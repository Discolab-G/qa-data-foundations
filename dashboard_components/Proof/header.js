// ===== Help / Explanation panel =====
const helpPanel = document.getElementById("helpPanel");
const helpOverlay = document.getElementById("helpOverlay");
const helpTitle = document.getElementById("helpTitle");
const helpContent = document.getElementById("helpContent");

const helpBtn = document.querySelector(".help-btn");
const helpClose = document.getElementById("helpClose");

const helpPages = {
  summary: {
    title: "What are the evidences?",
    html: `
      <h3>The HTML language</h3>
      <p>
        The HTML creation made myself are the creation of the main content of this webpage, the creation of the header in its integrity is moslty copied part of the original one on the homepage.
      </p>
      <button class="help-link" data-target="overview_full">View more</button>

      <h3>The CSS language</h3>
      <p>
        The CSS creation made myself is the styling of the webpage, and is mostly copied from the original CSS file of the homepage. Of course, as the layout is fundamentaly different, this webpage design was easier than the original one. 
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
  if (helpOverlay) helpOverlay.hidden = false;
  helpPanel.setAttribute("aria-hidden", "false");

  document.getElementById("helpClose")?.focus();
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
