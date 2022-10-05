import { useEffect } from "react";
import Intro from "../Intro/Intro";
import { gsap, Power3 } from "gsap";
import { NinjaTextSection, NinjaTextSectionPara } from "./Hero.styles";

const Hero: React.FunctionComponent = () => {
  const tl = gsap.timeline();

  useEffect(() => {
    tl.from(".hero .hero_p", {
      y: 80,
      duration: 1,
      stagger: { amount: 0.9 },
      ease: Power3.easeOut,
    });
  });

  return (
    <>
      <main>
        <section>
          <p>touseef ibn khaleel</p>
        </section>
        <NinjaTextSection className="hero">
          <NinjaTextSectionPara className="hero_p">
            Frontend
          </NinjaTextSectionPara>
        </NinjaTextSection>
        <NinjaTextSection className="hero">
          <NinjaTextSectionPara className="hero_p">Ninja</NinjaTextSectionPara>
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
      </main>
      {/* <Intro /> */}
    </>
  );
};

export default Hero;
