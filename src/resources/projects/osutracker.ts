import { mongodb, nodejs } from './../technology';
import { Technology } from "../../types/project"
import { react, tailwindcss, typescript, docker } from "../technology";
import { Project } from '../projects';
import { contentUrl } from '../env';

export const technologies: Technology[] = [
  react, tailwindcss, typescript, mongodb, docker, nodejs
];

export const osuTracker: Project = {
  name: "osuTracker",
  shortName: "osuTracker",
  link: "#projects-osutracker",
  logo: contentUrl + "/logos/ot256.png",
  bg: "bg-monokai-light",
  repo: "https://github.com/nzbasic/osutracker",
  deployment: "https://osutracker.com",
  technologies: [{ list: technologies }],
  screenshots: [
    contentUrl + "/screenshots/ot/Home.png",
    contentUrl + "/screenshots/ot/Player-Stats.png",
    contentUrl + "/screenshots/ot/Player-Score-History.png",
    contentUrl + "/screenshots/ot/Country-Stats.png",
    contentUrl + "/screenshots/ot/Country-History.png",
    contentUrl + "/screenshots/ot/Stats.png",
  ],
  contentBlocks: [
    {
      title: "Description",
      type: "text",
      content: [
        "osuTracker is an online web tool that tracks osu! daily statistics of any player who signs up. It also offers a unique overall view of each country, including the top 100 plays history and top 10 players over time.",
      ],
    },
    {
      title: "Role",
      type: "text",
      content: [
        "Sole Developer"
      ]
    },
    { 
      title: "Motivation",
      type: "text",
      content: [
        "Initially I just wanted to track data for a few of my friends so that we could look back later and see our full daily history in osu!. Officially, the website only displays the last 90 day rank history, which misses out on a huge amount of extra data points. After building a simple app for my friends, I realised that there was a huge potential in storing granular data for more players so that in the future I could analyze long term trends.",
      ],
    },
    { 
      title: "Challenges",
      type: "text",
      content: [
        "osuTracker was the first real website that I built for other people to use. I had to learn a great deal about every part of the development process, including frontend, backend and deployment.",
        "The biggest problem I had was scaling against API limitations. osu! only officially allows around 60 requests per minute, and I was scaling to tens of thousands of users while also running other applications for the same API. To solve this, I developed an API proxy and client that would cache requests and make sure that requests from any of my services would not exceed the limits."
      ],
    },
    {
      title: "Achievements",
      type: "bullet",
      content: [
        "25000+ Total users",
        "3000+ Active monthly users",
      ],
    },
    { 
      title: "Lessons Learned",
      type: "bullet",
      content: [
        "Store everything. Storage is cheap and data is powerful.",
        "Use TypeScript.",
        "Cloudflare is awesome for free SSL, analytics and DNS.",
        "You need to use a reverse proxy to host multiple services from one address."
      ]
    },
  ]
}
