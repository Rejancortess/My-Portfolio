import ProjectsCard from "./cards/ProjectsCard";

const Projects = () => {
  return (
    <div
      className="mt-20 px-40 flex items-center justify-center flex-col space-y-10"
      id="projects"
    >
      <div className="flex justify-center items-center text-gray-300 flex-col space-y-5">
        <p className="bg-gray-600 py-1 px-4 rounded-2xl">Projects</p>
        <p className="text-xl font-extralight">
          Some of the noteworthy projects I have built:
        </p>
      </div>
      <div className="w-full flex flex-col gap-20">
        <ProjectsCard imageLeft={true} />
        <ProjectsCard imageLeft={false} />
        <ProjectsCard imageLeft={true} />
      </div>
    </div>
  );
};

export default Projects;
