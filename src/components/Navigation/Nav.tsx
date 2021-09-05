import Link from "next/link";

const Nav = () => {
  return (
    <div className="container mx-auto">
      <div className="flex-none px-2 mx-2">
        <span className="text-lg font-bold">{"<TARIKRAZINEBLOG />"}</span>
      </div>
      <nav className="flex-1 px-2 mx-2">
        <div className="items-stretch hidden md:flex">
          <Link href="/" passHref>
            <a className="btn btn-ghost btn-sm rounded-btn">Home</a>
          </Link>
          <Link href="/posts" passHref>
            <a className="btn btn-ghost btn-sm rounded-btn">Posts</a>
          </Link>
          <Link href="/contact" passHref>
            <a className="btn btn-ghost btn-sm rounded-btn">Contact us</a>
          </Link>
        </div>
      </nav>
      <div className="flex-none md:hidden">
        <button className="btn btn-square btn-ghost">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="inline-block w-6 h-6 stroke-current"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Nav;
