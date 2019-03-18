import React from 'react';
import { storiesOf } from '@storybook/react';
import { withReadme } from 'storybook-readme';
import { withKnobs, boolean, select, text } from '@storybook/addon-knobs';

import Block from '../../src/components/Block';
import Button from '../../src/components/Button';
import Flex from '../../src/components/Flex';
import Banner from '../../src/components/Banner';
import readme from '../../src/components/Banner/Banner.md';

const stories = storiesOf('Components', module);

// Add knobs to stories
stories.addDecorator(withKnobs);

const typeOptions = {
  notification: 'notification',
  warning: 'warning',
};

stories.add(
  'Banner',
  withReadme(readme, () => (
    <div>
      <Banner
        name={text('name', 'Informasjon')}
        type={select('type', typeOptions, 'notification')}
        centered={boolean('centered', true)}
        showClose={boolean('showClose', true)}
        onClose={() => {}}
      >
        <Block top={4} bottom={4}>
          Vi har for tiden problemer med bookingsystemet vårt. les mer <a href="/">her</a>
        </Block>
      </Banner>
    </div>
  )),
);
