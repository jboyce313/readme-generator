// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

function generateMarkdown(data) {
  return `# ${data.title}
  ## Description
  ${data.description}
  ## Table of Contents
  \n[Installation](#installation)
  \n[Usage](#usage)
  \n[Contributing](#contributing)
  \n[Tests](#tests)
  \n[License](#license)
  \n[Questions](#questions)
  ## Installation
  ${data.installation}
  ## Usage
  ${data.usage}
  ## Contributing
  ${data.contributing}
  ## Tests
  ${data.tests}
  ## License
  ${data.license}
  ## Questions
  GitHub: [${data.github}](https://github.com/${data.github})\n
  For questions, email me at [${data.email}](mailto:${data.email})
  `;
}

module.exports = { generateMarkdown };
