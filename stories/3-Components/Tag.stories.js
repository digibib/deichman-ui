import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, boolean } from '@storybook/addon-knobs';

import Tag from '../../src/components/Tag';

const stories = storiesOf('Components', module);

// Add knobs to stories
stories.addDecorator(withKnobs);

stories.add('Tag', () => (
  <div className="sg-container">
    <Tag
      text={text('text', 'Trolldom')}
      link={text('link', '#')}
      active={boolean('active', false)}
      showClear={boolean('showClear', false)}
    />
  </div>
));
