import { useEffect } from "react"
import projectsRaw from "../../projects.json"
import { ProjectData } from '../../interfaces/ProjectData'
import { Project } from '../molecules/Project'
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { useHistory } from "react-router-dom";

const projectsData: ProjectData[] = projectsRaw;

export const Projects = () => {

    useEffect(() => {
        console.log(projectsData)
    }, [])

    const history = useHistory()

    return (
        <div className="w-full flex justify-center">
            <div className="flex flex-col space-y-4 max-w-5xl w-full items-center">
                <div className="flex justify-between w-full items-center">
                    <div className="cursor-pointer hover:bg-gray-600 rounded-md transition delay-75 ease-in w-8" onClick={() => history.push('/')}>
                        <ArrowBackIcon fontSize="large" className="text-white" />
                    </div>
                    <span className="text-7xl text-function my-10">Projects</span>
                    <span className="w-8"></span>
                </div>
                {projectsData.map(item => (
                    <Project data={item} />
                ))}
            </div>
        </div>
        
    );
}