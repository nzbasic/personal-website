export interface ProjectData {
    name: string,
    icon: string,
    description: string,
    uni?: boolean,
    technologies?: string[],
    users?: string,
    link: string,
    longDescription?: string,
    features?: string[],
    screenshots?: Screenshot[]
}

interface Screenshot {
    title: string,
    link: string
}