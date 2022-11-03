import { HashSection } from "../components/layout/HashSection";
import { About } from "./sections/About";
import { Projects } from "./sections/Projects";
import { Skills } from "./sections/Skills";

export const Home = () => {
  return (
    <div className="w-full min-h-screen flex flex-col">
      <HashSection hash="#about" className="z-50" initial>
        <About />
      </HashSection>
      <HashSection hash="#skills">
        <Skills />
      </HashSection>
      <HashSection hash="#projects">
        <Projects />
      </HashSection>
    </div>
  )
};
