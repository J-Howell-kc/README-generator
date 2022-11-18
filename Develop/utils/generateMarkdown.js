// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {

if (license != null) {
  switch (license) {
    case 'MIT':
      break;

    case 'BSD':
      break;

    case 'ISC':
      break;

    case 'Apache':
      break;

    case 'GNU':
      break;

    case 'Other':
      break;

    case 'None':
      break;
  }
}
}
// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license != null) {
    return `https://choosealicense.com/licenses/${license}/`;
  }


}
// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
//function renderLicenseSection(license) { }
//const licenseSection = ;
//if (license != null) { 
// return 

//} 

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # Title
${data.title}

## Description
${data.description}

## Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [Contributing](#contributing)
* [Tests](#tests)
* [License](#license)
* [Questions](#questions)
* [Screenshot] (#screenshot)

## License
![License](${renderLicenseBadge(data.license)}) <br />
License Info: ${renderLicenseLink(data.license)} 

## Installation
${data.installation}

## Usage
${data.usageInfo}

## Contribution Guidelines
${data.contributionGuidelines}

## Tests
${data.test}

## Questions and Comments
### GitHub Profile link
https://github.com/${data.github} <br />
### Email
Feel free to direct any questions to ${data.email}. Thanks.

## Screenshot
${data.screenshot};`

}

module.exports = generateMarkdown;
