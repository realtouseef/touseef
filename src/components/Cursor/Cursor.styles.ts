import styled from "styled-components";

export const StyledCursor = styled.div`
  pointer-events: none;
  position: fixed;
  left: 0;
  top: 0;
  background: var(--primary-color);
  mix-blend-mode: difference;
  width: 1rem;
  height: 1rem;
  border-radius: 100%;
  z-index: 5;
`;
