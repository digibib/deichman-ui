import React from 'react';
import { storiesOf } from '@storybook/react';
import { withReadme } from 'storybook-readme';
import { withKnobs, select, boolean } from '@storybook/addon-knobs';

import Sorter from '../../src/components/Sorter';
import readme from '../../src/components/Sorter/Sorter.md';

const stories = storiesOf('Components', module);

// Add knobs to stories
stories.addDecorator(withKnobs);

const directionOptions = ['none', 'asc', 'des'];

stories.add(
  'Sorter',
  withReadme(readme, () => (
    <div className="sg-container">
      <Sorter
        direction={select('direction', directionOptions)}
        active={boolean('active', true)}
        onClick={() => {}}
      >
        Author
      </Sorter>
    </div>
  )),
);
