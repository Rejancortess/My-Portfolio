import profile2 from "../../assets/profile-2.jpeg";
import { MapPin, Github, Figma, Facebook } from "lucide-react";

export const Hero = () => {
  return (
    <div className="flex py-5 justify-between">
      <div className="text-gray-300 w-2/3 pr-10">
        <h1 className="text-white text-5xl font-bold mb-5 ">
          Hi, I'm Rejan 👋
        </h1>
        <p>
          I'm a full stack developer (React.js & Node.js) with a focus on
          creating (and occasionally designing) exceptional digital experiences
          that are fast, accessible, visually appealing, and responsive. Even
          though I have been creating web applications for over 7 years, I still
          love it as if it was something new.
        </p>
        <div className="space-y-2 mt-10">
          <div className="flex items-center">
            <MapPin className="mr-2" />
            <span>Cagayan De Oro, Philippines</span>
          </div>

          <div className="flex items-center">
            <div className="rounded-full bg-green-500 w-3 h-3 mr-4 ml-1"></div>
            <span>Available for new projects</span>
          </div>
        </div>

        <div className="flex space-x-4 mt-10">
          <a
            href="https://github.com/Rejancortess"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github className="w-6 h-6 text-gray-300 hover:text-white cursor-pointer" />
          </a>
          <a
            href="https://www.figma.com/@rejanmamugay"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Figma className="w-6 h-6 text-gray-300 hover:text-white cursor-pointer" />
          </a>
          <a
            href="https://www.facebook.com/rejan.mamugay"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Facebook className="w-6 h-6 text-gray-300 hover:text-white cursor-pointer" />
          </a>
        </div>
      </div>
      <div className="flex items-center justify-center w-1/3">
        <div className="relative w-70">
          <div className="absolute -right-10 -bottom-10 h-65 w-65 border-28 border-slate-700 border-l-0 border-t-0" />
          <img
            src={profile2}
            alt="Rejan"
            className="relative z-10 w-70 rounded"
          />
        </div>
      </div>
    </div>
  );
};
