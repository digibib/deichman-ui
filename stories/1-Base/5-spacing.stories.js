import React from 'react';
import { storiesOf } from '@storybook/react';
import { withReadme } from 'storybook-readme';

import { Block } from '../../src/index';
import readme from './5-spacing.stories.md';

const stories = storiesOf('Base', module);

stories.add(
  'Spacing',
  withReadme(readme, () => (
    <article className="sg-container">
      <p className="sg-heading">Spacing</p>

      <Block top={8}>
        <div className="sg-spacing-wrapper">
          <Block top={1} />
        </div>
        <div className="sg-spacing-wrapper">
          <Block top={2} />
        </div>
        <div className="sg-spacing-wrapper">
          <Block top={3} />
        </div>
        <div className="sg-spacing-wrapper">
          <Block top={4} />
        </div>
        <div className="sg-spacing-wrapper">
          <Block top={5} />
        </div>
        <div className="sg-spacing-wrapper">
          <Block top={6} />
        </div>
        <div className="sg-spacing-wrapper">
          <Block top={7} />
        </div>
        <div className="sg-spacing-wrapper">
          <Block top={8} />
        </div>
        <div className="sg-spacing-wrapper">
          <Block top={9} />
        </div>
      </Block>
    </article>
  )),
);
