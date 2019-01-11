import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, object } from '@storybook/addon-knobs';

import WorkList from '../../src/components/WorkList';

const stories = storiesOf('Components', module);

// Add knobs to stories
stories.addDecorator(withKnobs);

// Data prop
// Data prop
const listLabel = 'items';
const listDefaults = [
  {
    data: {
      id: '123',
      title: 'Contact',
      image: 'https://images.gr-assets.com/books/1408792653l/61666.jpg',
      media: 'book',
      category: 'Sci-fi',
      languages: ['en', 'no'],
      selectedLanguage: 'no',
      author: {
        name: 'Carl Sagan',
        id: '123',
      },
    },
    isRecommended: false,
  },
  {
    data: {
      id: '234',
      title: 'Aurora',
      image: 'https://images.gr-assets.com/books/1436300570l/23197269.jpg',
      media: 'book',
      category: 'Sci-fi',
      languages: ['en', 'no'],
      selectedLanguage: 'no',
      author: {
        name: 'Kim Stanley Robinson',
        id: '123',
      },
    },
    isRecommended: false,
  },
  {
    data: {
      id: '345',
      title: 'Hyperion',
      image: 'https://images.gr-assets.com/books/1405546838l/77566.jpg',
      media: 'book',
      category: 'Sci-fi',
      languages: ['en', 'no'],
      selectedLanguage: 'no',
      author: {
        name: 'Dan Simmons',
        id: '123',
      },
    },
    isRecommended: true,
  },
  {
    data: {
      id: '456',
      title: 'Station Eleven',
      image:
        'https://www.bookscrolling.com/wp-content/uploads/2017/11/Station-Eleven-by-Emily-St.-John-Mandel.jpg',
      media: 'book',
      category: 'Sci-fi',
      languages: ['en', 'no'],
      selectedLanguage: 'no',
      author: {
        name: 'Emily St. John Mandel',
        id: '123',
      },
    },
    isRecommended: true,
  },
];

stories.add('WorkList', () => (
  <div className="sg-container">
    <WorkList items={object(listLabel, listDefaults)} />
  </div>
));
