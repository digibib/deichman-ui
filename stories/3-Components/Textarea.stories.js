import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, number, boolean } from '@storybook/addon-knobs';

import Textarea from '../../src/components/Textarea';

const stories = storiesOf('Components', module);

// Add knobs to stories
stories.addDecorator(withKnobs);

stories.add('Textarea', () => (
  <div className="sg-container">
    <Textarea
      value={text('value', '')}
      placeholder={text('placeholder', 'Fornavn')}
      rows={number('rows', 3)}
      error={text('error', '')}
      onChange={() => {}}
      full={boolean('full', false)}
    />
  </div>
));
