import React from 'react';
import { storiesOf } from '@storybook/react';
import { withReadme } from 'storybook-readme';
import { withKnobs, text, boolean } from '@storybook/addon-knobs';

import Radio from '../../src/components/Radio';
import readme from '../../src/components/Radio/Radio.md';

const stories = storiesOf('Components', module);

// Add knobs to stories
stories.addDecorator(withKnobs);

stories.add(
  'Radio',
  withReadme(readme, () => (
    <div className="sg-container">
      <Radio
        name={text('name', 'something')}
        label={text('label', 'Radio label')}
        value={text('value', 'value')}
        checked={boolean('checked', false)}
        full={boolean('full', false)}
        disabled={boolean('disabled', false)}
        onChange={() => {}}
      />
    </div>
  )),
);
