//* components
import { Footer, Header } from "../components";

export const Layout = ({ children }) => {
  return (
    <>
      <Header />

      {children}

      <Footer />
    </>
  );
};
