import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { useHistory } from "react-router-dom";


export const PageTitle = ({ title, callback }: { title: string, callback: () => void }) => { 
    const history = useHistory()

    const back = () => {
        if (callback) {
            callback()
        } else {
            history.push('/')
        }        
    }

    return (
        <div className={`${!!callback ? "" : "mt-10"} flex justify-between w-full items-center my-10`}>
            <div className="cursor-pointer hover:bg-gray-600 rounded-md transition delay-75 ease-in w-8" onClick={() => back()}>
                <ArrowBackIcon fontSize="large" className="text-white" />
            </div>
            <span className="md:text-7xl text-function text-5xl">{title}</span>
            <span className="w-8"></span>
        </div>
    )
}