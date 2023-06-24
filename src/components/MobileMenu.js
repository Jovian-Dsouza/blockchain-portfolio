import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

export function MobileMenu(props) {
  return (
    <div className="flex flex-col space-y-20 w-screen fixed top-0 right-0 h-screen z-50 bg-white transition-all duration-300 ease-in-out">
      {/* x mark icon */}
      <div className="flex justify-end p-10">
        <FontAwesomeIcon
          icon={faXmark}
          className="w-8 h-8 hover:text-darkishBlue"
        />
      </div>

      <div className="flex flex-col items-center justify-center">
        {/* Nav links */}
        <div className="flex flex-col space-y-10">
          {props.menu.map((link, index) => (
            <a
              href={"#" + link}
              key={index}
              className="text-center text-2xl font-semibold capitalize link"
            >
              {link}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
