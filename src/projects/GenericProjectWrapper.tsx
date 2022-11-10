import classNames from "classnames";
import { ImageSlider } from "../components/preview/ImageSlider";
import { RepoLink } from "../components/RepoLink";
import { Technologies } from "../components/Technologies";
import { SectionWrapper } from "../components/util/SectionWrapper";
import { Project } from "../resources/projects";

interface GenericProjectWrapperProps {
  data: Project;
}

export const GenericProjectWrapper = ({ data }: GenericProjectWrapperProps) => {
  return (
    <div className={classNames(data.bg, "flex flex-col xl:flex-row justify-between content-padding content-padding")}>
      <div className="flex flex-col gap-4 items-start">
        <div className="flex items-center gap-4">
          <img src={data.logo} alt="icon" className="w-36" />
          <div className="flex flex-col">
            <h1>{data.name}</h1>
          </div>
        </div>

        {(data.repo || data.deployment) && (
          <div className="flex items-center gap-2">
            {data.repo && <RepoLink link={data.repo} />}
            {data.deployment && <a href={data.deployment} target="_blank" rel="noreferrer" className="link !py-2">Deployment</a>}
          </div>
        )}

        {data.contentBlocks.map(content => (
          <SectionWrapper key={content.title} block={content} />
        ))}
      </div>

      <div className="flex flex-col shrink-0 alt-col-width gap-8">
        <div className="flex flex-col gap-2">
          <h3>Screenshots</h3>
          <ImageSlider images={data.screenshots} />
        </div>

        {data.custom}
        
        {data.technologies.map((app, index) => (
          <div key={index} className="flex flex-col gap-2">
            <h3>Technologies {app.title && '- ' + app.title}</h3>
      
            <Technologies data={app.list} />
          </div>
        ))}
      </div>
    </div>
  )
};