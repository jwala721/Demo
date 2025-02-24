This project is a comprehensive setup for end-to-end testing using Cypress. It includes integration with Allure Reports for rich test reporting and Jenkins for CI/CD automation.


🛠️ Prerequisites
Node.js 
npm
Cypress installed globally or locally in the project
Jenkins installed and configured

📦 Installation
Clone the repository:
git clone <repository-url>
cd <project-folder>
Install project dependencies:
npm install
Install Allure Reporter:
npm install --save-dev @shelex/cypress-allure-plugin


Update cypress.config.js to enable Allure:
const { defineConfig } = require("cypress");
const { allureCypress } = require("allure-cypress/reporter");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      allureCypress(on);
    },
  },
});


Add a script to package.json for running tests with Allure:

{
  "name": "demo",
  "version": "1.0.0",
  "description": "NoeitherIP project",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "cypress:open": "cypress open --browser chrome --e2e",
    "cypress:runDefault": "cypress run --browser chrome --spec 'cypress/e2e/**/*.cy.js'",
    "cypress:chrome": "cypress run --browser chrome --spec 'cypress/e2e/**/*.cy.js'",
    "cypress:smoke": "cypress run --browser chrome --spec 'cypress/e2e/2-advanced-examples/actions.cy.js'",
    "cypress:runChromeHeadless": "cypress run --headless --browser chrome --spec cypress/e2e/**/*.cy.js --record --key 4bc50df7-5eee-4147-8eb3-ccea611c8d4b",
    "browser:chrome": "npx cypress run --browser=chrome --headed --spec cypress/e2e/2-advanced-examples/actions.cy.js --reporter mocha-allure-reporter",
    "report:allure": "allure generate allure-results --clean -o allure-report && allure open  allure-report",
    "allure-execution": "npm run trigger-test -- --browser=chrome --headed --env allure=true",
    "clean:folders": "rmdir /s /q allure-report && rmdir /s /q allure-results",
    "cy:run-test": "cypress run --env allure=true",
    "generate-allure:report": "allure generate allure-results --clean -o allure-report && allure open allure-report",
    "tests": "npm run clean:folders && npm run cy:run-test && npm run generate-allure:report",
    "build": "webpack"
  },
  "author": "Jwala Kumar",
  "license": "ISC",
  "devDependencies": {
    "@shelex/cypress-allure-plugin": "^2.40.2",
    "allure-commandline": "^2.28.0",
    "allure-cypress": "^2.15.1",
    "cypress": "^13.6.6",
    "mocha-allure-reporter": "^1.4.0"
  },
  "dependencies": {
    "save-dev": "^0.0.1-security"
  }
}

🚀 Running Tests Locally

Run Cypress tests and generate the Allure report:
npm run clean:folders
npm run cy:run-test
npm run generate-allure:report

🏗️ Jenkins Integration
Install necessary Jenkins plugins:
Allure Jenkins Plugin
NodeJS Plugin


Create a new Jenkins pipeline and add the following script:
pipeline {
    agent any
    stages {
        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }
        stage('Run Cypress Tests') {
            steps {
                sh 'npx cypress run'
            }
        }
        stage('Generate Allure Report') {
            steps {
                sh 'allure generate allure-results --clean -o allure-report'
            }
        }
        stage('Publish Allure Report') {
            steps {
                allure includeProperties: false, jdk: '', reportBuildPolicy: 'ALWAYS', results: [[path: 'allure-report']]
            }
        }
    }
}
