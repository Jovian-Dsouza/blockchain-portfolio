import "./Home.css";
import profile_pic from "../images/jovian-gray.png";
import { socialLinks, techStacks } from "../data/contants";

import { SocialIcon } from "./SocialIcon";

export function Home(props) {
  return (
    <section
      id="home"
      className="flex flex-col pt-8 pb-24 px-8 md:pt-16 bg-grayishWhite"
    >
      {/* Image and content */}
      <div className="flex flex-col-reverse items-center justify-center gap-12 md:space-y-0 md:space-x-20 md:flex-row ">
        {/* content */}
        <div className="flex flex-col items-center justify-center space-y-8 md:items-start">
          <h1 className="max-w-lg text-center text-4xl md:text-6xl font-bold md:text-left">
            Full Stack Blockchain Developer <div className="wave-hand">👋</div>
          </h1>
          <p className="max-w-sm text-center text-lg md:text-left">
            Hi, I'm Jovian Dsouza. A passionate Full stack Blockchain Developer
            based in India. 📍
          </p>

          {/* socials */}
          <div className="flex space-x-4">
            {Object.keys(socialLinks).map((type, index) => (
              <SocialIcon
                className="w-8 h-8 hover:text-darkishBlue"
                type={type}
                key={index}
              />
            ))}
          </div>
        </div>

        <div className="items-center justify-center">
          <img src={profile_pic} alt="profile pic" className="profile-pic" />
        </div>
      </div>

      <div className="my-8"></div>

      {/* Tech stack */}
      <div className="flex items-center justify-center">
        <div className="flex flex-col items-center justify-center space-y-6 md:flex-row md:justify-between md:space-y-0 md:space-x-28">
          <div className="text-xl text-grayishBlack border-gray-400 font-semibold border-b-2 pb-2 md:border-r-2 md:pr-6 md:border-b-0 md:pb-0">
            Tech Stack
          </div>

          {/* Tech stack icons */}
          <div className="flex items-center justify-center space-x-4 md:space-x-8">
            {techStacks.map((imgLink, index) => (
              <div key={index} className="p-5 shadow-lg rounded-full">
                <img src={imgLink} alt="" className="w-8 h-8" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
