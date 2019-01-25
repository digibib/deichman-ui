import React from 'react';
import { storiesOf } from '@storybook/react';
import { withReadme } from 'storybook-readme';
import { withKnobs, boolean } from '@storybook/addon-knobs';

import Block from '../../src/components/Block';
import Modal from '../../src/components/Modal';
import readme from '../../src/components/Modal/Modal.md';

const stories = storiesOf('Components', module);

// Add knobs to stories
stories.addDecorator(withKnobs);

stories.add(
  'Modal',
  withReadme(readme, () => (
    <div className="sg-container">
      <Modal visible={boolean('visible', false)}>
        <h3>Modal contents</h3>
        <Block top={3}>
          <p>Example modal with `overlay` component.</p>
        </Block>
      </Modal>
    </div>
  )),
);
