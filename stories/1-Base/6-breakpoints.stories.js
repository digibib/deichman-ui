import React from 'react';
import { storiesOf } from '@storybook/react';
import { withReadme } from 'storybook-readme';
import { withKnobs } from '@storybook/addon-knobs';

import Overflow from '../../src/components/Overflow';
import Block from '../../src/components/Block';
import TagList from '../../src/components/TagList';
import readme from '../../src/components/Overflow/Overflow.md';

const stories = storiesOf('Base', module);

// Add knobs to stories
stories.addDecorator(withKnobs);

const mockTags = Array(50).fill({ text: 'Tag text' });

stories.add(
  'Breakpoints',
  withReadme(readme, () => (
    <article className="sg-container">
      <p className="sg-heading">Breakpoints</p>

      <Block top={8}>
        <h4>Pre-defined breakpoints:</h4>
      </Block>

      <Block top={6}>
        <ul>
          <li>test</li>
          <li>test</li>
          <li>test</li>
        </ul>
      </Block>

      <Block top={6}>
        <p>See the "Readme" tab below for details</p>
      </Block>
    </article>
  )),
);
