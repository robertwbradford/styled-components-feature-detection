# Contributing

## Workflow

- Ensure you have the latest [Git](https://git-scm.com/) and [Node + npm](https://nodejs.org) installed
- Create a feature branch off of `master`
- Run `npm install` to install dependencies
- Commit your changes
- Submit a pull request to `master`
  - An admin reviews your pull request
- Once all checks on your pull request have passed, an admin merges your pull request into `master`

  [//]: # (`npm run precommit` runs automatically to ensure things are working as expected related to your changed files)

## Organization

The project is organized into a `features` folder and a `tests` folder. `features` represents a feature available with styled components. `tests` correspond with the available feature. The root `index.js` file in src contains exports for all of the available feature checks.

## Technology

- Language: [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
- Packages: [npm](https://www.npmjs.com)
- Styling: [styled-components](https://www.styled-components.com/)
- Linting: [ESLint](https://eslint.org)
- Testing: [Jest](http://jestjs.io) + [Enzyme](http://airbnb.io/enzyme)
- Formatting: [Prettier](https://prettier.io)

## Integrations

- Work tracking: [GitHub Issues](https://github.com/plumbblake/styled-components-feature-detection/issues)
