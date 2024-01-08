import Navbar from "../Fragments/Navbar";
import { GlobalStyle } from "./Global.style";

const PageAuth = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
      <GlobalStyle />
    </>
  );
};

export default PageAuth;
