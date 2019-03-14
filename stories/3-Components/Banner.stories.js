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

const sizeOptions = {
  small: 'small',
  large: 'large',
};

const typeOptions = {
  notification: 'notification',
  warning: 'warning',
};

stories.add(
  'Banner (simple)',
  withReadme(readme, () => (
    <div>
      <Banner
        name={text('name', 'Informasjon')}
        type={select('type', typeOptions, 'notification')}
        centered={boolean('centered', true)}
        showClose={boolean('showClose', true)}
      >
        <Block top={4} bottom={4}>
          Vi har for tiden problemer med bookingsystemet vårt. les mer <a href="/">her</a>
        </Block>
      </Banner>
    </div>
  )),
);

stories.add(
  'Banner (complex)',
  withReadme(readme, () => (
    <div>
      <Banner
        name={text('name', 'Informasjon')}
        type={select('type', typeOptions, 'notification')}
        showClose={boolean('showClose', false)}
      >
        <Block top={6}>
          <h3>Dine data er ditt valg</h3>
        </Block>
        <Block top={4}>
          <p style={{ maxWidth: '700px' }}>
            Deichman dummy tekst holder deg oppdatert på lokale nyheter. Vi benytter brukerdata for
            å vise deg godt innhold på egne og eksterne kanaler, relevante annonser, og for å gi deg
            en best mulig tjeneste.
          </p>
        </Block>
        <Block top={5} bottom={6}>
          <Flex>
            <Button primary>Jeg forstår</Button>
            <Block left={6}>
              <a href="/">Mer informasjon</a>
            </Block>
          </Flex>
        </Block>
      </Banner>
    </div>
  )),
);
