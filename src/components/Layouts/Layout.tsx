import Navigation from "../Navigation";
import Header from "../Header";
import Footer from "../Footer";

interface Props {
  children?: React.ReactNode;
}

const Layout = (props: Props) => {
  return (
    <>
      <Header>
        <Navigation />
      </Header>
      {props.children}
      <Footer />
    </>
  );
};

export default Layout;
