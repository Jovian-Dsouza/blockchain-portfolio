import "./App.css";
import profile_pic from "./images/jovian-gray.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faLinkedin,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import {
  faMapLocationDot,
  faEnvelope,
  faXmark,
  faBarsStaggered,
} from "@fortawesome/free-solid-svg-icons";

import React, { useState } from "react";

import htmlSvg from "./images/skills/html.svg";
import javascriptSvg from "./images/skills/javascript.svg";
import reactSvg from "./images/skills/react.svg";
import tailwindSvg from "./images/skills/tailwind.svg";
import aboutImg from "./images/about-img.webp";
import workEmoji from "./images/working-emoji.png";
import frontEndDeveloper from "./images/front-end-developer.svg";

function App() {
  const navLinks = ["home", "about", "projects", "contact"];
  const techStacks = [htmlSvg, javascriptSvg, reactSvg, tailwindSvg];

  const [isOpen, setIsOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="min-h-screen mx-auto bg-white text-grayishBlack">
      {/* Mobile menu */}
      <div
        className={`${isOpen ? "open-menu hamburger" : "closed-menu"}`}
        onClick={handleMenuToggle}
      >
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
            {navLinks.map((link, index) => (
              <a
                href={"#" + link}
                key={index}
                className="text-center text-2xl font-semibold capitalize transition-all duration-200 hover:text-darkishBlue"
              >
                {link}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Navigation Header */}
      <nav className="flex items-center justify-between w-full px-16 py-6 shadow-md">
        {/* logo */}
        <div class="flex items-center">
          <span class="text-2xl font-bold underline-offset-8 hover:underline">
            Jovian.Dsouza
          </span>
        </div>

        {/* Menu links */}
        <div class="hidden md:flex items-center space-x-6 text-lg font-semibold decoration-2 underline-offset-8">
          {navLinks.map((link, index) => (
            <a
              key={index}
              href={"#" + link}
              className="capitalize transition-all duration-200 hover:underline hover:text-darkishBlue"
            >
              {link}
            </a>
          ))}
        </div>

        {/* Hamburger */}
        <FontAwesomeIcon
          icon={faBarsStaggered}
          className="md:hidden w-6 h-6 hover:text-darkishBlue"
          onClick={handleMenuToggle}
        />
      </nav>

      <div className="my-1"></div>
      {/* Home section */}
      <section
        id="home"
        className="flex flex-col pt-8 pb-24 px-8 md:pt-16 bg-grayishWhite"
      >
        {/* Image and content */}
        <div className="flex flex-col-reverse items-center justify-center gap-12 md:space-y-0 md:space-x-20 md:flex-row ">
          {/* content */}
          <div className="flex flex-col items-center justify-center space-y-8 md:items-start">
            <h1 className="max-w-lg text-center text-4xl md:text-6xl font-bold md:text-left">
              Full Stack Blockchain Developer 👋
            </h1>
            <p className="max-w-sm text-center text-lg md:text-left">
              Hi, I'm Jovian Dsouza. A passionate Full stack Blockchain
              Developer based in India. 📍
            </p>

            {/* socials */}
            <div className="flex space-x-4">
              {/* linked logo */}
              <FontAwesomeIcon
                icon={faLinkedin}
                className="w-8 h-8 hover:text-darkishBlue"
              />
              {/* github logo */}
              <FontAwesomeIcon
                icon={faGithub}
                className="w-8 h-8 hover:text-darkishBlue"
              />
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
            <div className="flex items-center justify-center space-x-8">
              {techStacks.map((svg, index) => (
                <div className="p-5 shadow-lg rounded-full">
                  <img key={index} src={svg} alt="" className="w-8 h-8" />
                </div>
              ))}
              {/* <div className="p-4 shadow-lg rounded-full">
              <img src={htmlSvg} alt="" className="w-8 h-8" />
            </div> */}
            </div>
          </div>
        </div>
      </section>

      {/* <div className="my-20"></div> */}

      {/* About me */}
      <section
        id="about"
        className="flex flex-col items-center justify-center py-24 px-8 md:pt-24 space-y-10 bg-white md:flex-row md:space-y-0 md:space-x-24"
      >
        {/* image */}
        <div className="relative">
          <img
            src={aboutImg}
            alt=""
            className="rounded-xl w-[26rem] h-[22rem]"
          />
          <div className="absolute -bottom-8 -right-8 bg-white rounded-full">
            <div className="relative">
              <img
                src={frontEndDeveloper}
                alt=""
                className="w-40 animate-spin-slow"
              />
              <img
                src={workEmoji}
                alt=""
                className="absolute w-16 bottom-14 right-12"
              />
            </div>
          </div>
        </div>

        {/* About me content */}
        <div className="flex flex-col items-center justify-center space-y-6 md:items-start ">
          <h2 className="max-w-lg text-lg text-darkishBlue uppercase font-bold md:text-left">
            About me
          </h2>
          <h1 className="max-w-md text-center text-2xl font-bold md:text-left">
            A dedicated Full Stack Blockchain Developer based in India📍
          </h1>
          <p className="max-w-lg text-center text-md md:text-left">
            As a Junior Front-End Developer, I possess an impressive arsenal of
            skills in HTML, CSS, JavaScript, React, Tailwind, and SCSS. I excel
            in designing and maintaining responsive websites that offer a smooth
            user experience. My expertise lies in crafting dynamic, engaging
            interfaces through writing clean and optimized code and utilizing
            cutting-edge development tools and techniques. I am also a team
            player who thrives in collaborating with cross-functional teams to
            produce outstanding web applications.
          </p>
        </div>
      </section>

      {/* Project section */}
      <section
        id="projects"
        className="flex flex-col justify-center items-center py-24 px-8 md:pt-16 bg-grayishWhite"
      >
        <h1 className="max-w-md text-center text-3xl font-bold">
          New projects coming soon.. 🤠
        </h1>
      </section>

      {/* Contact */}
      <section
        id="contact"
        className="flex flex-col items-center justify-center py-16 px-8  space-y-2 bg-white"
      >
        <div className="flex flex-col items-start">
          <h2 className="max-w-lg text-lg text-darkishBlue uppercase font-bold">
            Contact
          </h2>
          <h1 className="max-w-md text-center text-3xl font-bold">
            Don't be shy! Hit me up! 👇
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
                <div className="text-[#767676] text-lg hover:text-darkishBlue">
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
                  className="text-[#767676] text-lg hover:text-darkishBlue"
                >
                  dsouzajovian123@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* footer */}
      <footer className="flex items-center justify-center bg-grayishBlack text-white px-14 py-12">
        <div className="flex flex-col w-full max-w-xl justify-center items-center md:justify-between md:flex-row">
          <h1 className="font-bold text-lg">
            Copyright © 2023. All rights are reserved
          </h1>

          {/* socials */}
          <div className="flex space-x-4">
            {/* linked logo */}
            <FontAwesomeIcon
              icon={faLinkedin}
              className="w-6 h-6 hover:text-darkishBlue"
            />
            {/* github logo */}
            <FontAwesomeIcon
              icon={faGithub}
              className="w-6 h-6 hover:text-darkishBlue"
            />
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
