import React from 'react';
import { storiesOf } from '@storybook/react';
import { withReadme } from 'storybook-readme';
import { withKnobs } from '@storybook/addon-knobs';

import Block from '../../src/components/Block';
import Breakpoint from '../../src/components/Breakpoint';
import readme from '../../src/components/Breakpoint/Breakpoint.md';

const stories = storiesOf('Utilities', module);

// Add knobs to stories
stories.addDecorator(withKnobs);

stories.add(
  'Breakpoint',
  withReadme(readme, () => (
    <article className="sg-container">
      <Breakpoint small>
        <h4>Current breakpoint: small</h4>
      </Breakpoint>
      <Breakpoint medium>
        <h4>Current breakpoint: medium</h4>
      </Breakpoint>
      <Breakpoint large>
        <h4>Current breakpoint: large</h4>
      </Breakpoint>
      <Breakpoint xlarge>
        <h4>Current breakpoint: xlarge</h4>
      </Breakpoint>

      <Block top={6}>
        <Breakpoint small up>
          <p>Visible from small and up</p>
        </Breakpoint>
        <Breakpoint medium up>
          <p>Visible from medium and up</p>
        </Breakpoint>
        <Breakpoint large up>
          <p>Visible from large and up</p>
        </Breakpoint>

        <Breakpoint small down>
          <p>Visible from small and down</p>
        </Breakpoint>
        <Breakpoint medium down>
          <p>Visible from medium and down</p>
        </Breakpoint>
        <Breakpoint large down>
          <p>Visible from large and down</p>
        </Breakpoint>
      </Block>
    </article>
  )),
);
