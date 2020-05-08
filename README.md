## Deichman-ui

![NPM version](https://img.shields.io/npm/v/@digibib/deichman-ui.svg)
![Bundle size](https://badgen.net/bundlephobia/minzip/@digibib/deichman-ui)

Style-guide and component library for the Oslo public libraries

- [Documentation](https://digibib.github.io/deichman-ui)
- [Changelog](CHANGELOG.md)

### Built with

- [React](https://reactjs.org/)
- [PostCSS](https://preset-env.cssdb.org/) CSS processing
- [Backpack.css](https://github.com/chris-pearce/backpack.css) CSS foundation for applications
- [Rollup](https://rollupjs.org/guide/en) JavaScript module bundler
- [Storybook](https://storybook.js.org/) UI Development Environment

### Developing

Local development is done via React-storybook. Clone the repo and run:

```
  npm i
  npm start
```

### New components

Before adding a new Component, make sure this is a generic utility-component. If it's not, add it to the project where it will be used. I.E, an "Accordion" is generic, a "LibraryDetailsCard" is probably not.

##### New component checklist:

|     | Requirement                 | Description                                                                       |
| --- | --------------------------- | --------------------------------------------------------------------------------- |
| ✅  | The component is semantic   | Use HTML5 markup, the correct font hierarchy etc.                                 |
| ✅  | The component is documented | Ensure the component has a `Component.md` file, a story and proptype definitions. |
| ✅  | The component is accessible | Usable with a keyboard, correct `:focus`-styles, correct `aria-roles`.            |
| ✅  | The component is tested     | Cross-browser testing.                                                            |

### Icons

All icons are stored in the `/src/assets/icons` folder.

##### Adding a new icon:

- Export the icons for web!
- It's important that they're as lean as possible since they'll be downloaded by all visitors. [Use this Optimizer if possible](https://petercollingridge.appspot.com/svg-optimiser).
- Make sure the new icon has the same size/style/line width as the old files.
- Add the icon to the folder and run `npm run icons`.
- After the output file has been created (`public/icons.svg`), You need to manually replace any hex color values (taken from the source files) with `currentColor`. This will allow the icons to easily be colored when used. NB: Check the commit well to ensure you didn't edit any old icons/colors).
- Add the new icon to the `stories/1-Base/3-icons.stories.js` file.
- Publish new version of Deichman-UI.

### Publishing

Make sure to update the [changelog](CHANGELOG.md) if there's any breaking changes.

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
