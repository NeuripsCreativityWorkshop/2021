# NeurIPS ML4CD 2021 site WebApp

Webapp for the NeurIPS ML4CD 2021 site.

## Development

### Prerequisites

Node.js  
<https://nodejs.org/en/>

Yarn Berry  
<https://yarnpkg.com/getting-started/install>

Visual Studio Code (nice to have)  
<https://code.visualstudio.com/>

### Installing packages

To install all packages
`yarn install`

### Build and run

To run devserver on http://localhost:8080  
`yarn start`

Hot module replacement is on by default. Files changes/saves will
automatically load on localhost webpage (no need to refresh). Allowing
for faster development without manual site refresh.

### Build production

Building minified production files  
`yarn build:prod`  
minified files placed in dist folder

To test build packages  
`yarn start:prod` to test prod using webpack dev server

### Test

To run unit tests  
`yarn test`

### Linting

To run linting and automatically fix issues  
`yarn lint:fix`

### Precommit hooks

When commiting with git there will be a precommit check for styling and code checks with eslint. Make sure to look at console to fix any errors that may appear.

## Troubleshooting

Coming soon...
