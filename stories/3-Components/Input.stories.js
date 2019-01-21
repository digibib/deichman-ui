import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, boolean } from '@storybook/addon-knobs';

import Input from '../../src/components/Input';

const stories = storiesOf('Components', module);

// Add knobs to stories
stories.addDecorator(withKnobs);

stories.add('Input', () => (
  <div className="sg-container">
    <Input
      value={text('value', '')}
      placeholder={text('placeholder', 'Fornavn')}
      error={text('error', '')}
      onChange={() => {}}
      showClear={boolean('showClear', false)}
      full={boolean('full', false)}
    />
  </div>
));
