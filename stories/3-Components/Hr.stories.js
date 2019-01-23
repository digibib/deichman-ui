import React from 'react';
import { storiesOf } from '@storybook/react';
import { withReadme } from 'storybook-readme';
import { withKnobs, select } from '@storybook/addon-knobs';

import Hr from '../../src/components/Hr';
import readme from '../../src/components/Hr/Hr.md';

const stories = storiesOf('Components', module);

// Add knobs to stories
stories.addDecorator(withKnobs);

// Size options
const colorOptions = {
  default: 'default',
  dark: 'dark',
  light: 'light',
};

stories.add(
  'Hr',
  withReadme(readme, () => (
    <div className="sg-container">
      <Hr color={select('color', colorOptions, 'default')} />
    </div>
  )),
);
