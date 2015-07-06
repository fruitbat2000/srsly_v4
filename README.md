SRSLY_v4
========

### Otherwise known as first adventures in React JS 2015

#### Stuff you might want to know...

This site is built using React JS, it's isomorphic so all JS is server-side rendered initially for speed and SEO and stuff. Subsequent content changes are handled client-side as per standard SPA-type architecture. JS/JSX is compiled using Webpack, CSS is preprocessed using LESS, automation tasks are handled via Grunt and the whole lot runs on a node Express server.

Should you wish to check it out, run:

`npm install`

followed by:

`npm start`

and:

`grunt watch`

##### Future aims...

Use ReactCSSTransitionGroup to animate the project-detail view in and out. This would eliminate some of the weird scrolliness, but will require a fairly major refactor I think.