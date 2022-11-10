import { angular, tailwindcss, electron, sqlite } from './../technology';
import { Technology } from "../../types/project";
import { Project } from '../projects';
import { contentUrl } from '../env';

export const technologies: Technology[] = [
  angular, tailwindcss, electron, sqlite
];

export const ch: Project = {
  name: "Collection Helper",
  shortName: "Collection Helper",
  link: "#projects-collection-helper",
  logo: contentUrl + "/logos/ch.png",
  repo: "https://github.com/nzbasic/Collection-Helper",
  bg: "bg-monokai-light",
  technologies: [{ list: technologies }],
  screenshots: [
    contentUrl + "/screenshots/ch/Collections.png",
    contentUrl + "/screenshots/ch/Custom-Filter.png",
    contentUrl + "/screenshots/ch/Collection-Editing.png"
  ],
  contentBlocks: [
    {
      title: "Description",
      type: "text",
      content: [
        "A collection management application for osu!.",
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
        "I wanted to create a tool that would help me to sort my beatmaps into collections in osu!. I thought it would be cool to have a code editor inside the application that would let people write functions in javascript that could read the contents of a map to decide if it would go in a collection.",
      ],
    },
    { 
      title: "Challenges",
      type: "text",
      content: [
        "When I first developed the application I was using a framework called Wails because I wanted to learn Golang and Angular and I had seen that it would support it. It turned out that Wails uses MSHTML to display web content which is the engine for internet explorer. I had to use hacks everywhere to get modern features to work which ultimately ended up in me swapping to Electron out of frustration.",
        "osu! database files were also written in binary which made it quite awkward to parse with a NodeJs backend"
      ],
    },
    {
      title: "Achievements",
      type: "bullet",
      content: [
        "6k Downloads",
        "Full Russian internationalisation support"
      ],
    },
    { 
      title: "Lessons Learned",
      type: "bullet",
      content: [
        "Angular isn't as bad as people make it out to be",
        "Critically think about framework and language limitations before diving into a project."
      ]
    },
  ]
}
