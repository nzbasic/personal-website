import { docker, graphql, mongodb, nestjs, react, tailwindcss, typescript } from './../technology';
import { Technology } from "../../types/project";
import { Project } from '../projects';
import { contentUrl } from '../env';

export const technologies: Technology[] = [
  react, tailwindcss, typescript, mongodb, docker, graphql, nestjs
];

export const time: Project = {
  name: "PlatformPi Time Tracker",
  shortName: "Time Tracker",
  link: "#projects-time-tracker",
  logo: contentUrl + "/logos/time.svg",
  bg: "bg-violet-800",
  technologies: [{ list: technologies }],
  screenshots: [
    contentUrl + "/screenshots/time/Supervisor-Approvals-And-Chat.png",
    contentUrl + "/screenshots/time/Supervisor-Dashboard.png",
    contentUrl + "/screenshots/time/Supervisor-Entries.png",
    contentUrl + "/screenshots/time/Employee-Dashboard-And-Notifications.png",
    contentUrl + "/screenshots/time/Employee-Timesheet.png",
    contentUrl + "/screenshots/time/Org-Admin-Management.png",
  ],
  contentBlocks: [
    {
      title: "Description",
      type: "text",
      content: [
        "An employee time tracking tool built for a client's business (TechTALK, PlatformPi).",
        "The application allows users to sign up, create their own organisations, invite employees, assign supervisors, and submit and manage time sheets."
      ],
    },
    {
      title: "Role",
      type: "text",
      content: [
        "Scrum Master and Fullstack Developer"
      ]
    },
    { 
      title: "Challenges",
      type: "text",
      content: [
        "As the scrum master, it was my responsibility to plan and run sprints for my team of 8 developers (including myself). It was the first time I had taken this type of role which resulted in a pretty rough start. Planning enough tickets for each developer on the team each week was quite difficult so I had to spent a lot of time each sprint in backlog grooming.",
        "I also had two members of the team who did very little work and were hard to communicate with and their membership on the team was out of my control. This resulted in me and one other developer picking up all of the extra work which added more stress to the team."
      ],
    },
    {
      title: "Contributions",
      type: "bullet",
      content: [
        "Live chat system using WebSockets",
        "Support for multiple organizations",
        "Time sheet entry approval and editing system",
        "Deployment"
      ],
    },
    { 
      title: "Lessons Learned",
      type: "bullet",
      content: [
        "Sometimes you just have to put up with people who are hard to deal with.",
        "GraphQL is a cool technology but the initial setup cost is very high."
      ]
    },
  ]
}

