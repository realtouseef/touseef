import Intro from "../Intro/Intro";

const Hero: React.FunctionComponent = () => {
  return (
    <>
      <main>
        <section>
          <p>touseef ibn khaleel</p>
        </section>
        <section className="hero">
          <p>Frontend</p>
        </section>
        <section className="hero">
          <p>Ninja</p>
        </section>
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
