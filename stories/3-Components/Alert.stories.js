import React from 'react';
import { storiesOf } from '@storybook/react';
import { withReadme } from 'storybook-readme';
import { withKnobs, boolean, select, text } from '@storybook/addon-knobs';

import Block from '../../src/components/Block';
import Alert from '../../src/components/Alert';
import readme from '../../src/components/Alert/Alert.md';

const stories = storiesOf('Components', module);

// Add knobs to stories
stories.addDecorator(withKnobs);

const typeOptions = {
  notification: 'notification',
  warning: 'warning',
};

stories.add(
  'Alert',
  withReadme(readme, () => (
    <div>
      <Alert
        type={select('type', typeOptions, 'warning')}
        centered={boolean('centered', false)}
        showClose={boolean('showClose', true)}
        closeLabel={text('closeLabel', 'Lukk')}
        onClose={() => {}}
      >
        <Block top={4} bottom={4}>
          <strong>Hitchhiker's Guide to the Galaxy</strong> av Douglas Adams har forfalt. <a href="/">Gå til mine lån</a>.
        </Block>
      </Alert>
    </div>
  )),
);
