import React from 'react';
import { storiesOf } from '@storybook/react';
import { withReadme } from 'storybook-readme';
import { withKnobs, boolean, text } from '@storybook/addon-knobs';

import Accordion from '../../src/components/Accordion';
import readme from '../../src/components/Accordion/Accordion.md';

const stories = storiesOf('Components', module);

// Add knobs to stories
stories.addDecorator(withKnobs);

stories.add(
  'Accordion',
  withReadme(readme, () => (
    <div className="sg-container">
      <Accordion
        name={text('name', 'dataveledning')}
        text={text('text', 'Les om dataveiledning')}
        openByDefault={boolean('openByDefault', false)}
        showDividers={boolean('showDividers', false)}
        large={boolean('large', false)}
        small={boolean('small', false)}
      >
        <p>
          Gruer du deg for å bruke data? Det er vanskelig å stå utenfor den digitale utvikling
          samfunnet er inne i. Vi kan hjelpe deg med å komme i gang og finne utstyr som passer for
          deg. Vi møtes over en kopp kaffe for å snakke om hvordan du enkelt kan få mye glede og
          nytte av de nye digitale hjelpemidlene. Om du er nybegynner: Vi har tid og svarer på de
          dummeste spørsmål. Velkommen til hyggelig prat med erfarne folk på din egen alder.
        </p>
      </Accordion>
    </div>
  )),
);
