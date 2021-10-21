import { Accordion, AccordionDetails, AccordionSummary, makeStyles } from '@material-ui/core'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import React from 'react'
import { ProjectData } from '../../interfaces/ProjectData'

const useStyles = makeStyles({
    root: {
        width: "100%",
        backgroundColor: "#192227",
        '&::before': {
            backgroundColor: "#192227"
        }
    },
   
})

export const Project = ({ data }: { data: ProjectData }) => {
    const classes = useStyles()

    return (
        <Accordion className={classes.root} >
            <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
                className="bg-gray-600"
            >
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
                                {data.technologies.map(item => (
                                    <img src={item} alt="tech badge" className="mr-4" />
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </AccordionSummary>
            <AccordionDetails className="flex flex-col">
                <div>
                    <span>{data.name}</span>
                </div>
            </AccordionDetails>
        </Accordion>
    )
}