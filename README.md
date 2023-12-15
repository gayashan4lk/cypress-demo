# Cypress Demo Project

This project is a demonstration of how to use Cypress for end-to-end testing. It's designed to be a reference for those learning Cypress.

## Getting Started

To get started with this project, clone the repository to your local machine.

### Prerequisites

You'll need the following installed:

- Node.js
- npm

You can check if you have Node.js and npm installed by running:

```bash
node -v
npm -v
```

### 1. Installation

1. Install the dependencies:  
`npm install`

2. Install Cypress via npm:  

`npm install cypress --save-dev`

This will install Cypress locally as a dev dependency for your project.  

### 2. Running Tests

You can open Cypress by running:

`npx cypress open`

From the Cypress interface, you can choose the spec files you'd like to run.

Project Structure
cypress/fixtures - This is where you can put fixture files, which allow you to manage the data that you would use in your tests.
cypress/integration - This is where your test files live.
cypress/plugins - This file contains code that Cypress will execute during various stages of the testing process.
cypress/support - This file allows you to configure behaviors that are applied to every single test, like setting up defaults or defining custom commands.
Contributing
Contributions are welcome! Please read the contributing guidelines before getting started.

License
This project is licensed under the MIT License - see the LICENSE.md file for details.

Acknowledgments
Cypress Documentation: https://docs.cypress.io/guides/overview/why-cypress



