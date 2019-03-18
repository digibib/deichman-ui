import React, { Component } from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, boolean, select, text } from '@storybook/addon-knobs';

import Container from '../../src/components/Container';
import Block from '../../src/components/Block';
import Button from '../../src/components/Button';
import Banner from '../../src/components/Banner';
import Flex from '../../src/components/Flex';

const stories = storiesOf('Patterns', module);

// Add knobs to stories
stories.addDecorator(withKnobs);

class BannerExample extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bannerVisible: false,
    };

    this.onToggle = this.onToggle.bind(this);
  }

  onToggle(e) {
    e.preventDefault();
    this.setState({
      bannerVisible: !this.state.bannerVisible,
    });
  }

  render() {
    const { bannerVisible } = this.state;

    return (
      <Container>
        <Block top={4}>
          <Button onClick={this.onToggle}>Show/hide banner</Button>
        </Block>
        {bannerVisible && (
          <Banner name="Informasjon" showClose={false} onClose={this.onToggle}>
            <Block top={6}>
              <h3>Dine data er ditt valg</h3>
            </Block>
            <Block top={4}>
              <p style={{ maxWidth: '700px' }}>
                Deichman dummy tekst holder deg oppdatert på lokale nyheter. Vi benytter brukerdata
                for å vise deg godt innhold på egne og eksterne kanaler, relevante annonser, og for
                å gi deg en best mulig tjeneste.
              </p>
            </Block>
            <Block top={5} bottom={6}>
              <Flex>
                <Button primary onClick={this.onToggle}>
                  Jeg forstår
                </Button>
                <Block left={6}>
                  <a href="/">Mer informasjon</a>
                </Block>
              </Flex>
            </Block>
          </Banner>
        )}
      </Container>
    );
  }
}

stories.add('Banner', () => <BannerExample />);
