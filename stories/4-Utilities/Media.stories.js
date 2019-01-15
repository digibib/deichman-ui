import React from 'react';
import { storiesOf } from '@storybook/react';
import { withReadme } from 'storybook-readme';
import { withKnobs } from '@storybook/addon-knobs';

import Media from '../../src/components/Media';
import readme from '../../src/components/Media/Media.md';

const stories = storiesOf('Utilities', module);

// Add knobs to stories
stories.addDecorator(withKnobs);

const mockTags = Array(50).fill({ text: 'Tag text' });

stories.add(
  'Media',
  withReadme(readme, () => (
    <article className="sg-container">
      <Media>
        <p>Visible on mobile screens</p>
      </Media>
      <Media>
        <p>Visible on medium screens</p>
      </Media>
      <Media>
        <p>Visible on large screens</p>
      </Media>
    </article>
  )),
);
