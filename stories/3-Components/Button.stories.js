import React from 'react';
import { storiesOf } from '@storybook/react';
import { withReadme } from 'storybook-readme';
import { withKnobs, boolean, text } from '@storybook/addon-knobs';

import Button from '../../src/components/Button';
import readme from '../../src/components/Button/Button.md';

const stories = storiesOf('Components', module);

// Add knobs to stories
stories.addDecorator(withKnobs);

stories.add(
  'Button',
  withReadme(readme, () => (
    <div className="sg-container">
      <Button
        primary={boolean('primary', false)}
        disabled={boolean('disabled', false)}
        loading={boolean('loading', false)}
        small={boolean('small', false)}
        condensed={boolean('condensed', false)}
        full={boolean('full', false)}
        label={text('label', '')}
        icon={text('icon', '')}
        onClick={() => {}}
      >
        Button text
      </Button>
    </div>
  )),
);
