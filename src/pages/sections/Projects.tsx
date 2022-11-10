import { HashSection } from "../../components/layout/HashSection";
import { GenericProjectWrapper } from "../../projects/GenericProjectWrapper";
import { projects } from "../../resources/projects";

export const Projects = () => {
  return (
    <div className="flex flex-col z-20 bg-monokai-dark text-white">
      <HashSection hash="#projects" className="my-12">
        <h1 className="text-center">Projects</h1>
      </HashSection>   

      {projects.map(project => (
        <HashSection key={project.name} hash={project.link}>
          <GenericProjectWrapper data={project} />
        </HashSection>  
      ))}
    </div>
  )
};
