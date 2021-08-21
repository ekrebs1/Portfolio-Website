import styled from "styled-components";

export const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  overflow: hidden;
`;

export const GridContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
  padding: 3rem;
  place-items: center;
  column-gap: 2rem;
  row-gap: 3rem;
  @media ${(props) => props.theme.breakpoints.sm} {
    display: flex;
    flex-direction: column;
    padding: 2rem;
    padding-bottom: 0;
  }
`;
export const BlogCard = styled.div`
  border-radius: 10px;
  box-shadow: 3px 3px 20px rgba(80, 78, 78, 0.5);
  text-align: center;
  width: 400px;
  @media ${(props) => props.theme.breakpoints.sm} {
    width: 100%;
  }
`;
export const TitleContent = styled.div`
  text-align: center;
  z-index: 20;
  width: 100%;
  margin-top: 1rem;
  font-size: 2rem;
`;

export const HeaderThree = styled.h3`
  font-weight: 500;
  letter-spacing: 2px;
  color: #76aace;
  padding: 0.5rem 0;
  font-size: ${(props) => (props.title ? "3rem" : "2rem")};
`;

export const Intro = styled.div`
  width: 170px;
  margin: 0 auto;
  color: #dce3e7;
  font-family: "Droid Serif", serif;
  font-size: 13px;
  font-style: italic;
  line-height: 18px;
`;

export const CardInfo = styled.p`
  width: 100%;
  padding: 0 50px;
  color: #36454f;
  font-style: 2rem;
  line-height: 24px;
  text-align: center;
  @media ${(props) => props.theme.breakpoints.sm} {
    padding: 0.3rem;
  }
`;

export const UtilityList = styled.ul`
  list-style-type: none;
  padding: 0;
  display: flex;
  justify-content: space-around;
  margin: 2.5rem 0;
`;

export const ExternalLinks = styled.a`
  color: #76aace;
  font-size: 1.6rem;
  padding: 1rem 1.5rem;
  border: solid 2px #76aace;
  transition: 0.5s;
  &:hover {
    color: #fff;
    background: #76aace;
  }
`;

export const TagList = styled.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  padding: 2rem;
`;
export const Tag = styled.li`
  color: #36454f;
  font-size: 1.5rem;
`;

export const SectionDivider = styled.hr`
  height: 10px;

  background-image: linear-gradient(
    90deg,
    #fc94af,
    #fc94af 33.33%,
    transparent 33.33%,
    transparent 100%
  );
  border: none;
  margin: auto;
  margin-top: 30px;
  margin-bottom: 50px;
  background-size: 3px 100%;
  width: 95%;
`;
