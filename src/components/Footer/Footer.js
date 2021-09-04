import React from "react";
import {
  AiFillGithub,
  AiFillLinkedin,
  AiFillTwitterCircle,
} from "react-icons/ai";

import {
  FooterWrapper,
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

        <SectionText>LET'S HAVE A CHAT!</SectionText>
      </FooterWrapper>
    </>
  );
};

export default Footer;
