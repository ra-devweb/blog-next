interface Props {
  children?: React.ReactNode
}

const Header = (props: Props) => {
  return (
    <header className="navbar mb-2 shadow-lg bg-neutral text-neutral-content">
      {props.children}
    </header>
  );
};

export default Header;
