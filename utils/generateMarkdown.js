// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of _README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  # ${data.title}

  ## Description
  ${data.description}
  
  ## Motivation
  ${data.motivation}
  
  ## Installation
  ${data.installation}
  
  ## Contributors
  ${data.contributors}
  
  ## GitHub
  ${data.github}
  
  ## Email
  ${data.email}
  
  ## License
  ${data.license}
`;
}

module.exports = generateMarkdown;
