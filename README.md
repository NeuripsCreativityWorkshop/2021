# NeurIPS ML4CD 2021 site WebApp

Webapp for the NeurIPS ML4CD 2021 site.
  
<https://neuripscreativityworkshop.github.io/2021/#/>

## Prerequisites

Node.js  
<https://nodejs.org/en/>

Yarn Berry  
<https://yarnpkg.com/getting-started/install>

Visual Studio Code (nice to have)  
<https://code.visualstudio.com/>
  
## Development

1. `yarn install` to install all package dependencies.
2. `yarn start` to start the devserver on http://localhost:8080.  
3. Make your changes. No need to refresh between changes; files changes/saves will automatically load on localhost. In other words, hot module replacement is on by default.
4. Once you are happy with your changes, build a static site for Github Pages with `yarn create:pub`. This will translate the react files to a static site for github pages, and save it in the `docs` folder.

## Content Editing

### Editing gallery items

1. open src/assets/artworks_content.json
2. place artwork images and videos somewhere accessibible by url (Blob storage/ image hosting)
3. edit json to add/edit/remove artworks, follow existing JSON format with unique ID, Title, Author, Description, Images, and Videos.
4. Run `yarn start` to test your changes

### Editing home page content

1. open src/pageContent/content.tsx
2. make changes to the json file assigned to content
3. follow existing json format rules, each section has a title field and body field
4. Run `yarn start` to test your changes

