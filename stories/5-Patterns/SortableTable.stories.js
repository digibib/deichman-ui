import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';

import { useTableSort } from '../../src/helpers/hooks';

import Container from '../../src/components/Container';
import Block from '../../src/components/Block';
import Sorter from '../../src/components/Sorter';
import Table from '../../src/components/Table';

const stories = storiesOf('Patterns', module);

// Add knobs to stories
stories.addDecorator(withKnobs);

const mockData = [
  {
    name: 'Bjerke',
    shelf: 'BI 781.64092 Pollard,R.',
    status: '1 av 1 ledige',
  },
  {
    name: 'Hovedbiblioteket',
    shelf: 'BI 234.64092 Pollard,R.',
    status: '0 av 1 ledige',
  },
  {
    name: 'Majorstuen',
    shelf: 'BI 456.64092 Pollard,R.',
    status: '3 av 5 ledige',
  },
  {
    name: 'Tøyen',
    shelf: 'BI 123.64092 Pollard,R.',
    status: '2 av 2 ledige',
  },
  {
    name: 'Bøler',
    shelf: 'BI 677.64092 Pollard,R.',
    status: '0 av 1 ledige',
  },
  {
    name: 'Grünerløkka',
    shelf: 'BI 890.64092 Pollard,R.',
    status: '1 av 1 ledige',
  },
];

const SortableTable = () => {
  const { sortedData, sortKey, direction, handleSort } = useTableSort(mockData, 'name');

  return (
    <div className="sg-container">
      <Container>
        <Block top={5}>
          <Table full responsive>
            <Table.Head>
              <Table.Row>
                <Table.Cell isHeadCell>
                  <Sorter
                    active={sortKey === 'name'}
                    direction={direction}
                    onClick={() => handleSort('name')}
                  >
                    Filial
                  </Sorter>
                </Table.Cell>
                <Table.Cell isHeadCell>
                  <Sorter
                    active={sortKey === 'shelf'}
                    direction={direction}
                    onClick={() => handleSort('shelf')}
                  >
                    Hylleplass
                  </Sorter>
                </Table.Cell>
                <Table.Cell isHeadCell>
                  <Sorter
                    active={sortKey === 'status'}
                    direction={direction}
                    onClick={() => handleSort('status')}
                  >
                    Status
                  </Sorter>
                </Table.Cell>
              </Table.Row>
            </Table.Head>
            <Table.Body>
              {sortedData.map(row => (
                <Table.Row key={row.name}>
                  <Table.Cell label="Filial">{row.name}</Table.Cell>
                  <Table.Cell label="Hylleplass">{row.shelf}</Table.Cell>
                  <Table.Cell label="Status">{row.status}</Table.Cell>
                </Table.Row>
              ))}
            </Table.Body>
          </Table>
        </Block>
      </Container>
    </div>
  );
};

stories.add('Sortable Table', () => <SortableTable />);
