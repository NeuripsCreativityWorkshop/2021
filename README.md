# NeurIPS ML4CD 2021 site WebApp

Webapp for the NeurIPS ML4CD 2021 site.

## Development

1. `yarn install` to install all package dependencies.
2. `yarn start` to start the devserver on http://localhost:8080.  No need to refresh between changes; files changes/saves will automatically load on localhost. In other words, hot module replacement is on by default.
3. Build GH-pages static site with `yarn create:pub`. This will translate the react files to a static site for github pages, and save it in the `docs` folder.

### Prerequisites

Node.js  
<https://nodejs.org/en/>

Yarn Berry  
<https://yarnpkg.com/getting-started/install>

Visual Studio Code (nice to have)  
<https://code.visualstudio.com/>

