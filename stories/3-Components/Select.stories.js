import React from 'react';
import { storiesOf } from '@storybook/react';
import { withReadme } from 'storybook-readme';
import { withKnobs, boolean, object, text } from '@storybook/addon-knobs';

import Select from '../../src/components/Select';
import readme from '../../src/components/Select/Select.md';

const stories = storiesOf('Components', module);

// Add knobs to stories
stories.addDecorator(withKnobs);

const mockOptions = [
  {
    text: 'Trolldom',
    value: '1',
  },
  {
    text: 'Magi',
    value: '2',
  },
  {
    text: 'Sci-fi',
    value: '3',
  },
  {
    text: 'Overtro',
    value: '4',
  },
  {
    text: 'Skjegg',
    value: '5',
  },
];

stories.add(
  'Select',
  withReadme(readme, () => (
    <div className="sg-container">
      <Select
        name={text('name', 'dataveledning')}
        options={object('options', mockOptions)}
        onChange={() => {}}
        selected="3"
        full={boolean('full', false)}
      />
    </div>
  )),
);
