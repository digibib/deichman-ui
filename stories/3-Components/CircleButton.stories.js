import React from 'react';
import { storiesOf } from '@storybook/react';
import { withReadme } from 'storybook-readme';
import { withKnobs, text, boolean } from '@storybook/addon-knobs';

import CircleButton from '../../src/components/CircleButton';
import readme from '../../src/components/CircleButton/CircleButton.md';

const stories = storiesOf('Components', module);

// Add knobs to stories
stories.addDecorator(withKnobs);

stories.add(
  'CircleButton',
  withReadme(readme, () => (
    <div className="sg-container">
      <CircleButton
        label={text('label', 'Super awesome button')}
        icon={text('icon', 'search')}
        inverted={boolean('inverted', false)}
        onClick={() => {}}
      />
    </div>
  )),
);
