import { Accordion, AccordionDetails, AccordionSummary, makeStyles } from '@material-ui/core'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import React from 'react'
import { ProjectData } from '../../interfaces/ProjectData'
import { ProjectExpanded } from './ProjectExpanded';
import { ProjectSummary } from './ProjectSummary';

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
                <ProjectSummary data={data} />
            </AccordionSummary>
            <AccordionDetails className="flex flex-col">
                <ProjectExpanded data={data} />
            </AccordionDetails>
        </Accordion>
    )
}