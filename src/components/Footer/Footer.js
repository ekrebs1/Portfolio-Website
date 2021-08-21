import React from "react";
import {
  AiFillGithub,
  AiFillLinkedin,
  AiFillTwitterCircle,
} from "react-icons/ai";

import {
  FooterWrapper,
  LinkColumn,
  LinkItem,
  LinkList,
  LinkTitle,
  SocialContainer,
  SectionText,
  SectionDivider,
  SocialIcons,
} from "./FooterStyles";

const Footer = () => {
  return (
    <>
      <SectionDivider />

      <FooterWrapper>
        <LinkList>
          <LinkColumn>
            <SocialContainer>
              <SocialIcons href='https://www.linkedin.com/in/ekrebs1/'>
                <AiFillLinkedin size='5rem' />
              </SocialIcons>
              <SocialIcons href='https://twitter.com/EricaKrebs1'>
                <AiFillTwitterCircle size='5rem' />
              </SocialIcons>
              <SocialIcons href='https://github.com/ekrebs1'>
                <AiFillGithub size='5rem' />
              </SocialIcons>
            </SocialContainer>
          </LinkColumn>

          <LinkColumn>
            <SectionText>LET'S HAVE A CHAT!</SectionText>
            <LinkTitle>Email</LinkTitle>
            <LinkItem href='mailto:ericakrebs1@gmail.com'>
              ericakrebs1@gmail.com
            </LinkItem>
          </LinkColumn>
        </LinkList>
      </FooterWrapper>
    </>
  );
};

export default Footer;
