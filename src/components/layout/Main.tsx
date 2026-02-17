import Hero from "../ui/Hero";
import AboutMe from "../ui/AboutMe";
import Skills from "../ui/Skills";
import Experience from "../ui/Experience";
import Projects from "../ui/Projects";

const Main = () => {
  return (
    <main className="py-10">
      <Hero />
      <AboutMe />
      <Skills />
      <Experience />
      <Projects />
    </main>
  );
};

export default Main;
