import React from 'react';
import { storiesOf } from '@storybook/react';
import { withReadme } from 'storybook-readme';
import { withKnobs, boolean } from '@storybook/addon-knobs';

import Text from '../../src/components/Text';
import readme from '../../src/components/Text/Text.md';

const stories = storiesOf('Components', module);

// Add knobs to stories
stories.addDecorator(withKnobs);

stories.add(
  'Text',
  withReadme(readme, () => (
    <div className="sg-container">
      <Text
        highlight={boolean('highlight', true)}
        gray={boolean('gray', false)}
        dropCap={boolean('dropCap', false)}
        strikeThrough={boolean('strikeThrough', false)}
      >
        Lorem ipsum dolor sit, amet consectetur adipisicing elit.
      </Text>
    </div>
  )),
);
