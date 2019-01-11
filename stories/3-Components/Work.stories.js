import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, object, select, boolean } from '@storybook/addon-knobs';

import Work from '../../src/components/Work';

const stories = storiesOf('Components', module);

// Add knobs to stories
stories.addDecorator(withKnobs);

// Data prop
const workDefaults = {
  id: '123',
  title: 'Rendezvous with Rama',
  image: 'https://i.pinimg.com/originals/db/ce/f0/dbcef06ebc463f5c568e15aaf00753bb.jpg',
  media: 'book',
  category: 'Sci-fi',
  languages: ['en', 'no'],
  selectedLanguage: 'no',
  author: {
    name: 'Arthur C. Clarke',
    id: '123',
  },
};

// Size options
const sizeOptions = {
  small: 'small',
  medium: 'medium',
  large: 'large',
};

stories.add('Work', () => (
  <div className="sg-container">
    <Work
      data={object('data', workDefaults)}
      size={select('size', sizeOptions, 'small')}
      isRecommended={boolean('isRecommended', false)}
    />
  </div>
));
