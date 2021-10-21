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

    const back = () => {
        localStorage.setItem('skip-animation', "true")
        history.push('/')
    }

    return (
        <div className="w-full flex justify-center pb-4">
            <div className="flex flex-col space-y-4 md:max-w-5xl px-4 w-full items-center">
                <div className="flex justify-between w-full items-center my-10">
                    <div className="cursor-pointer hover:bg-gray-600 rounded-md transition delay-75 ease-in w-8" onClick={() => back()}>
                        <ArrowBackIcon fontSize="large" className="text-white" />
                    </div>
                    <span className="md:text-7xl text-function text-5xl">Projects</span>
                    <span className="w-8"></span>
                </div>
                {projectsData.map((item, index) => (
                    <Project key={index} data={item} />
                ))}
            </div>
        </div>
        
    );
}