import React from 'react';
import { storiesOf } from '@storybook/react';
import { withReadme } from 'storybook-readme';
import { withKnobs, select } from '@storybook/addon-knobs';

import Block from '../../src/components/Block';
import Page from '../../src/components/Page';
import readme from '../../src/components/Page/Page.md';

const stories = storiesOf('Layout', module);

// Add knobs to stories
stories.addDecorator(withKnobs);

stories.add(
  'Page',
  withReadme(readme, () => (
    <article className="sg-container">
      <p className="sg-heading">Page</p>
      <Block top={8}>
        <Page>Page contents</Page>
      </Block>
    </article>
  )),
);
