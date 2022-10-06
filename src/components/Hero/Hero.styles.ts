import styled from "styled-components";
import breakpoint from "../../utils/breakpoints";

export const HeroTextMain = styled.section`
  height: 100vh;
  width: 100vw;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

export const HeroTextTopSectionPara = styled.div`
  position: absolute;
  top: 20%;
  left: 5%;
  font-size: 1.1rem;
  letter-spacing: 1px;
  text-transform: uppercase;
  font-weight: bold;
  overflow: hidden;
`;

export const HeroTextSection = styled.section`
  height: 4em;
  overflow: hidden;

  @media (${breakpoint.device.xs}) {
    height: 6em;
  }

  @media (${breakpoint.device.sm}) {
    height: 8em;
  }

  @media (${breakpoint.device.lg}) {
    height: 10em;
  }
`;

export const HeroTextSectionPara = styled.section`
  visibility: hidden;
  font-size: 4rem;
  line-height: 4rem;
  font-weight: bold;

  @media (${breakpoint.device.xs}) {
    font-size: 6rem;
    line-height: 3rem;
  }

  @media (${breakpoint.device.sm}) {
    font-size: 8rem;
    line-height: 6rem;
  }

  @media (${breakpoint.device.lg}) {
    font-size: 12rem;
    line-height: 9rem;
  }
`;

export const HeroTextBottomAnchor = styled.section`
  position: absolute;
  bottom: 20%;
  right: 10%;
  text-align: right;
`;

export const HeroTextAnchor = styled.a`
  padding: 10px 20px;
  border: 1px solid var(--primary-color);
  font-weight: bold;
  font-size: 1.125rem;
  letter-spacing: 2px;
  transition: background-color 250ms ease-out;

  &:hover {
    background-color: var(--primary-color);
    color: var(--primary-bg-clr);
  }
`;
