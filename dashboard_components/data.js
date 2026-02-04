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
    { refId: 'GITHUB', coefficient: 12 },
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
};

// Définition de la sous-compétence Syntax and Fundamentals
const syntaxAndFundamentals = {
  id: 'JS_SYNTAX',
  label: 'Syntax and Fundamentals',
  type: 'subskill',
  acquisition: 0,
  description: 'Mastery of JavaScript basic syntax including variables, data types, operators and control structures.',
  proof_of_acquisition: null
};

// Définition de la sous-compétence Functions and Scope
const functionsAndScope = {
  id: 'JS_FUNCTIONS',
  label: 'Functions and Scope',
  type: 'subskill',
  acquisition: 0,
  description: 'Mastery of functions and scope in JavaScript, including nested functions, closures, and local/global variables.',
  proof_of_acquisition: null
};

// Définition de la sous-compétence DOM Manipulation
const domManipulation = {
  id: 'JS_DOM',
  label: 'DOM Manipulation',
  type: 'subskill',
  acquisition: 0,
  description: 'Ability to manipulate the Document Object Model (DOM) in JavaScript, including selection, modification and deletion of HTML elements.',
  proof_of_acquisition: null
};

// Définition de la sous-compétence Data Structures and Iteration
const dataStructuresAndIteration = {
  id: 'JS_DATA_STRUCTURES',
  label: 'Data Structures and Iteration',
  type: 'subskill',
  acquisition: 0,
  description: 'Understanding of JavaScript data structures (arrays, objects) and iteration techniques (loops, array methods).',
  proof_of_acquisition: null
};

// Définition de la sous-compétence Asynchronous Programming and API
const asynchronousProgrammingAndAPI = {
  id: 'JS_ASYNC',
  label: 'Asynchronous Programming and API',
  type: 'subskill',
  acquisition: 0,
  description: 'Mastery of asynchronous programming in JavaScript, including promises, async/await, and interaction with RESTful APIs.',
  proof_of_acquisition: null
};

// Définition de la sous-compétence Debugging and Best Practices
const debuggingAndBestPractices = {
  id: 'JS_DEBUGGING',
  label: 'Debugging and Best Practices',
  type: 'subskill',
  acquisition: 0,
  description: 'Ability to debug JavaScript code and follow coding best practices to ensure code quality and maintainability.',
  proof_of_acquisition: null
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
};    

// Définition de la compétence secondaire "test structure and syntax"
const teststructure = {
    id: 'CYPRESS_STRUCTURE',
    label: 'Test Structure and Syntax',
    type : 'subskill',
    acquisition: 0,
    description: 'Ability to structure and organize tests using Cypress syntax, including test suites, hooks, and basic assertions.', 
    proof_of_acquisition: null
};

// Définition de la compétence secondaire "Selectors and Element Interaction"
const selectors = {
    id: 'CYPRESS_SELECTORS',
    label: 'Selectors and Element Interaction',
    type : 'subskill',
    acquisition: 0,
    description: 'Proficiency in selecting DOM elements and simulating user interactions through Cypress commands.', 
    proof_of_acquisition: null
};

// Définition de la competence secondaire "API Testing and Network Management"
const apiTesting = {
    id: 'CYPRESS_API',
    label: 'API Testing and Network Management',
    type : 'subskill',
    acquisition: 0,
    description: 'Expertise in testing APIs and managing network requests using Cypress interception capabilities.'
,
    proof_of_acquisition: null
};

// Définition de la compétence secondaire "Custom Commands and Reusability"
const customCommands = {
    id: 'CYPRESS_CUSTOM',
    label: 'Custom Commands and Reusability',
    type : 'subskill',
    acquisition: 0,
    description: 'Skill in creating reusable custom commands and implementing design patterns like Page Object Model.',
    proof_of_acquisition: null
};

// Définition de la compétence secondaire "Cypress in CI/CD Pipelines"
const cypressCICD = {
    id: 'CYPRESS_CICD',
    label: 'CI/CD Integration and Reporting',
    type : 'subskill',
    acquisition: 0,
    description: 'Capability to integrate Cypress tests into CI/CD pipelines and generate comprehensive test reports.',
    proof_of_acquisition: null
};

