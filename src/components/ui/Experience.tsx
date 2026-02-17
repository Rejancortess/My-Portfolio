import ExperienceCard from "./cards/ExperienceCard";
import Scrimba from "../../assets/scrimba.jpg";
import antimonyLogo from "../../assets/antimony-logo.jpg";
import GoogleDevLogo from "../../assets/Google.jpg";

export const Experience = () => {
  return (
    <div className="px-40 mt-20 bg-slate-900 py-20 flex flex-col justify-center items-center space-y-10">
      <div className="flex justify-center items-center text-gray-300 flex-col space-y-5">
        <p className="bg-gray-600 py-1 px-4 rounded-2xl">Experience</p>
        <p className="text-xl font-extralight">
          Here is a quick summary of my most recent experiences:
        </p>
      </div>
      <ExperienceCard
        title="Part-Time Software Developer"
        description={[
          "Collaborate with teams and participate in code reviews",
          "Implemented new features, fixed bugs, and optimized performance",
          "Gained valuable experience working in a professional software development environment",
        ]}
        period="Nov 2021 - Present"
        logo={antimonyLogo}
      />
      <ExperienceCard
        title="Frontend Developer Path bootcamp"
        description={[
          "Completed Frontend Developer Path Bootcamp",
          "Used HTML, CSS, JavaScript, React, Tailwind CSS, and more",
          "Gained practical experience through real-world projects and challenges",
        ]}
        period="Sep 2025 - Nov 2025"
        logo={Scrimba}
      />
      <ExperienceCard
        title="Google Developer Hackathon"
        description={[
          "Collaborated with a team to build a mobile application that helps people with mental health issues",
          "Used modern web technologies and frameworks, react native, firebase and more",
          "Presented the project to judges and peers",
        ]}
        period="November 2025"
        logo={GoogleDevLogo}
      />
    </div>
  );
};

export default Experience;
