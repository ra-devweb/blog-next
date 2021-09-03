import Navigation from "../Navigation";
import Header from "../Header";

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
    </>
  );
};

export default Layout;
