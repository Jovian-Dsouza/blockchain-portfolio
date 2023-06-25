import { SocialIcon } from "./SocialIcon";
import { socialLinks } from "../data/contants";


export function Footer(props) {
  return (
    <footer className="flex items-center justify-center bg-grayishBlack text-white px-14 py-12">
      <div className="flex flex-col space-y-2 w-full max-w-xl justify-center items-center md:justify-between md:flex-row md:space-y-0">
        <h1 className="font-bold text-lg">
          Copyright © 2023. All rights are reserved
        </h1>

        {/* socials */}
        <div className="flex space-x-4">
          {Object.keys(socialLinks).map((type, index) => (
            <SocialIcon
              className="w-6 h-6 hover:text-darkishBlue"
              type={type}
              key={index}
            />
          ))}
        </div>
      </div>
    </footer>
  );
}