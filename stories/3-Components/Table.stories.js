import React from 'react';
import { storiesOf } from '@storybook/react';
import { withReadme } from 'storybook-readme';
import { withKnobs, boolean } from '@storybook/addon-knobs';

import Table from '../../src/components/Table';
import readme from '../../src/components/Table/Table.md';

const stories = storiesOf('Components', module);

// Add knobs to stories
stories.addDecorator(withKnobs);

stories.add(
  'Table',
  withReadme(readme, () => (
    <div className="sg-container">
      <Table
        full={boolean('full', true)}
        dark={boolean('dark', false)}
        condensed={boolean('condensed', false)}
      >
        <Table.Head>
          <Table.Row>
            <Table.Cell isHeadCell>Pages</Table.Cell>
            <Table.Cell isHeadCell>Title</Table.Cell>
            <Table.Cell isHeadCell>Author</Table.Cell>
          </Table.Row>
        </Table.Head>
        <Table.Body>
          <Table.Row>
            <Table.Cell>133-155</Table.Cell>
            <Table.Cell>The Body Snatcher</Table.Cell>
            <Table.Cell>
              <a href="#">Robert Louis Stevenson</a>
            </Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>186-205</Table.Cell>
            <Table.Cell>The Tell-Tale Heart</Table.Cell>
            <Table.Cell>
              <a href="#">Edgar Allan Poe</a>
            </Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>269-291</Table.Cell>
            <Table.Cell>The Yellow Wallpaper</Table.Cell>
            <Table.Cell>
              <a href="#">Charlotte Perkins Gilman</a>
            </Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
    </div>
  )),
);
