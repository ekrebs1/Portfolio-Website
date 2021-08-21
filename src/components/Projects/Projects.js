import React from "react";
import { FaReact } from "react-icons/fa";
import { SiJavascript, SiPostgresql, SiNodeDotJs } from "react-icons/si";
import {
  BlogCard,
  CardInfo,
  ExternalLinks,
  GridContainer,
  HeaderThree,
  TagList,
  TitleContent,
  UtilityList,
  Img,
  SectionDivider,
} from "./ProjectsStyles";

import { Section, SectionTitle } from "../../styles/GlobalComponents";
import { projects } from "../../constants/constants";

const Projects = () => (
  <>
    <SectionDivider />
    <Section nopadding id='projects'>
      <SectionTitle main>Projects</SectionTitle>
      <GridContainer>
        {projects.map(
          ({ id, image, title, description, tags, source, visit }) => (
            <BlogCard key={id}>
              <Img src={image} />
              <TitleContent>
                <HeaderThree title>{title}</HeaderThree>
              </TitleContent>
              <CardInfo>{description}</CardInfo>
              <div>
                <TitleContent>Tech Stack</TitleContent>
                <TagList>
                  <FaReact size='3.8rem' />
                  <SiJavascript size='3rem' />
                  <SiNodeDotJs size='3.3rem' />
                  <SiPostgresql size='3.3rem' />
                  {/* {tags.map((tag, i) => (
                  <Tag key={i}>{tag}</Tag>
                ))} */}
                </TagList>
              </div>
              <UtilityList>
                <ExternalLinks href={visit}>Github</ExternalLinks>
                <ExternalLinks href={source}>Live</ExternalLinks>
              </UtilityList>
            </BlogCard>
          )
        )}
      </GridContainer>
    </Section>
  </>
);

export default Projects;
