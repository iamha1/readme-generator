function generateMarkdown(data, git) {
    return `

# ${data.title.toUpperCase()}

## The Title here --> ${data.title}


## Descriptions 
${data.description}

## Table of Contents 
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)

## Installation

${data.installation}

## Usage
${data.usage}

## Lisence

${data.lisence}

## Contributing

${data.contributing}

## Tests

${data.test}

![Badge](https://img.shields.io/badge/version-1.0-blue)

## Questions

${git.data.avatar_url}

<img src="${git.data.avatar_url}" alt="avatar" style="border-radius: 16px" width="30" />
If you have any questions about the repo, open an issue or contact (${data.email}) directly.
`;

}

module.exports = generateMarkdown;


