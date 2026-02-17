export const Skills = () => {
  return (
    <div className="px-40 mt-20 text-gray-300">
      <div className="flex justify-center items-center flex-col  space-y-5">
        <div className="flex justify-center items-center">
          <p className="bg-gray-600 py-1 px-4 rounded-2xl">Skills</p>
        </div>
        <p className="text-xl font-extralight">
          The skills, tools and technologies I am good at:
        </p>
      </div>
      <div className="mt-10 flex gap-15 flex-wrap justify-center px-10 font-light">
        <div className="flex items-center gap-3 flex-col text-lg">
          <img
            src="https://skillicons.dev/icons?i=javascript&theme=dark&perline=15"
            alt="Javascript Icon"
            className="w-20 hover:scale-110 transition-transform"
          />
          <span>Javascript</span>
        </div>

        <div className="flex items-center gap-3 flex-col text-lg">
          <img
            src="https://skillicons.dev/icons?i=typescript&theme=dark&perline=15"
            alt="Typescript Icon"
            className="w-20 hover:scale-110 transition-transform"
          />
          <span>Typescript</span>
        </div>

        <div className="flex items-center gap-3 flex-col text-lg">
          <img
            src="https://skillicons.dev/icons?i=react&theme=dark&perline=15"
            alt="React Icon"
            className="w-20 hover:scale-110 transition-transform"
          />
          <span>React</span>
        </div>

        <div className="flex items-center gap-3 flex-col text-lg">
          <img
            src="https://skillicons.dev/icons?i=nodejs&theme=dark&perline=15"
            alt="Node.js Icon"
            className="w-20 hover:scale-110 transition-transform"
          />
          <span>Node.js</span>
        </div>

        <div className="flex items-center gap-3 flex-col text-lg">
          <img
            src="https://skillicons.dev/icons?i=github&theme=dark&perline=15"
            alt="GitHub Icon"
            className="w-20 hover:scale-110 transition-transform  "
          />
          <span>GitHub</span>
        </div>

        <div className="flex items-center gap-3 flex-col text-lg">
          <img
            src="https://skillicons.dev/icons?i=git&theme=dark&perline=15"
            alt="Git Icon"
            className="w-20 hover:scale-110"
          />
          <span>Git</span>
        </div>

        <div className="flex items-center gap-3 flex-col text-lg">
          <img
            src="https://skillicons.dev/icons?i=linux&theme=dark&perline=15"
            alt="Linux Icon"
            className="w-20 hover:scale-110 transition-transform"
          />
          <span>Linux</span>
        </div>

        <div className="flex items-center gap-3 flex-col text-lg">
          <img
            src="https://skillicons.dev/icons?i=tailwind&theme=dark&perline=15"
            alt="Tailwind Icon"
            className="w-20 hover:scale-110 transition-transform"
          />
          <span>Tailwind</span>
        </div>

        <div className="flex items-center gap-3 flex-col text-lg">
          <img
            src="https://skillicons.dev/icons?i=figma&theme=dark&perline=15"
            alt="Figma Icon"
            className="w-20 hover:scale-110 transition-transform"
          />
          <span>Figma</span>
        </div>

        <div className="flex items-center gap-3 flex-col text-lg">
          <img
            src="https://skillicons.dev/icons?i=firebase&theme=dark&perline=15"
            alt="Firebase Icon"
            className="w-20 hover:scale-110 transition-transform"
          />
          <span>Firebase</span>
        </div>

        <div className="flex items-center gap-3 flex-col text-lg">
          <img
            src="https://skillicons.dev/icons?i=html&theme=dark&perline=15"
            alt="Html Icon"
            className="w-20 hover:scale-110 transition-transform"
          />
          <span>Html</span>
        </div>
      </div>
    </div>
  );
};

export default Skills;
