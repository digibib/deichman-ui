import React from 'react';
import { storiesOf } from '@storybook/react';
import { withReadme } from 'storybook-readme';
import { withKnobs, boolean } from '@storybook/addon-knobs';

import Loader from '../../src/components/Loader';
import readme from '../../src/components/Loader/Loader.md';

const stories = storiesOf('Components', module);

// Add knobs to stories
stories.addDecorator(withKnobs);

stories.add(
  'Loader',
  withReadme(readme, () => (
    <div>
      <div className="sg-container">
        <Loader />
      </div>
    </div>
  )),
);
