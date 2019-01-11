import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, object, boolean } from '@storybook/addon-knobs';

import TagList from '../../src/components/TagList';

const stories = storiesOf('Components', module);

// Add knobs to stories
stories.addDecorator(withKnobs);

const mockTags = [
  {
    text: 'Trolldom',
    link: '#',
  },
  {
    text: 'Magi',
    link: '#',
  },
  {
    text: 'Sci-fi',
    link: '#',
  },
  {
    text: 'Overtro',
    link: '#',
  },
  {
    text: 'Skjegg',
    link: '#',
  },
];

stories.add('TagList', () => (
  <div className="sg-container">
    <TagList limited={boolean('limited', false)} tags={object('tags', mockTags)} />
  </div>
));
