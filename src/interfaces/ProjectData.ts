export interface ProjectData {
    name: string,
    icon: string,
    description: string,
    uni?: boolean,
    technologies: string[],
    website: boolean,
    users?: string,
    link: string,
    repo: string,
    longDescription: string,
    story?: string,
    challenges?: string,
    learned?: string,
    improvements?: string,
    comments?: string,
    features: string[],
    screenshots: Screenshot[]
}

export interface Screenshot {
    title: string,
    link: string
}