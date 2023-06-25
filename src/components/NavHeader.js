import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBarsStaggered,
} from "@fortawesome/free-solid-svg-icons";

export function NavHeader(props) {
  return (
    <nav className="sticky top-0 z-40 bg-white flex items-center justify-between w-full px-16 py-6 shadow-md">
      {/* logo */}
      <div className="flex items-center">
        <span className="text-2xl font-bold underline-offset-8 hover:underline">
          Jovian.Dsouza
        </span>
      </div>

      {/* Menu links */}
      <div className="hidden md:flex items-center space-x-6 text-lg font-semibold decoration-2 underline-offset-8">
        {props.menu.map((link, index) => (
          <a
            key={index}
            href={"#" + link}
            className="link capitalize hover:underline"
          >
            {link}
          </a>
        ))}
      </div>

      {/* Hamburger */}
      <FontAwesomeIcon
        icon={faBarsStaggered}
        className="md:hidden w-6 h-6 hover:text-darkishBlue"
        onClick={props.handleMenuToggle}
      />
    </nav>
  );
}