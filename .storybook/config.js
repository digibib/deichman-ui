import React from 'react';
import { configure, addDecorator } from '@storybook/react';
import { withOptions } from '@storybook/addon-options';

// Apply custom Storybook config
addDecorator(
  withOptions({
    name: 'Deichman UI',
    url: '#',
  }),
);

// Import global styles
import '../src/index.css';

// Import custom storybook styles
import '../stories/stories.css';

// automatically import all files ending in *.stories.js
const req = require.context('../stories', true, /.stories.js$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
