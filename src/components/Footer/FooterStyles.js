import styled from "styled-components";

export const FooterWrapper = styled.section`
  width: calc(100vw - 96px);
  max-width: 1040px;
  padding: 2rem 48px 40px;
  margin: 1rem auto;
  box-sizing: content-box;
  display: flex;
  justify-content: center;
  align-items: center;

  @media ${(props) => props.theme.breakpoints.sm} {
    padding: 0 16px 48px;
    width: calc(100vw - 32px);
  }
`;

export const SocialContainer = styled.div`
  display: flex;
  align-items: center;

  @media ${(props) => props.theme.breakpoints.md} {
    justify-content: center;
    padding-right: 16px;
    flex-wrap: wrap;
  }
`;

export const SectionText = styled.p`
  max-width: 800px;
  font-size: 24px;
  line-height: 40px;
  font-weight: 300;

  color: #36454f;

  @media ${(props) => props.theme.breakpoints.md} {
    max-width: 670px;
    font-size: 20px;
    line-height: 32px;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 16px;
    line-height: 24px;
  }
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
  margin-top: 50px;
  margin-bottom: 30px;
  background-size: 3px 100%;
  width: 95%;
`;

export const SocialIcons = styled.a`
  transition: 0.3s ease;
  color: black;
  border-radius: 50px;
  padding: 8px;
  &:hover {
    color: #fc94af;
    transform: scale(1.2);
    cursor: pointer;
  }
`;
