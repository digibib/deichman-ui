import React from 'react';
import { configure, addDecorator, addParameters } from '@storybook/react';
import { create } from '@storybook/theming';
import outlinewatcher from '../src/helpers/outlineWatcher';
import { addReadme } from 'storybook-readme';

import IconLoader from '../src/components/IconLoader';

// Apply custom Storybook config
addParameters({
  options: {
    theme: create({
      base: 'light',
      brandTitle: 'Deichman UI',
      brandUrl: '#',
      brandImage: 'https://cdn.jsdelivr.net/npm/@digibib/deichman-ui/dist/logo-styleguide.svg',
    }),
  },
});

// Make SVG Icons available to all stories
addDecorator(story => (
  <div>
    <IconLoader />
    {story()}
  </div>
));

// Add readme to all stories
addDecorator(addReadme);

// Import global styles
import '../src/index.css';

// Import custom storybook styles
import '../stories/stories.css';

outlinewatcher();

// automatically import all files ending in *.stories.js
const req = require.context('../stories', true, /.stories.js$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
