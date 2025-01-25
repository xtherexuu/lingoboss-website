import type { LinksFunction } from "react-router";
import logo from "/utils/logo.png";
import BorderLink from "./BorderLink";

export const links: LinksFunction = () => {
  return [{ rel: "preload", href: "/utils/logo.png", as: "image" }];
};

function Header() {
  return (
    <header className="flex items-center justify-between px-[15px] 320:px-[20px] py-[10px]">
      <div>
        <i>
          <img
            src={logo}
            alt="logo"
            className="w-[35px] h-[35px] 320:w-[45px] 320:h-[45px] 600:w-[60px] 600:h-[60px]"
          />
        </i>
      </div>
      {/* <nav className="flex items-center gap-[30px] text-base 600:text-lg 800:text-xl">
        <a
          href="/"
          className="hover:text-primary-green hover:scale-105 transition-all duration-300"
        >
          Home
        </a>
        <a
          href="/about"
          className="hover:text-primary-green hover:scale-105 transition-all duration-300"
        >
          About
        </a>
        <a
          href="/contact"
          className="hover:text-primary-green hover:scale-105 transition-all duration-300"
        >
          Contact
        </a>
      </nav> */}
      <div className="flex items-center gap-[10px] 320:gap-[20px]">
        <button className="bg-shiny-green text-white text-xs 600:text-sm 800:text-base px-[10px] py-[7px] 320:py-[9px] 600:px-[15px] 600:py-[10px] rounded-lg font-bold hover:scale-110 transition-all duration-300">
          Dołącz do nas
        </button>
        <BorderLink to="/login" className="py-[6px] 320:py-[9px]">
          Zaloguj się
        </BorderLink>
      </div>
    </header>
  );
}

export default Header;
