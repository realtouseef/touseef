import { useEffect } from "react";
import Intro from "../Intro/Intro";
import { gsap, Power3 } from "gsap";
import {
  NinjaTextMain,
  NinjaTextSection,
  NinjaTextSectionPara,
} from "./Hero.styles";

const Hero: React.FunctionComponent = () => {
  const tl = gsap.timeline();

  useEffect(() => {
    tl.from(".hero .hero_p", 2, {
      y: 600,
      stagger: { amount: 0.5 },
      ease: Power3.easeOut,
    });
  });

  return (
    <>
      <NinjaTextMain>
        <section>
          <p>frontend ninja</p>
        </section>
        <NinjaTextSection className="hero">
          <NinjaTextSectionPara className="hero_p">
            touseef
          </NinjaTextSectionPara>
        </NinjaTextSection>
        <NinjaTextSection className="hero">
          <NinjaTextSectionPara className="hero_p">
            ibn khaleel
          </NinjaTextSectionPara>
        </NinjaTextSection>
        <section>
          <div>
            <p>Available for freelance work.</p>
            <a
              href="https://linkedin.com/in/touseefcodes"
              target="_blank"
              className="underline hover:text-orange-300"
            >
              Let's talk
            </a>
          </div>
        </section>
      </NinjaTextMain>
      {/* <Intro /> */}
    </>
  );
};

export default Hero;
