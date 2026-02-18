import password from "../../../assets/password-generator.png";
import { SquareArrowOutUpRight } from "lucide-react";

const ProjectsCard = ({ imageLeft = true }: { imageLeft?: boolean }) => {
  const techStack = [
    "HTML",
    "CSS",
    "JavaScript",
    "React.js",
    "Node.js",
    "Express.js",
    "MongoDB",
  ];

  const imageSection = (
    <div className="w-1/2 bg-gray-600 flex items-center justify-center p-10">
      <img
        src={password}
        alt="Password Generator"
        className="w-130 rounded-lg hover:scale-110 transition-all duration-300 ease-out cursor-pointer"
      />
    </div>
  );

  const contentSection = (
    <div className="w-1/2 bg-gray-800 p-10 text-white">
      <p className="mb-7 text-lg">Password Generator</p>
      <p className="font-extralight">
        Built a responsive Password Generator using HTML, CSS, and JavaScript
        that creates secure, customizable passwords with options for length and
        character types.
      </p>
      <div className="mt-7 flex flex-wrap gap-3">
        {techStack.map((tech, index) => (
          <span
            key={index}
            className="bg-gray-700 px-3 p-1 rounded-full text-sm"
          >
            {tech}
          </span>
        ))}
      </div>
      <a
        href="https://safepasswordsx.netlify.app/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <SquareArrowOutUpRight className="mt-10 cursor-pointer hover:scale-120 transition-transform" />
      </a>
    </div>
  );

  return (
    <div className="flex rounded-xl overflow-hidden shadow-md">
      {imageLeft ? imageSection : contentSection}
      {imageLeft ? contentSection : imageSection}
    </div>
  );
};

export default ProjectsCard;
