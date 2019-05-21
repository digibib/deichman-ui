import React from 'react';
import { storiesOf } from '@storybook/react';
import { withReadme } from 'storybook-readme';
import { withKnobs, text } from '@storybook/addon-knobs';

import Badge from '../../src/components/Badge';
import readme from '../../src/components/Badge/Badge.md';

const stories = storiesOf('Components', module);

// Add knobs to stories
stories.addDecorator(withKnobs);

stories.add(
  'Badge',
  withReadme(readme, () => (
    <div className="sg-container">
      <Badge text={text('text', 'GRORUDDALEN LITTERATURFESTIVAL')} theme={text('theme', 'ok-1')} />
    </div>
  )),
);
