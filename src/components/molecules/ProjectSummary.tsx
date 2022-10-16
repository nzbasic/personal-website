import { ProjectData } from "../../types/ProjectData"

export const ProjectSummary = ({ data }: { data: ProjectData }) => { 
  return (
    <div className="flex items-center">
      <img src={data.icon} alt="logo" className="w-12 h-12 md:w-32 md:h-32" />
      <div className="flex flex-col ml-4 md:ml-8 space-y-2">
        <div className="flex items-center">
          <span className="font-semibold text-sm md:text-base">{data.name}</span>
          {data.uni && <span className="italic ml-2 text-xs">*Uni Project</span>}
        </div>
        <span className="text-xs md:text-base">{data.description}</span>
        {data.technologies && (
          <div className="md:flex flex-wrap items-center hidden gap-2">
            {data.technologies.map((item, index) => (
              <img key={index} src={item} alt="tech badge"  />
            ))}
          </div>
        )}
      </div>
    </div>
  )
};
