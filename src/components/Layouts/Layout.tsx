import Nav from "../Navigation";
import Header from "../Header";

interface Props {
    children?: React.ReactNode;
}

const Layout = (props: Props) => {
    return (
        <>
            <Nav />
            <Header />
            {props.children}
        </>
    );
};

export default Layout;
