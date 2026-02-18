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
      <h3>The header</h3>
      <p>
        To achieve some consistency between home and evidence pages, the header is copied from the home page, which falls out of the LLM chart here. 
      </p>
      <button class="help-link" data-target="overview_full">View more</button>

      <h3>The LLM chart</h3>
      <p>
        This dashboard was made with a pedagogic training, guided by LLM. However, the evidence page was made as proof of my skills, and as such a LLM use chart was necessary.  
      </p>
      <button class="help-link" data-target="how_full">View more</button>

    `
  },

  overview_full: {
    title: "What are the evidence?",
    html: `
      <p>
        This dashboard is a personnal tool to assess of my skills in mandatory fields, to achieve my project prerequiste. For now, my objective is to reach a junior QA position. 
      </p>
      <p>
        It offers a clear and easy view of mu current techninal knowledge, which is assessed by LLM to give me an adequate acquisition level. 
      </p>
      <p>
        Please feel free to click on </> anywhere, to be linked with the object code, and assess by yourself if I overestimated my self of not. 
      </p>
      <p>
        As this project is my first, working together or not, I would love to get your feedback about it. Feel free to reach me! 
      </p>    
      <button class="help-link" data-target="summary">Back</button>
    `
  },

  how_full: {
    title: "The LLM chart",
    html: `
      <p>
        We are in a constant changing world, and as LMM are taking a bigger place everyday, some skills demonstrated here may not be required.
      </p>
      <p>
        Still, as I think there is a need to know the subject to work well with the LMM, I used it as a teacher to train myself.  
      </p>
      <p>
        As such, my use of LMM (in proof projects) are : 
         </p>
         <ul>  
            <li> To set the task and objective  </li>
            <li> To mark the result as an acquisition level     </li>
            <li> To explain and find functions          </li>
            <li> To correct         </li>
        </ul> 
      <p>
      Every line of code in this folder is understood, developed and validated by me. 
      </p>
      <button class="help-link" data-target="summary">Back</button>
    `
  },
        // To use later on for the next primary skill explanation
   test_methodologies : {
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
