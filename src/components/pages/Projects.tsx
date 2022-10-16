import projectsRaw from "../../resources/projects.json";
import { ProjectData } from '../../types/ProjectData'
import { Project } from '../molecules/Project'
import { PageTitle } from "../atoms/PageTitle";

const projectsData: ProjectData[] = projectsRaw;

export const Projects = ({ callback }: { callback?: () => void }) => {
  return (
    <div className="w-full flex justify-center pb-4 text-base">
      <div className="flex flex-col space-y-4 md:max-w-5xl px-4 w-full items-center">
        <PageTitle title="Projects" callback={callback} />
        {projectsData.map((item, index) => (
          <Project key={index} data={item} />
        ))}
      </div>
    </div>
  );
}