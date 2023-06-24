import aboutImg from "../images/about-img.webp";
import workEmoji from "../images/working-emoji.png";
import frontEndDeveloper from "../images/front-end-developer.svg";

export function About(props) {
  return (
    <section
      id="about"
      className="flex flex-col items-center justify-center py-24 px-8 md:pt-24 space-y-10 bg-white md:flex-row md:space-y-0 md:space-x-24"
    >
      {/* image */}
      <div className="relative">
        <img src={aboutImg} alt="" className="rounded-xl w-[26rem] h-[22rem]" />
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
          skills in HTML, CSS, JavaScript, React, Tailwind, and SCSS. I excel in
          designing and maintaining responsive websites that offer a smooth user
          experience. My expertise lies in crafting dynamic, engaging interfaces
          through writing clean and optimized code and utilizing cutting-edge
          development tools and techniques. I am also a team player who thrives
          in collaborating with cross-functional teams to produce outstanding
          web applications.
        </p>
      </div>
    </section>
  );
}