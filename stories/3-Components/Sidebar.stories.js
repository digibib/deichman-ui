import React from 'react';
import { storiesOf } from '@storybook/react';
import { withReadme } from 'storybook-readme';
import { withKnobs, select, boolean } from '@storybook/addon-knobs';

import Block from '../../src/components/Block';
import Button from '../../src/components/Button';
import Sidebar from '../../src/components/Sidebar';
import readme from '../../src/components/Sidebar/Sidebar.md';

const stories = storiesOf('Components', module);

// Add knobs to stories
stories.addDecorator(withKnobs);

const positionOptions = {
  left: 'left (default)',
  right: 'right',
};

stories.add(
  'Sidebar',
  withReadme(readme, () => (
    <div>
      <Sidebar open={boolean('open', false)} position={select('position', positionOptions, 'left')}>
        <Block top={6} left={6} right={6}>
          <h1 className="h3">Sidebar title</h1>
          <Block top={2}>
            <p>
              Sidebar contents. For a complete example with Sidebar, Overlay and the Menu button,
              check out the{' '}
              <a href="/?selectedKind=Patterns&selectedStory=Navigation">navigation pattern</a>
            </p>
          </Block>
          <Block top={4}>
            <Button full primary>
              Sidebar action
            </Button>
          </Block>
        </Block>
      </Sidebar>
    </div>
  )),
);
