import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";

export function ProjectComingSoon(props) {
  return (
    <section
      id="projects"
      className="flex flex-col justify-center items-center py-24 px-8 md:pt-16 bg-grayishWhite"
    >
      <h1 className="max-w-md text-center text-3xl font-bold">
        New projects coming soon.. 🤠
      </h1>
    </section>
  );
}

export function ProjectCard({ reverse, projectSample }) {
  return (
    <div
      className={`flex flex-col-reverse justify-center items-center ${
        reverse ? "md:flex-row-reverse" : "md:flex-row"
      } md:gap-20`}
    >
      {/* Project image */}
      <a href={projectSample["demo"]}>
        <img
          src={projectSample["images"][0]}
          alt="project image"
          className="object-scale-down mt-5 md:mt-0 w-96 shadow-lg shadow-cyan-800 rounded-lg hover:scale-105"
        />
      </a>

      {/* Project content */}
      <div className="flex flex-col justify-center items-center text-center space-y-4">
        <div className="text-center text-xl font-bold underline underline-offset-4">
          {projectSample["name"]}
        </div>
        <p className="max-w-md text-center text-md md:text-left">
          {projectSample["desc"]}
        </p>

        {/* tech stack */}
        <div className="flex items-center space-x-5">
          {projectSample["techStack"].map((techStack, index) => (
            <div key={index} className="font-bold text-md">
              {techStack}
            </div>
          ))}
        </div>

        {/* Github and demo */}
        <div className="flex items-center space-x-8">
          {/* github */}
          <a
            href={projectSample["github"]}
            className="link flex items-center space-x-1"
          >
            <div className="text-md font-semibold">Code</div>
            <FontAwesomeIcon icon={faGithub} className="w-6 h-6" />
          </a>

          {/* demo */}
          <a
            href={projectSample["demo"]}
            className="link flex items-center space-x-1"
          >
            <div className="text-md font-semibold">Live Demo</div>
            <FontAwesomeIcon
              icon={faArrowUpRightFromSquare}
              className="w-6 h-6"
            />
          </a>
        </div>
      </div>
    </div>
  );
}

export function Project({ projectList }) {
  if(!projectList || projectList.length == 0){
    return <ProjectComingSoon />
  }

  return (
    <section
      id="projects"
      className="flex flex-col justify-center items-center py-24 px-8 bg-grayishWhite"
    >
      <div className="flex flex-col justify-start items-start w-[85%] space-y-5">
        <h2 className="text-lg  text-darkishBlue uppercase font-bold">
          portfolio
        </h2>
        <h1 className="text-left text-2xl font-bold">
          Each project is a unique piece of development🧩.
        </h1>
      </div>

      <div className="my-5"></div>

      <div className="flex flex-col justify-center items-center space-y-24 mt-5">
        {projectList.map((projectSample, index) => (
          <ProjectCard
            key={index}
            projectSample={projectSample}
            reverse={index % 2 != 0}
          />
        ))}
      </div>
    </section>
  );
}
