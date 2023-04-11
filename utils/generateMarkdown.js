// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

${renderLicenseBadge(data.license)}
## Description
This application allows developers to create a professional README.md file in a what that is clean, efficience, and simple to opperate.

${data.description}

## Table of Contents

-[Installation] (#Installation)
-[Usage] (#Usage)
-[github] (#github)
-[Contributions] (#Contributions)
-[Test] (#Test)
-[Email] (#Email)
-[License] (#License)

## Installation
The following dependancies must be installed to run the application properly: inquirer, fs, utils.

${data.installation}

## Usage
In order to use this app, run it within an integrated terminal

${data.usage}

## github

${data.github}

##Contributions
Contributors: N/A

${data.contributions}

## Email
The following email will be used for contact purposes: manindersmanan@gmail.com
${data.email}

## license 
This project is licensed under the MIT license

${renderLicenseBadge(data.license)}

  `;
};

module.exports = generateMarkdown;
//hopefully this works 