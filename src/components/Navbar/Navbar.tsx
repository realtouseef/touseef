import { useEffect, useState } from "react";
import {
  LogoWrapper,
  OuterWrapperNav,
  TimeWrapper,
  Wrapper,
} from "./Navbar.styles";
import { Link } from "react-router-dom";

const Navbar: React.FunctionComponent = () => {
  const [time, setTime] = useState<string>("00:00");
  const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;

  useEffect(() => {
    setInterval(() => {
      const date = new Date();
      const time = date.toLocaleString("en-US", {
        hour: "numeric",
        minute: "numeric",
      });
      setTime(time);
    }, 1000);
  }, []);

  return (
    <>
      <OuterWrapperNav>
        <Wrapper>
          <LogoWrapper>
            <Link to="/">
              <a>touseef</a>
            </Link>
            <span>KPK, PAK</span>
            <small></small>
            <span> swe</span>
          </LogoWrapper>

          <section>
            <TimeWrapper>
              {time} — {timezone}
            </TimeWrapper>
          </section>

          <section>
            <p>/work</p>
          </section>
        </Wrapper>
      </OuterWrapperNav>
    </>
  );
};

export default Navbar;
