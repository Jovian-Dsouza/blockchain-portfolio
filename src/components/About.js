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
          A dedicated Full Stack Blockchain Developer based in Goa, India📍
        </h1>
        <p className="max-w-lg text-center text-md md:text-left">
          I am a skilled full stack blockchain developer, proficient in the
          latest technologies and frameworks. With expertise in both front-end
          and back-end development, I am dedicated to creating robust and secure
          blockchain solutions. Leveraging my strong knowledge of smart
          contracts, decentralized applications, and cryptography, I strive to
          deliver innovative solutions that drive digital transformation. As a
          full stack blockchain developer, I am committed to staying updated
          with emerging trends, ensuring that my work aligns with industry best
          practices. Let's collaborate to shape the future of blockchain
          technology.
        </p>
      </div>
    </section>
  );
}