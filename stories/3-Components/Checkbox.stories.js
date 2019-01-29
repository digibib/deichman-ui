import React from 'react';
import { storiesOf } from '@storybook/react';
import { withReadme } from 'storybook-readme';
import { withKnobs, text, boolean } from '@storybook/addon-knobs';

import Checkbox from '../../src/components/Checkbox';
import readme from '../../src/components/Checkbox/Checkbox.md';

const stories = storiesOf('Components', module);

// Add knobs to stories
stories.addDecorator(withKnobs);

stories.add(
  'Checkbox',
  withReadme(readme, () => (
    <div className="sg-container">
      <Checkbox
        name={text('name', 'something')}
        label={text('label', 'Checkbox label')}
        checked={boolean('checked', false)}
        full={boolean('full', false)}
        disabled={boolean('disabled', false)}
        onChange={() => {}}
      />
    </div>
  )),
);
