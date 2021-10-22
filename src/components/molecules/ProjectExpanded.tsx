import { ProjectData } from "../../interfaces/ProjectData"
import React from "react"
import { ImageCarousel } from "./ImageCarousel"
import { StoryText } from "../atoms/StoryText"

export const ProjectExpanded = ({ data }: { data: ProjectData }) => { 

    return (
        <div className="p-2 md:p-4 flex flex-col">
            <span className="mb-2">{data.longDescription}</span>
            <div className="flex items-center space-x-2 mb-4">
                {data.website ? 
                    <a className="text-blue-400 text-xl hover:underline font-semibold" href={data.link} target="_blank" rel="noreferrer">Website</a> :
                    <a className="text-blue-400 text-xl hover:underline font-semibold" href={data.link} target="_blank" rel="noreferrer">Release</a>
                }
                <span>•</span>
                <a className=" text-blue-400 text-xl hover:underline font-semibold" href={data.repo} target="_blank" rel="noreferrer">Repo</a>
            </div>
            <span className="text-lg font-semibold">Features:</span>
            <ul className="mb-4">
                {(data?.features??[]).map((item, index) => (
                    <li key={index} className="list-disc">{item}</li>
                ))}
            </ul>
            <StoryText title="Story" text={data.story??""} />
            <StoryText className="mt-2" title="Challenges I faced" text={data.challenges??""} />
            <StoryText className="mt-2" title="What I learned" text={data.learned??""} />
            <StoryText className="mt-2" title="Improvements to be made" text={data.improvements??""} />
            <StoryText className="mt-2" title="Other comments" text={data.comments??""} />
            <span className="text-center my-2 text-lg font-semibold">Screenshots</span>
            <ImageCarousel images={data.screenshots} />
        </div>
    )
}