import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text } from '@storybook/addon-knobs';

import Input from '../../src/components/Input';
import Block from '../../src/components/Block';

const stories = storiesOf('Components', module);

// Add knobs to stories
stories.addDecorator(withKnobs);

stories.add('Input', () => (
  <div className="sg-container">
    <Input
      value={text('value', '')}
      placeholder={text('placeholder', 'Fornavn')}
      onChange={() => {}}
    />
  </div>
));
