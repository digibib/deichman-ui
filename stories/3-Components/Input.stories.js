import React from 'react';
import { storiesOf } from '@storybook/react';
import { withReadme } from 'storybook-readme';
import { withKnobs, text, boolean } from '@storybook/addon-knobs';

import Input from '../../src/components/Input';
import readme from '../../src/components/Input/Input.md';

const stories = storiesOf('Components', module);

// Add knobs to stories
stories.addDecorator(withKnobs);

stories.add(
  'Input',
  withReadme(readme, () => (
    <div className="sg-container">
      <Input
        value={text('value', '')}
        name={text('name', 'Fornavn')}
        placeholder={text('placeholder', 'Fornavn')}
        label={text('label', '')}
        error={text('error', '')}
        onChange={() => {}}
        showClear={boolean('showClear', false)}
        full={boolean('full', false)}
      />
    </div>
  )),
);
