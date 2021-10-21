import { ProjectData } from "../../interfaces/ProjectData"
import React from "react"
import { ImageCarousel } from "./ImageCarousel"

export const ProjectExpanded = ({ data }: { data: ProjectData }) => { 

    return (
        <div className="p-4 flex flex-col">
            <span className="mb-2">{data.longDescription}</span>
            <a className="mb-4 text-blue-400 text-xl hover:underline font-semibold" href={data.link} target="_blank" rel="noreferrer">Link</a>
            <span className="text-lg font-semibold">Features:</span>
            <ul className="mb-4">
                {(data?.features??[]).map(item => (
                    <li className="list-disc">{item}</li>
                ))}
            </ul>
            <span className="text-center my-2 text-lg font-semibold">Screenshots</span>
            <ImageCarousel images={data.screenshots} />
        </div>
    )
}