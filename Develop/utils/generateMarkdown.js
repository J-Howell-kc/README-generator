// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {

  if (license != null)
    switch (license) {
      case 'MIT';
        break;

      case 'BSD';
        break;

      case 'ISC';
        break;

      case 'Apache';
        break;

      case 'GNU';
        break;

      case 'Other';
        break;

      case 'None';
      break;

    }
} else ''; 

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) { 
if (license != null) {
  return `https://choosealicense.com/licenses/${license}/`;

}else  '';
}
// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) { }
const licenseSection = ;
if () {   = true;

} else {

}
// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  
  # ${data.title}

`;
}

module.exports = generateMarkdown;
