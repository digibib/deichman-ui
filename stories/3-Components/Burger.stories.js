import React from 'react';
import { storiesOf } from '@storybook/react';
import { withReadme } from 'storybook-readme';
import { withKnobs, boolean } from '@storybook/addon-knobs';

import Burger from '../../src/components/Burger';
import readme from '../../src/components/Burger/Burger.md';

const stories = storiesOf('Components', module);

// Add knobs to stories
stories.addDecorator(withKnobs);

stories.add(
  'Burger',
  withReadme(readme, () => (
    <div>

    <div className="sg-container" style={{ paddingTop: '100px' }}>
      <Burger open={boolean('open', false)} />
    </div>
    </div>
  )),
);
