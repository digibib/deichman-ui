import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, boolean } from '@storybook/addon-knobs';

import Button from '../../src/components/Button';

const stories = storiesOf('Components', module);

// Add knobs to stories
stories.addDecorator(withKnobs);

stories.add('Button', () => (
  <div className="sg-container">
    <Button
      primary={boolean('primary', false)}
      disabled={boolean('disabled', false)}
      onClick={() => {}}
    >
      Button text
    </Button>
  </div>
));
