import profile3 from "../../assets/profile-3.jpg";

const AboutMe = () => {
  return (
    <div id="about" className="bg-slate-900 mt-20 px-40 py-20">
      <div className="flex justify-center items-center text-gray-300 ">
        <p className="bg-gray-600 py-1 px-4 rounded-2xl">About Me</p>
      </div>
      <div className="flex mt-15">
        <div className="w-1/2 relative">
          <div className="relative w-90">
            <img
              src={profile3}
              alt="Profile"
              className="relative z-10 w-90 rounded"
            />
            <div className="absolute -left-11 -bottom-11 h-110 w-90 border-35 border-slate-600 border-r-0 border-t-0 z-20" />
          </div>
        </div>
        <div className=" w-1/2 pl-2">
          <h2 className="text-white text-3xl font-semibold mb-5">
            Curious about me? Here you have it:
          </h2>
          <p className="text-gray-400">
            I'm a passionate, self-proclaimed designer who specializes in full
            stack development (React.js & Node.js). I am enthusiastic about
            bringing the technical and visual aspects of digital products to
            life. User experience, pixel perfect design, and writing clear,
            readable, highly performant code matters to me.
            <br />
            <br />I started my journey as a web developer in 2025, driven by
            curiosity and a strong desire to build things for the web. Since
            then, I’ve been continuously improving my skills, exploring modern
            technologies, and challenging myself with real-world projects.
            Today, I focus on building responsive and scalable web applications
            using tools like Next.js, TypeScript, Tailwind CSS, Supabase, and
            other modern technologies. I’m passionate about writing clean,
            maintainable code and constantly learning to become a better
            developer every day.
            <br />
            <br />
            I enjoy building products end to end from idea to deployment. I love
            turning concepts into real, functional experiences and constantly
            improving my craft. Outside of coding, I follow startup journeys and
            share what I’m learning. You can connect with me on Facebook or
            check out my work on GitHub.
            <br />
            <br />
            Finally, some quick bits about me.
            <br />
            <br />
            <ul className="list-disc pl-4">
              <li>2nd Year Computer Science Student</li>
              <li>Part-Time Web Developer</li>
            </ul>
            <br />
            One last thing, I'm available for freelance work, so feel free to
            reach out and say hello! I promise I don't bite 😉
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
