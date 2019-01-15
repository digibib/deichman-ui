import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';

import Header from '../../src/components/Header';

const stories = storiesOf('Temp', module);

// Add knobs to stories
stories.addDecorator(withKnobs);

const mockNav = [
  {
    url: '#',
    text: 'Bøker',
  },
  {
    url: '#',
    text: 'Tegneserie',
  },
  {
    url: '#',
    text: 'Musikk',
  },
  {
    url: '#',
    text: 'Film',
  },
  {
    url: '#',
    text: 'Spill',
  },
  {
    url: '#',
    text: 'Tjenester',
  },
  {
    url: '#',
    text: 'Hva skjer',
  },
  {
    url: '#',
    text: 'Bibliotekene',
  },
];

stories.add('Header', () => <Header navItems={mockNav} />);
