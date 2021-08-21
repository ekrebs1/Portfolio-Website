import React from "react";
import { VscPreview, VscJson, VscGear } from "react-icons/vsc";
import {
  Section,
  SectionText,
  SectionTitle,
  SectionDivider,
} from "../../styles/GlobalComponents";
import {
  List,
  ListContainer,
  ListItem,
  ListParagraph,
  ListTitle,
} from "./TechnologiesStyles";

const Technologies = () => (
  <>
    <SectionDivider />
    <Section id='tech'>
      <SectionTitle>Skills</SectionTitle>
      <SectionText>
        Constantly advancing my skills by working with a range of various
        technologies in the web development world.
      </SectionText>
      <List>
        <ListItem>
          <picture>
            <VscJson size='5rem' />
          </picture>
          <ListContainer>
            <ListTitle>Front-End</ListTitle>
            <ListParagraph>
              JavaScript
              <br />
              React
              <br />
              HTML/CSS
              <br />
              Axios
            </ListParagraph>
          </ListContainer>
        </ListItem>
        <ListItem>
          <picture>
            <VscGear size='5rem' />
          </picture>
          <ListContainer>
            <ListTitle>Back-End</ListTitle>
            <ListParagraph>
              PostgreSQL
              <br />
              Node.js
              <br />
              Express.js
              <br />
            </ListParagraph>
          </ListContainer>
        </ListItem>
        <ListItem>
          <picture>
            <VscPreview size='5rem' />
          </picture>
          <ListContainer>
            <ListTitle>UX/UI</ListTitle>
            <ListParagraph>
              Figma
              <br />
              Adobe XD
              <br />
              Material-UI
              <br />
              Bootstrap
            </ListParagraph>
          </ListContainer>
        </ListItem>
      </List>
    </Section>
  </>
);

export default Technologies;
