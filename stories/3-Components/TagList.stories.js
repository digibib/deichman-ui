import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, boolean } from '@storybook/addon-knobs';

import Tag from '../../src/components/Tag';
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
  {
    text: 'Troll',
    link: '#',
  },
  {
    text: 'Orker',
    link: '#',
  },
  {
    text: 'Hobbiter',
    link: '#',
  },
  {
    text: 'Sauron',
    link: '#',
  },
  {
    text: 'Saruman',
    link: '#',
  },
  {
    text: 'Alv',
    link: '#',
  },
];

stories.add('TagList', () => (
  <div className="sg-container">
    <TagList limited={boolean('limited', false)} expanded={boolean('expanded', false)}>
      {mockTags.map(tag => (
        <TagList.Item key={tag.text}>
          <Tag text={tag.text} active showClear onClear={() => {}} />
        </TagList.Item>
      ))}
    </TagList>
  </div>
));
