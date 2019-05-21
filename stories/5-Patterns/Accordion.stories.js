import React, { Component } from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, boolean, select, text } from '@storybook/addon-knobs';

import Container from '../../src/components/Container';
import Accordion from '../../src/components/Accordion';
import Block from '../../src/components/Block';
import Banner from '../../src/components/Banner';
import Flex from '../../src/components/Flex';

const stories = storiesOf('Patterns', module);

// Add knobs to stories
stories.addDecorator(withKnobs);

class AccordionExample extends Component {
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
        <h1>Accordion example</h1>
        <Block top={4}>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci, nostrum quo sunt
            recusandae vero maxime nulla accusantium, sit iusto, laboriosam veritatis quos officia?
            Autem, id unde tenetur dolorem illum nostrum!
          </p>
        </Block>
        <Block top={6}>
          <Accordion name="topic-a" text="Read about topic A" withSpacing showDividers>
            <p>
              Gruer du deg for å bruke data? Det er vanskelig å stå utenfor den digitale utvikling
              samfunnet er inne i. Vi kan hjelpe deg med å komme i gang og finne utstyr som passer
              for deg. Vi møtes over en kopp kaffe for å snakke om hvordan du enkelt kan få mye
              glede og nytte av de nye digitale hjelpemidlene. Om du er nybegynner: Vi har tid og
              svarer på de dummeste spørsmål. Velkommen til hyggelig prat med erfarne folk på din
              egen alder.
            </p>
          </Accordion>
          <Accordion name="topic-b" text="Read about topic B" withSpacing showDividers>
            <p>
              Gruer du deg for å bruke data? Det er vanskelig å stå utenfor den digitale utvikling
              samfunnet er inne i. Vi kan hjelpe deg med å komme i gang og finne utstyr som passer
              for deg. Vi møtes over en kopp kaffe for å snakke om hvordan du enkelt kan få mye
              glede og nytte av de nye digitale hjelpemidlene. Om du er nybegynner: Vi har tid og
              svarer på de dummeste spørsmål. Velkommen til hyggelig prat med erfarne folk på din
              egen alder.
            </p>
          </Accordion>
          <Accordion name="topic-c" text="Read about topic C" withSpacing showDividers>
            <p>
              Gruer du deg for å bruke data? Det er vanskelig å stå utenfor den digitale utvikling
              samfunnet er inne i. Vi kan hjelpe deg med å komme i gang og finne utstyr som passer
              for deg. Vi møtes over en kopp kaffe for å snakke om hvordan du enkelt kan få mye
              glede og nytte av de nye digitale hjelpemidlene. Om du er nybegynner: Vi har tid og
              svarer på de dummeste spørsmål. Velkommen til hyggelig prat med erfarne folk på din
              egen alder.
            </p>
          </Accordion>
        </Block>
      </Container>
    );
  }
}

stories.add('Accordion', () => <AccordionExample />);
