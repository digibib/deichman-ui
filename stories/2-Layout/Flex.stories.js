import React from 'react';
import { storiesOf } from '@storybook/react';
import { withReadme } from 'storybook-readme';
import { withKnobs, select, boolean } from '@storybook/addon-knobs';

import Flex from '../../src/components/Flex';
import readme from '../../src/components/Flex/Flex.md';

const stories = storiesOf('Layout', module);

// Add knobs to stories
stories.addDecorator(withKnobs);

// Size prop
const alignOptions = {
  default: false,
  center: 'center',
  start: 'start',
  end: 'end',
};

const justifyOptions = {
  default: false,
  'space-between': 'space-between',
  'space-around': 'space-around',
  start: 'start',
  end: 'end',
};

stories.add(
  'Flex',
  withReadme(readme, () => (
    <article className="sg-container">
      <div className="sg-spacing-wrapper-simple">
        <Flex
          align={select('align', alignOptions, 'default')}
          justify={select('justify', justifyOptions, 'default')}
          wrap={boolean('wrap', false)}
        >
          <div className="sg-flex-example-box-1" />
          <div className="sg-flex-example-box-2" />
          <div className="sg-flex-example-box-3" />
          <div className="sg-flex-example-box-2" />
          <div className="sg-flex-example-box-1" />
        </Flex>
      </div>
    </article>
  )),
);
