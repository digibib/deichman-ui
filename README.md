## Deichman-ui

![NPM version](https://img.shields.io/npm/v/@digibib/deichman-ui.svg)

Style-guide and component library for the Oslo public libraries

[Live docs](https://digibib.github.io/deichman-ui)

### Developing

Local development is done via React-storybook. Clone the repo and run:

```
  npm i
  npm start
```

### Built with

- [React](https://reactjs.org/)
- [PostCSS](https://preset-env.cssdb.org/) CSS processing
- [Backpack.css](https://github.com/chris-pearce/backpack.css) CSS foundation for applications
- [Rollup](https://rollupjs.org/guide/en) JavaScript module bundler
- [Storybook](https://storybook.js.org/) UI Development Environment

### Publishing

To publish a new version of the library to npm:

```
  npm version {major/minor/patch}
  git push --tags
  git push origin master
  npm publish
```

To publish/update the docs:

```
  npm run deploy-storybook
```

### CDN Cache

jsDelivr will cache the `@latest` tag for 24 hours, if you're using the latest version and wish to purge the cache, visit https://purge.jsdelivr.net/npm/@digibib/deichman-ui@latest/dist/index.css
