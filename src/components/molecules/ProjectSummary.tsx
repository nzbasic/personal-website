import { ProjectData } from "../../interfaces/ProjectData"

export const ProjectSummary = ({ data }: { data: ProjectData }) => { 

    return (
        <div className="flex items-center">
            <img src={data.icon} alt="logo" height="100" width="100" />
            <div className="flex flex-col ml-8 space-y-2">
                <div className="flex items-center">
                    <span className="font-semibold">{data.name}</span>
                    {data.uni && <span className="italic ml-2">*University Project</span>}
                </div>
                <span>{data.description}</span>
                {data.technologies && (
                    <div className="flex items-center">
                        {data.technologies.map((item, index) => (
                            <img key={index} src={item} alt="tech badge" className="mr-4" />
                        ))}
                    </div>
                )}
            </div>
        </div>
    )
}