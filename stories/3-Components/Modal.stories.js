import React from 'react';
import { storiesOf } from '@storybook/react';
import { withReadme } from 'storybook-readme';
import { withKnobs, boolean, select, text } from '@storybook/addon-knobs';

import Block from '../../src/components/Block';
import Modal from '../../src/components/Modal';
import readme from '../../src/components/Modal/Modal.md';

const stories = storiesOf('Components', module);

// Add knobs to stories
stories.addDecorator(withKnobs);

// Size prop
const sizeOptions = {
  default: 'default',
  narrow: 'narrow',
  medium: 'medium',
  wide: 'wide',
  full: 'full',
};

stories.add(
  'Modal',
  withReadme(readme, () => (
    <div className="sg-container">
      <Modal
        visible={boolean('visible', false)}
        showClose={boolean('showClose', false)}
        width={select('width', sizeOptions, 'default')}
        sizeW={text('sizeW', '0px')}
      >
        <h3>Modal contents</h3>
        <Block top={3}>
          <p>Example modal with `overlay` component.</p>
        </Block>
        <Block top={3}>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, recusandae error? Nam
            aspernatur eos reiciendis, iusto cumque sequi perspiciatis dignissimos illo cupiditate.
            In quae suscipit culpa, est amet aut nihil?
          </p>
        </Block>
        <Block top={3}>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, recusandae error? Nam
            aspernatur eos reiciendis, iusto cumque sequi perspiciatis dignissimos illo cupiditate.
            In quae suscipit culpa, est amet aut nihil?
          </p>
        </Block>
      </Modal>
    </div>
  )),
);
