import { contentUrl } from '../env';
import { Technology } from "../../types/project";
import { electron, react, tailwindcss, typescript, go, sqlite, r2, docker } from "../technology";
import { Project } from '../projects';
import { Status } from '../../components/bbd/Status';

export const applicationTechnologies: Technology[] = [
  react, tailwindcss, typescript, electron
]

export const apiTechnologies: Technology[] = [
  go, sqlite, r2, docker
]

export const bbd: Project = {
  name: "Batch Beatmap Downloader",
  shortName: "BBD",
  link: "#projects-batch-beatmap-downloader",
  logo: contentUrl + "/logos/bbd.svg",
  repo: "https://github.com/nzbasic/batch-beatmap-downloader",
  bg: "bg-emerald-700",
  technologies: [
    {
      title: "API",
      list: apiTechnologies,
    },
    {
      title: "Application",
      list: applicationTechnologies,
    }
  ],
  screenshots: [
    contentUrl + "/screenshots/bbd/Home.png",
    contentUrl + "/screenshots/bbd/Server-Status.png",
    contentUrl + "/screenshots/bbd/Simple-Query.png",
    contentUrl + "/screenshots/bbd/Advanced-Query.png",
  ],
  contentBlocks: [
    {
      title: "Description",
      type: "text",
      content: [
        "A standalone application and API for mass downloading osu! beatmaps.",
        "The project consists of an API (Golang) and an application (Electron) with visual query builders to make it easy for osu! players to downloads lots of maps that fit a certain criteria.",
      ],
    },
    {
      title: "Role",
      type: "text",
      content: [
        "Sole Developer",
      ],
    },
    {
      title: "Motivation",
      type: "text",
      content: [
        "Outside of a few peer hosted torrents, there was no easy way to download a lot of beatmaps at one time. Users usually download maps one at a time using the osu! client or through the official website which was very arduous.",
      ],
    },
    {
      title: "Challenges",
      type: "text",
      content: [
        "Data egress costs would been enormous if I decided to use a cloud solution such as AWS S3, and Cloudflare R2 was not available at launch. To overcome this initially I decided that the best solution was to host them myself because I already had an excellent internet connection.",
      ],
    },
    {
      title: "Achievements",
      type: "text",
      content: [
        "Serving over 1.5TB of data in a single day",
        "Serving over 2 million beatmap sets in a month",
        "25,000 app downloads",
        "50 stars on GitHub",
      ],
    },
    {
      title: "Takeaways",
      type: "text",
      content: [
        "Cloud egress data rates are extremely expensive.",
        "Hosting yourself and building a server rack is really fun.",
        "Live metrics and analytics are awesome for monitoring a service.",
      ]
    }
  ],
  custom: [
    <div key="status" className="flex flex-col gap-2 w-full">
      <h3>Live Server Status</h3>
      <Status />
    </div>,
  ]
}