import { graphql } from './../technology';
import { Technology } from "../../types/project";
import { docker, go, nestjs, nextjs, nginx, python, typescript } from "../technology";
import { Project } from '../projects';
import { contentUrl } from '../env';

export const technologies: Technology[] = [
  nextjs, nestjs, typescript, go, docker, nginx, python, graphql
];

export const simex: Project = {
  name: "Simulate Exchange",
  shortName: "Simulate Exchange",
  link: "#projects-simulate-exchange",
  logo: contentUrl + "/logos/simex.png",
  repo: "https://github.com/UOA-CS732-SE750-Students-2022/project-group-magenta-mice",
  bg: "bg-monokai-light",
  technologies: [{ list: technologies }],
  screenshots: [
    contentUrl + "/screenshots/simex/Dashboard.png",
    contentUrl + "/screenshots/simex/Architecture.png"
  ],
  contentBlocks: [
    {
      title: "Description",
      type: "text",
      content: [
        "A stock exchange simulation tool for practicing with high frequency trading bots.",
        "The website provided a way to create an isolated exchange with custom trading instruments with the option of inviting other users to compete on a leaderboard."
      ],
    },
    {
      title: "Role",
      type: "text",
      content: [
        "System Architect and Frontend Developer."
      ]
    },
    { 
      title: "Motivation",
      type: "text",
      content: [
        "We had just previously in an online automated trading competition held by Jane Street and we had a lot of fun, so we wanted to build our own exchange simulation tool. When a university project came up where we had full control over the groups, tech stack, and project idea, we thought it was a great opportunity to develop the tool.",
      ],
    },
    { 
      title: "Challenges",
      type: "text",
      content: [
        "The stack for this application was quite insane. An exchange matching engine was developed in C++, a trade generator in Python, and the website in Typescript/NestJs/NextJs. Each exchange required its own matching engine and trade generator which would need to be publicly exposed and only accessible by a user",
        "As the system architect, it was my job to design a system to make all of these services work, communicate, and scale together. To achieve this, I developed an orchestrator application that would act as an internal service and would communicate with the Docker API to scale the containers for the exchanges and then report back to the client with connection information."
      ],
    },
    {
      title: "Contributions",
      type: "bullet",
      content: [
        "System architecture design",
        "Docker orchestration tool",
        "Deployment",
        "Frontend dashboard design and development"
      ],
    },
    { 
      title: "Lessons Learned",
      type: "bullet",
      content: [
        "Going overboard and over engineering a solution can be fun with the right people."
      ]
    },
  ]
}
