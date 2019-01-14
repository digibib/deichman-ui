import React from 'react';
import { storiesOf } from '@storybook/react';
import { withReadme } from 'storybook-readme';
import { withKnobs, text, number, boolean } from '@storybook/addon-knobs';

import Icon from '../../src/components/Icon';
import readme from '../../src/components/Icon/Icon.md';

const stories = storiesOf('Components', module);

// Add knobs to stories
stories.addDecorator(withKnobs);

stories.add(
  'Icon',
  withReadme(readme, () => (
    <div className="sg-container">
      <Icon
        icon={text('icon', 'book')}
        size={number('size', 24)}
        full={boolean('full', false)}
        inverted={boolean('inverted', false)}
      />
    </div>
  )),
);
