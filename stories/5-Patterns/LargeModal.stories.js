import React, { Component } from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, boolean } from '@storybook/addon-knobs';

import Container from '../../src/components/Container';
import Button from '../../src/components/Button';
import Block from '../../src/components/Block';
import Modal from '../../src/components/Modal';
import Table from '../../src/components/Table';
import Grid, { GridItem } from '../../src/components/Grid';

const stories = storiesOf('Patterns', module);

// Add knobs to stories
stories.addDecorator(withKnobs);

class LargeModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
    };

    this.onToggle = this.onToggle.bind(this);
  }

  onToggle(e) {
    e.preventDefault();
    this.setState({
      isOpen: !this.state.isOpen,
    });
  }

  render() {
    const { isOpen } = this.state;

    return (
      <Container>
        <Block top={6}>
          <h1>Welcome!</h1>
        </Block>
        <Block top={4}>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo, quo rerum! Temporibus,
            modi dolore corrupti at ipsam et sed aut praesentium blanditiis repellat, suscipit
            laudantium ad. Rem minus perferendis ipsa.
          </p>
        </Block>
        <Block top={5}>
          <a href="#details" onClick={this.onToggle}>
            Show details
          </a>
        </Block>
        <Modal name="Details" visible={isOpen} onClose={this.onToggle} width="wide" showClose>
          <Grid>
            <GridItem medium="two-fifths">
              <Block top={5}>
                <Table condensed vertical responsive>
                  <Table.Body>
                    <Table.Row>
                      <Table.Cell isHeadCell>Oversetter:</Table.Cell>
                      <Table.Cell>
                        <a href="/">Torsein Bugge Høverstad</a>
                      </Table.Cell>
                    </Table.Row>
                    <Table.Row>
                      <Table.Cell isHeadCell>Sidetall:</Table.Cell>
                      <Table.Cell>646</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                      <Table.Cell isHeadCell>Utgiver:</Table.Cell>
                      <Table.Cell>
                        <a href="/">Cappelen damm</a>
                      </Table.Cell>
                    </Table.Row>
                    <Table.Row>
                      <Table.Cell isHeadCell>Utgiversted:</Table.Cell>
                      <Table.Cell>Oslo</Table.Cell>
                    </Table.Row>
                  </Table.Body>
                </Table>
              </Block>
            </GridItem>
            <GridItem medium="two-fifths">
              <Block top={5}>
                <Table condensed vertical responsive>
                  <Table.Body>
                    <Table.Row>
                      <Table.Cell isHeadCell>ISBN:</Table.Cell>
                      <Table.Cell>
                        <a href="/">123-45-67-89123-4</a>
                      </Table.Cell>
                    </Table.Row>
                    <Table.Row>
                      <Table.Cell isHeadCell>Tittelnummer:</Table.Cell>
                      <Table.Cell>123123123</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                      <Table.Cell isHeadCell>Innbinding:</Table.Cell>
                      <Table.Cell>
                        <a href="/">Innbundet</a>
                      </Table.Cell>
                    </Table.Row>
                  </Table.Body>
                </Table>
              </Block>
            </GridItem>
          </Grid>

          <Block top={8}>
            <h2>Bibliotek og hylleplassering</h2>
          </Block>

          <Block top={5}>
            <Table full responsive>
              <Table.Head>
                <Table.Row>
                  <Table.Cell isHeadCell>Filial</Table.Cell>
                  <Table.Cell isHeadCell>Hylleplass</Table.Cell>
                  <Table.Cell isHeadCell>Status</Table.Cell>
                </Table.Row>
              </Table.Head>
              <Table.Body>
                <Table.Row>
                  <Table.Cell label="Filial">Bjerke</Table.Cell>
                  <Table.Cell label="Hylleplass">BI 781.64092 Pollard,R.</Table.Cell>
                  <Table.Cell label="Status">1 av 1 ledige</Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell label="Filial">Hovedbiblioteket</Table.Cell>
                  <Table.Cell label="Hylleplass">BI 781.64092 Pollard,R.</Table.Cell>
                  <Table.Cell label="Status">0 av 1 ledige</Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell label="Filial">Majorstuen</Table.Cell>
                  <Table.Cell label="Hylleplass">BI 781.64092 Pollard,R.</Table.Cell>
                  <Table.Cell label="Status">1 av 1 ledige</Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell label="Filial">Bjerke</Table.Cell>
                  <Table.Cell label="Hylleplass">BI 781.64092 Pollard,R.</Table.Cell>
                  <Table.Cell label="Status">1 av 1 ledige</Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell label="Filial">Hovedbiblioteket</Table.Cell>
                  <Table.Cell label="Hylleplass">BI 781.64092 Pollard,R.</Table.Cell>
                  <Table.Cell label="Status">0 av 1 ledige</Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell label="Filial">Majorstuen</Table.Cell>
                  <Table.Cell label="Hylleplass">BI 781.64092 Pollard,R.</Table.Cell>
                  <Table.Cell label="Status">1 av 1 ledige</Table.Cell>
                </Table.Row>
              </Table.Body>
            </Table>
          </Block>

          <Block top={5}>
            <Grid center>
              <GridItem medium="one-quarter">
                <Button primary onClick={this.onToggle} full>
                  Lukk
                </Button>
              </GridItem>
            </Grid>
          </Block>
        </Modal>
      </Container>
    );
  }
}

stories.add('LargeModal', () => <LargeModal />);
