import { useEffect } from "react";
import Intro from "../Intro/Intro";
import { gsap, Power3 } from "gsap";
import {
  HeroTextAnchor,
  HeroTextBottomAnchor,
  HeroTextMain,
  HeroTextSection,
  HeroTextSectionPara,
  HeroTextTopSectionPara,
} from "./Hero.styles";
import Splitting from "splitting";

const Hero: React.FunctionComponent = () => {
  const tl = gsap.timeline();

  useEffect(() => {
    tl.to(".hero_p", { css: { visibility: "visible" } });
    tl.to(".hero_p", {
      y: 0,
      duration: 1.8,
      delay: 1,
      stagger: 0.9,
      ease: Power3.easeOut,
    });
  });

  useEffect(() => {
    Splitting();

    tl.from(".chars ", {
      y: 0,
      duration: 1.1,
      delay: 1,
      stagger: 0.5,
      ease: Power3.easeOut,
    });
  }, []);

  return (
    <>
      <HeroTextMain>
        <HeroTextTopSectionPara>
          <p data-splitting="chars" className="ninja">
            frontend ninja
          </p>
        </HeroTextTopSectionPara>

        <section>
          <HeroTextSection className="hero">
            <HeroTextSectionPara className="hero_p">
              touseef
            </HeroTextSectionPara>
          </HeroTextSection>
          <HeroTextSection className="hero">
            <HeroTextSectionPara className="hero_p">
              ibn khaleel
            </HeroTextSectionPara>
          </HeroTextSection>
        </section>

        <HeroTextBottomAnchor>
          <div>
            <p>Available for freelance work.</p>
            <HeroTextAnchor
              href="https://linkedin.com/in/touseefcodes"
              target="_blank"
              className="underline hover:text-orange-300"
            >
              Let's talk
            </HeroTextAnchor>
          </div>
        </HeroTextBottomAnchor>
      </HeroTextMain>
      {/* <Intro /> */}
    </>
  );
};

export default Hero;
