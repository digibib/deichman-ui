import React from 'react';
import { storiesOf } from '@storybook/react';
import { withReadme } from 'storybook-readme';
import { withKnobs } from '@storybook/addon-knobs';

import Overflow from '../../src/components/Overflow';
import Block from '../../src/components/Block';
import Tag from '../../src/components/Tag';
import TagList from '../../src/components/TagList';
import readme from '../../src/components/Overflow/Overflow.md';

const stories = storiesOf('Utilities', module);

// Add knobs to stories
stories.addDecorator(withKnobs);

const mockTags = Array(50).fill({ text: 'Tag text' });

stories.add(
  'Overflow',
  withReadme(readme, () => (
    <article className="sg-container">
      <Overflow>
        <Block top={1} bottom={1} left={1} right={1}>
          <ul style={{ display: 'flex' }}>
            {mockTags.map((tag, i) => (
              <li key={i} style={{ marginRight: '10px' }}>
                <Tag text={tag.text} />
              </li>
            ))}
          </ul>
        </Block>
      </Overflow>
    </article>
  )),
);
