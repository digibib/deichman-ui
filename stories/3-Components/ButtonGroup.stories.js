import React from 'react';
import { storiesOf } from '@storybook/react';
import { withReadme } from 'storybook-readme';
import { withKnobs } from '@storybook/addon-knobs';

import ButtonGroup from '../../src/components/ButtonGroup';
import readme from '../../src/components/ButtonGroup/ButtonGroup.md';

const stories = storiesOf('Components', module);

// Add knobs to stories
stories.addDecorator(withKnobs);

// Examples
const items = [
  { text: 'Spill', value: 'spill', icon: 'game' },
  { text: 'Bok', value: 'bok', icon: 'book' },
  { text: 'Lydbok', value: 'lydbok', icon: 'soundbook' },
];

stories.add(
  'ButtonGroup',
  withReadme(readme, () => (
    <div className="sg-container">
      <ButtonGroup groupId="uniqueid" items={items} checked={''} onChange={() => {}} />
    </div>
  )),
);
