import Cursor from "../components/Cursor/Cursor";
import Hero from "../components/Hero/Hero";
import GlobalStyle from "../globalStyles";

const Home: React.FunctionComponent = () => {
  return (
    <>
      <GlobalStyle />
      <Cursor />
      <Hero />
    </>
  );
};

export default Home;
