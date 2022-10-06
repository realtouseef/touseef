import styled from "styled-components";
import breakpoint from "../../utils/breakpoints";

export const OuterWrapperNav = styled.nav`
  width: 100%;
  height: 3em;
  position: fixed;
  top: 0;
`;

export const Wrapper = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2em;
`;

export const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  a {
    font-size: 1.125rem;
    font-weight: bold;
    margin-right: 0.75em;
    cursor: pointer;
  }

  small {
    width: 0.3rem;
    height: 0.3rem;
    border-radius: 100%;
    background-color: var(--primary-color);
    margin: 0 0.5em;
  }

  span {
    font-size: 0.875rem;
    text-transform: uppercase;
  }
`;

export const TimeWrapper = styled.p`
  visibility: hidden;
  font-size: 0.875rem;
  font-weight: bold;

  @media (${breakpoint.device.sm}) {
    visibility: visible;
  }
`;
