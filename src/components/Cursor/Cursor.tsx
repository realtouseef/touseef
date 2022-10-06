import { useRef, useEffect, ReactElement } from "react";
import useMousePosition from "../../hooks/useMousePosition";
import { StyledCursor } from "./Cursor.styles";
import { gsap } from "gsap";

const Cursor = (): ReactElement => {
  const { x, y } = useMousePosition();
  const main = useRef(null);

  useEffect(() => {
    gsap.to(main.current, {
      top: y,
      left: x,
      x: "-50%",
      y: "-50%",
      ease: "none",
      duration: 0.15,
    });
  }, [x, y]);

  return <StyledCursor ref={main} />;
};

export default Cursor;
