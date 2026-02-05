// Définition du projet QA avec les jalons et coefficients
const projectQA = {
  id: 'QA',
  libelle: 'QA_automation',
  type: 'project',
  jalons: [
    { refId: 'CYPRESS', coefficient: 25 },
    { refId: 'JS', coefficient: 22 },
    { refId: 'TEST_METHOD', coefficient: 20 },
    { refId: 'CICD', coefficient: 15 },
    { refId: 'HTML_CSS', coefficient: 8 }
  ]
  niveauCalcule: null // A mettre à jour avec la logique de calcul appropriée 
};

// Définition de la compétence primaire JavaScript
const javascript = {
  id: 'JS',
  label: 'JavaScript',
  type: 'language',
  subskills: [
    {refID: 'JS_SYNTAX', coefficient: 10, acquisition: 0},
    {refID: 'JS_FUNCTIONS', coefficient: 15, acquisition: 0},
    {refID: 'JS_DOM', coefficient: 18, acquisition: 0},
    {refID: 'JS_DATA_STRUCTURES', coefficient: 20, acquisition: 0},
    {refID: 'JS_ASYNC', coefficient: 17, acquisition: 0},
    {refID: 'JS_DEBUGGING', coefficient: 12, acquisition: 0}
  ]
  proof_of_acquisition: {
    type: 'project',
    title: 'Self-training dashboard'
    repository: null // A mettre à jour avec le lien vers le repository du projet de self-training
    description: null // A mettre à jour avec une description du projet de self-training et des compétences démontrées
    date_completed: null // A mettre à jour avec la date de complétion du projet de self-training 
    demonstrates: ['JS_SYNTAX', 'JS_FUNCTIONS', 'JS_DOM', 'JS_DATA_STRUCTURES', 'JS_ASYNC', 'JS_DEBUGGING']  
  }
  niveauCalcule: null // A mettre à jour avec la logique de calcul appropriée 
};

// Définition de la sous-compétence Syntax and Fundamentals
const syntaxAndFundamentals = {
  id: 'JS_SYNTAX',
  label: 'Syntax and Fundamentals',
  type: 'subskill',
  acquisition: 0,
  description: 'Mastery of JavaScript basic syntax including variables, data types, operators and control structures.',
};

// Définition de la sous-compétence Functions and Scope
const functionsAndScope = {
  id: 'JS_FUNCTIONS',
  label: 'Functions and Scope',
  type: 'subskill',
  acquisition: 0,
  description: 'Mastery of functions and scope in JavaScript, including nested functions, closures, and local/global variables.',
};

// Définition de la sous-compétence DOM Manipulation
const domManipulation = {
  id: 'JS_DOM',
  label: 'DOM Manipulation',
  type: 'subskill',
  acquisition: 0,
  description: 'Ability to manipulate the Document Object Model (DOM) in JavaScript, including selection, modification and deletion of HTML elements.',
};

// Définition de la sous-compétence Data Structures and Iteration
const dataStructuresAndIteration = {
  id: 'JS_DATA_STRUCTURES',
  label: 'Data Structures and Iteration',
  type: 'subskill',
  acquisition: 0,
  description: 'Understanding of JavaScript data structures (arrays, objects) and iteration techniques (loops, array methods).',
};

// Définition de la sous-compétence Asynchronous Programming and API
const asynchronousProgrammingAndAPI = {
  id: 'JS_ASYNC',
  label: 'Asynchronous Programming and API',
  type: 'subskill',
  acquisition: 0,
  description: 'Mastery of asynchronous programming in JavaScript, including promises, async/await, and interaction with RESTful APIs.',
};

// Définition de la sous-compétence Debugging and Best Practices
const debuggingAndBestPractices = {
  id: 'JS_DEBUGGING',
  label: 'Debugging and Best Practices',
  type: 'subskill',
  acquisition: 0,
  description: 'Ability to debug JavaScript code and follow coding best practices to ensure code quality and maintainability.',
};

// Définition de la compétence primaire Cypress
const cypress = {
    id: 'CYPRESS',
    label: 'Cypress',
    type: 'tool',
    subskills: [
      {refID: 'CYPRESS_STRUCTURE', coefficient: 15, acquisition: 0},
      {refID: 'CYPRESS_SELECTORS', coefficient: 20, acquisition: 0},
      {refID: 'CYPRESS_API', coefficient: 18, acquisition: 0},
      {refID: 'CYPRESS_CUSTOM', coefficient: 12, acquisition: 0},
      {refID: 'CYPRESS_CICD', coefficient: 10, acquisition: 0},
      {refID: 'JS', coefficient: 70, acquisition: null } // Référence à la compétence JavaScript
    ]
    proof of acquisition: {
      type: 'project',
      title: null, // A mettre à jour avec le titre du projet de test automatisé utilisant Cypress
      repository: null, // A mettre à jour avec le lien vers le repository du projet de test automatisé utilisant Cypress
      description: null, // A mettre à jour avec une description du projet de test automatisé utilisant Cypress et des compétences démontrées
      date_completed: null, // A mettre à jour avec la date de complétion du projet de test automatisé utilisant Cypress
      demonstrates: ['CYPRESS_STRUCTURE', 'CYPRESS_SELECTORS', 'CYPRESS_API', 'CYPRESS_CUSTOM', 'CYPRESS_CICD', 'JS']
    }
    niveauCalcule: null // A mettre à jour avec la logique de calcul appropriée 
};    

// Définition de la compétence secondaire "test structure and syntax"
const cypressTestStructure = {
    id: 'CYPRESS_STRUCTURE',
    label: 'Test Structure and Syntax',
    type : 'subskill',
    acquisition: 0,
    description: 'Ability to structure and organize tests using Cypress syntax, including test suites, hooks, and basic assertions.', 
};

// Définition de la compétence secondaire "Selectors and Element Interaction"
const cypressSelectors = {
    id: 'CYPRESS_SELECTORS',
    label: 'Selectors and Element Interaction',
    type : 'subskill',
    acquisition: 0,
    description: 'Proficiency in selecting DOM elements and simulating user interactions through Cypress commands.', 
};

// Définition de la competence secondaire "API Testing and Network Management"
const cypressApiTesting = {
    id: 'CYPRESS_API',
    label: 'API Testing and Network Management',
    type : 'subskill',
    acquisition: 0,
    description: 'Expertise in testing APIs and managing network requests using Cypress interception capabilities.',
};

// Définition de la compétence secondaire "Custom Commands and Reusability"
const cypressCustomCommands = {
    id: 'CYPRESS_CUSTOM',
    label: 'Custom Commands and Reusability',
    type : 'subskill',
    acquisition: 0,
    description: 'Skill in creating reusable custom commands and implementing design patterns like Page Object Model.',
};

// Définition de la compétence secondaire "Cypress in CI/CD Pipelines"
const cypressCICD = {
    id: 'CYPRESS_CICD',
    label: 'CI/CD Integration and Reporting',
    type : 'subskill',
    acquisition: 0,
    description: 'Capability to integrate Cypress tests into CI/CD pipelines and generate comprehensive test reports.',
};

// Définition de la compténce primaire "Test Methodologies"
const testMethodologies = {
    id: 'TEST_METHOD',
    label: 'Test Methodologies',
    type: 'concept',
    subskills: [
      {refID: 'TEST_FUNDAMENTALS', coefficient: 15, acquisition: 65},
      {refID: 'TEST_DESIGN', coefficient: 22, acquisition: 45},
      {refID: 'TEST_STRATEGY', coefficient: 18, acquisition: 35},
      {refID: 'TEST_DEFECT', coefficient: 12, acquisition: 55},
      {refID: 'TEST_AUTOMATION_STRATEGY', coefficient: 20, acquisition: 25},
      {refID: 'TEST_AGILE', coefficient: 13, acquisition: 40}
    ]
    proof of acquisition: {
      type: 'certifcation_and_appplication',
      certifiation: {
        name: 'ISTQB Foundation Level',
        date: null,
        credential_url: null // A mettre à jour avec le lien vers la certification ISTQB Foundation Level obtenue
      },
    practical_application: {
      project: 'Self-training dashboard',
      repository: null, // A mettre à jour avec le lien vers le repository du projet de self-training démontrant l'application pratique des méthodologies de test
      description: 'Application of test design techniques and automation strategy in real project'
    },
    niveauCalcule: null // A mettre à jour avec la logique de calcul appropriée 
};

// Définition du subskill Test Fundamentals and Terminology
const testFundamentals = {
    id: 'TEST_FUNDAMENTALS',
    label: 'Test Fundamentals and Terminology',
    type : 'subskill',
    acquisition: 65,
    description: 'Understanding of fundamental testing concepts, test types hierarchy, and standard QA terminology used across the industry.', 
};

// Défintion du subskill Test Design Techniques
const testDesignTechniques = {
    id: 'TEST_DESIGN',
    label: 'Test Design Techniques',
    type : 'subskill',
    acquisition: 45,
    description: 'Proficiency in applying test design techniques such as boundary value analysis, equivalence partitioning, and decision tables to create effective test cases.', 
};

// Définition du subskill Test Strategy and Planning
const testStrategyAndPlanning = {
    id: 'TEST_STRATEGY',
    label : 'Test Strategy and Planning',
    type : 'subskill',
    acquisition: 35,
    description: 'Ability to define comprehensive test strategies including risk analysis, coverage planning, and entry/exit criteria definition.',
};

// Définition du subskill Defect Management and Reporting
const defectManagementAndReporting = {
    id: 'TEST_DEFECT',
    label: 'Defect Management and Reporting',
    type : 'subskill',
    acquisition: 55,
    description: 'Expertise in defect lifecycle management, writing clear and actionable bug reports, and effectively communicating issues to development teams.',
};

// Définition du subskill Automation Strategy and Best Practices
const automationStrategyAndBestPractices = {
    id: 'TEST_AUTOMATION_STRATEGY',
    label: 'Automation Strategy and Best Practices',
    type : 'subskill',
    acquisition: 25,
    description: 'Knowledge of automation best practices including when to automate, maintainability patterns, and test data management strategies.',
};

// Définition d subskill QA in Agile/DevOps Context
const qaInAgileDevOpsContext = {
    id: 'TEST_AGILE',
    label: 'QA in Agile/DevOps Context',
    type : 'subskill',
    acquisition: 40,
    description: 'Understanding of QA role in Agile and DevOps environments, including continuous testing, shift-left practices, and cross-functional collaboration.',
};

// Définition de la compétence secondaire "CI/CD and DevOps Tools"
const cicdIntegrationAndReporting = {
    id: 'CICD',
    label: 'CI/CD Integration and Repotring',
    type: 'tool',
    subskills: [
      {refID: 'CICD_GIT_GITHUB', coefficient: 25, acquisition: 0},
      {refID: 'CICD_CONCEPTS', coefficient: 18, acquisition: 0},
      {refID: 'CICD_PIPELINE', coefficient: 22, acquisition: 0},
      {refID: 'CICD_TESTING', coefficient: 20, acquisition: 0},
      {refID: 'CICD_DEPLOYMENT', coefficient: 10, acquisition: 0},
      {refID: 'CICD_MONITORING', coefficient: 12, acquisition: 0},
    ]
    proof of acquisition: {
        type : 'project',
        title: 'Self_training dashboard CI/CD Pipeline',
        repository: null, // A mettre à jour avec le lien vers le repository du projet de self-training démontrant l'intégration CI/CD
        description: null, // A mettre à jour avec une description du projet de self-training démontrant l'intégration CI/CD et des compétences démontrées
        key_features: [
            'Automated test execution on push/PR',
            'Parallel test runs with matrices',
            'Test report generation and artifact storage',
            'Automated deployment on main branch'
        ],
        demonstrates_subskills: ['CICD_GIT_GITHUB', 'CICD_CONCEPTS', 'CICD_PIPELINE', 'CICD_TESTING', 'CICD_DEPLOYMENT', 'CICD_MONITORING']
        date_completed: null // A mettre à jour avec la date de complétion du projet de self-training démontrant l'intégration CI/CD
    },
    niveauCalcule: null // A mettre à jour avec la logique de calcul appropriée
};

// Définition du subskill Git and Version Control (adapted to CI/CD context)
const cicdGitAndVersionControl = {
    id : 'CICD_GIT_GITHUB',
    label: 'Git and Version Control',
    type: 'subskill',
    acquisition: 0,
    description: 'Proficiency in Git version control including branching strategies, commit management, merge conflict resolution, and collaborative workflows.',
};)

// Définition du subskill CI/CD Concepts and Tools
const cicdConceptsAndPrinciples = {
    id: 'CICD_CONCEPTS',
    label: 'CI/CD Concepts and Principles',
    type: 'subskill',
    acquisition: 0,
    description: 'Understanding of CI/CD principles, pipeline stages, integration vs delivery vs deployment distinctions, and DevOps best practices.',
};

// Définition du subskill CI/CD Pipeline Configuration and Management
const cicdPipelineConfigurationAndAutomation = {
    id: 'CICD_PIPELINE',
    label: 'CI/CD Pipeline Configuration and Automation',
    type: 'subskill',
    acquisition: 0,
    description: 'Ability to configure and maintain CI/CD pipelines using declarative syntax, including jobs orchestration, environment management, and parallel execution strategies.',
};

// Définition du subskill Automated Testing Integration
const cicdAutomatedTestingIntegration = {
    id: 'CICD_TESTING',
    label: 'Automated Testing Integration',
    type: 'subskill',
    acquisition: 0,
    description: 'Expertise in integrating automated test suites into CI/CD pipelines, including headless execution, artifact management, and failure handling.',
};

// Définition du subskill Deployment and Release Management
const cicdDeploymentAndReleaseManagement = {
    id: 'CICD_DEPLOYMENT',
    label: 'Deployment and Release Management',
    type: 'subskill',
    acquisition: 0,
    description: 'Knowledge of deployment strategies, release gating mechanisms, rollback procedures, and production release management.',
};

// Définition du subsill Monitoring and Reporting 
const cicdMonitoringAndReporting = {
    id: 'CICD_MONITORING',
    label: 'Monitoring and Reporting',
    type: 'subskill',
    acquisition: 0,
    description: 'Skill in implementing build monitoring, generating automated reports, tracking pipeline metrics, and configuring stakeholder notifications.',
};

// Définition de la compétence HTML x CSS
const htmlCss = {
    id: 'HTML_CSS',
    label: 'HTML and CSS',
    type: 'language',
    subskills: [
      {refID: 'HTML_STRUCTURE', coefficient: 20, acquisition: 0},
      {refID: 'CSS_SELECTORS', coefficient: 30, acquisition: 0},
      {refID: 'CSS_LAYOUT', coefficient: 15, acquisition: 0},
      {refID: 'DEVTOOLS', coefficient: 25, acquisition: 0},
      {refID: 'HTML_ACCESSIBILITY', coefficient: 10, acquisition: 0}
    ],
    proof of acquisition: {
        type: 'project',
        title: 'Self-training dashboard',
        repository: null, // A mettre à jour avec le lien vers le repository du projet de self-training démontrant les compétences en HTML et CSS
        description: null, // A mettre à jour avec une description du projet de self-training démontrant les compétences en HTML et CSS et des compétences démontrées
        date_completed: null, // A mettre à jour avec la date de complétion du projet de self-training démontrant les compétences en HTML et CSS
        demonstrates: ['HTML_STRUCUTURE', 'CSS_SELECTORS', 'CSS_LAYOUT', 'DEVTOOLS', 'HTML_ACCESSIBILITY']
    },
    niveauCalcule: null // A mettre à jour avec la logique de calcul appropriée     
};

// Définition du subskill HTML Structure and Semantics
const htmlStructureAndSemantics = {
    id: 'HTML_STRUCTURE',
    label: 'HTML Structure and Semantics',
    type: 'subskill',
    acquisition: 0,
    description: 'Understanding of HTML semantic structure, DOM hierarchy, essential attributes, and interactive elements for effective test automation.',
};

// Définition dusubskill CSS Selectors and Specificity
const cssSelectorsAndSpecificity = {
    id: 'CSS_SELECTORS',
    label: 'CSS Selectors and Specificity',
    type: 'subskill',
    acquisition: 0,
    description: 'Proficiency in CSS selector syntax, specificity rules, and ability to craft robust selectors for reliable element targeting in automated tests.',
};

// Définition du subskill CSS Layout Fundamentals
const cssLayoutFundamentals = {
    id: 'CSS_LAYOUT',
    label: 'CSS Layout Fundamentals',
    type: 'subskill',
    acquisition: 0,
    description: 'Basic knowledge of CSS box model, layout mechanisms, and positioning for understanding page structure and debugging visual issues.',
};

// Définition du subskill Developer Tools and Debugging
const developerToolsAndDebugging = {
    id: 'DEVTOOLS',
    label: 'Developer Tools and Debugging',
    type: 'subskill',
    acquisition: 0,
    description: 'Expertise in using browser Developer Tools for element inspection, selector identification, network analysis, and troubleshooting test failures.',
};

// Définition du subskill Accessibility and Best Practices
const accessibilityAndBestPractices = {
    id: 'HTML_ACCESSIBILITY',
    label: 'Accessibility and Best Practices',
    type: 'subskill',
    acquisition: 0,
    description: 'Awareness of accessibility principles, ARIA attributes, semantic HTML usage, and their impact on application testability and quality.',
};