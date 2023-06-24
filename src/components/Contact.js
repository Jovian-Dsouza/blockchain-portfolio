import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMapLocationDot,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";

export function Contact(props) {
  return (
    <section
      id="contact"
      className="flex flex-col items-center justify-center py-16 px-8  space-y-2 bg-white"
    >
      <div className="flex flex-col items-start">
        <h2 className="max-w-lg text-lg text-darkishBlue uppercase font-bold">
          Contact
        </h2>
        <h1 className="max-w-md text-center text-3xl font-bold">
          Don't be shy! Hit me up!{" "}
          <div className="inline-block animate-bounce">👇</div>
        </h1>

        <div className="flex flex-col md:flex-row w-full items-center justify-center pt-10 space-x-0 md:space-x-20 space-y-10 md:space-y-0">
          {/* Location */}
          <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-4 ">
            <FontAwesomeIcon
              icon={faMapLocationDot}
              className="w-9 h-9 rounded-full shadow-lg p-4 border-2 text-darkishBlue"
            />
            <div className="flex flex-col justify-center items-center md:items-start">
              <div className="font-bold text-xl">Location</div>
              <div className="text-lightGray text-lg hover:text-darkishBlue">
                Goa, India
              </div>
            </div>
          </div>

          {/* Mail */}
          <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-4 ">
            <FontAwesomeIcon
              icon={faEnvelope}
              className="w-9 h-9 rounded-full shadow-lg p-4 border-2 text-darkishBlue"
            />
            <div className="flex flex-col justify-center items-center md:items-start">
              <div className="font-bold text-xl">Mail</div>
              <a
                href="mailto:dsouzajovian123@gmail.com"
                className="text-lightGray text-lg hover:text-darkishBlue"
              >
                dsouzajovian123@gmail.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}