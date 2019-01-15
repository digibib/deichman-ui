import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';

import Search from '../../src/components/Search';

const stories = storiesOf('Temp', module);

// Add knobs to stories
stories.addDecorator(withKnobs);

stories.add('Search', () => <Search />);
