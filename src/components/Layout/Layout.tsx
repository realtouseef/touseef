import Navbar from "../Navbar/Navbar";
import { ChildrenWrapper } from "./Layout.styles";

type ChilredType = { children: React.ReactNode };

const Layout = ({ children }: ChilredType) => {
  return (
    <>
      <Navbar />
      <ChildrenWrapper>{children}</ChildrenWrapper>
    </>
  );
};

export default Layout;
