import { Technology } from "../../types/project";
import { contentUrl } from "../env";
import { Project } from "../projects";
import { docker, go, mongodb, python, react, tailwindcss, typescript } from "../technology";

export const technologies: Technology[] = [
  python, go, react, tailwindcss, typescript, mongodb, docker
];

export const mpd: Project = {
  name: "Māori Pronunciation Dictionary Building Tool",
  shortName: "Māori PD",
  link: "#projects-maori-pronunciation-dictionary",
  logo: contentUrl + "/logos/mpd.png",
  bg: "bg-amber-700",
  technologies: [{ list: technologies }],
  screenshots: [
    contentUrl + "/screenshots/mpd/Browse.png",
    contentUrl + "/screenshots/mpd/Quick-Add.png",
    contentUrl + "/screenshots/mpd/Bulk-Add.png",
    contentUrl + "/screenshots/mpd/Export.png",
    contentUrl + "/screenshots/mpd/API-Docs.png",
  ],
  contentBlocks: [
    {
      title: "Description",
      type: "text",
      content: [
        "The Māori Pronunciation Dictionary Building Tool is a project to create a comprehensive dictionary of Māori words and their pronunciation for use in Text-to-Speech services.",
      ],
    },
    {
      title: "Role",
      type: "text",
      content: [
        "Co-Developer (Two person final year university project)"
      ]
    },
    { 
      title: "Motivation",
      type: "text",
      content: [
        "This project was my final year project for my engineering degree which involved a year of research with a partner. Our motivation was to help in the creation of the first speech synthesis tools for Māori as a way to aid in revitalising the language.",
      ],
    },
    { 
      title: "Challenges",
      type: "text",
      content: [
        "I had no prior experience with the Māori, so I had to spend a great deal of time researching everything about its orthography and phonological rules. Thankfully, Māori pronunciations were usually predictable and followed a simple set of rules.",
      ],
    },
    {
      title: "Achievements",
      type: "bullet",
      content: [
        "Best in category award (Web Tools & Applications) for final year engineering projects at the University of Auckland",
        "95% pronunciation generation accuracy",
      ],
    },
    { 
      title: "Lessons Learned",
      type: "bullet",
      content: [
        "Legacy code is hard to work with and rewriting is worth the time.",
        "You don't need to know a language in order to study its pronunciation rules",
        "Robust drag and drop interfaces are quite hard to build but it is worth it for improved UX."
      ]
    },
  ]
}
