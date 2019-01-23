import React from 'react';
import { storiesOf } from '@storybook/react';
import { withReadme } from 'storybook-readme';
import { withKnobs, boolean } from '@storybook/addon-knobs';

import Overlay from '../../src/components/Overlay';
import readme from '../../src/components/Overlay/Overlay.md';

const stories = storiesOf('Components', module);

// Add knobs to stories
stories.addDecorator(withKnobs);

stories.add(
  'Overlay',
  withReadme(readme, () => (
    <div className="sg-container">
      <Overlay visible={boolean('visible', false)} />
    </div>
  )),
);
