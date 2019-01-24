import React from 'react';
import { storiesOf } from '@storybook/react';
import { withReadme } from 'storybook-readme';
import { withKnobs, select } from '@storybook/addon-knobs';

import Block from '../../src/components/Block';
import Container from '../../src/components/Container';
import readme from '../../src/components/Container/Container.md';

const stories = storiesOf('Layout', module);

// Add knobs to stories
stories.addDecorator(withKnobs);

// Options
const colorOptions = {
  default: 'default',
  gray: 'gray',
  dark: 'dark',
};

const widthOptions = {
  default: 'default',
  narrow: 'narrow',
  wide: 'wide',
};

stories.add(
  'Container',
  withReadme(readme, () => (
    <article className="sg-container">
      <Container
        color={select('color', colorOptions, 'default')}
        width={select('width', widthOptions, 'default')}
      >
        <Block top={5}>
          <h2>Container contents</h2>
        </Block>
        <Block top={2} bottom={5}>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ducimus et dignissimos maiores
            repellat dolorem neque atque mollitia necessitatibus sint quae labore a expedita, id
            eligendi rem enim numquam nihil eos?
          </p>
        </Block>
      </Container>
    </article>
  )),
);
