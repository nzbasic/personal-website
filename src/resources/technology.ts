import { Technology, TechnologyEnjoyment } from "../types/project";
import { contentUrl } from "./env";

export const angular: Technology = { 
  title: "Angular",   
  imageUrl: contentUrl + "/logos/angular.svg",
  type: "Frontend",
}

export const cs: Technology = {
  title: "C#",
  imageUrl: contentUrl + "/logos/csharp.png",
  type: "Fullstack",
  background: "#fff",
}

export const docker: Technology = {
  title: "Docker",
  imageUrl: contentUrl + "/logos/docker.png",
  type: "DevOps",
}

export const go: Technology = {
  title: "Go",
  imageUrl: contentUrl + "/logos/go.png",
  type: "Backend",
}

export const graphql: Technology = {
  title: "GraphQL",
  imageUrl: contentUrl + "/logos/graphql.svg",
  type: "Fullstack",
}

export const java: Technology = {
  title: "Java",
  imageUrl: contentUrl + "/logos/java.svg",
  type: "Backend",
  background: "#fff",
}

export const javascript: Technology = {
  title: "JavaScript",
  imageUrl: contentUrl + "/logos/javascript.png",
  type: "Fullstack",
}

export const kubernetes: Technology = {
  title: "Kubernetes",
  imageUrl: contentUrl + "/logos/kubernetes.svg",
  type: "DevOps",
}

export const mongodb: Technology = {
  title: "MongoDB",
  imageUrl: contentUrl + "/logos/mongodb.png",
  type: "Database",
  background: "#fff",
}

export const nestjs: Technology = {
  title: "NestJs",
  imageUrl: contentUrl + "/logos/nestjs.svg",
  type: "Backend",
}

export const nextjs: Technology = {
  title: "NextJs",
  imageUrl: contentUrl + "/logos/nextjs.svg",
  type: "Frontend",
  background: "#fff",
}

export const nginx: Technology = {
  title: "Nginx",
  imageUrl: contentUrl + "/logos/nginx.png",
  type: "DevOps",
}

export const nodejs: Technology = {
  title: "NodeJs",
  imageUrl: contentUrl + "/logos/nodejs.svg",
  type: "Backend",
}

export const python: Technology = {
  title: "Python",
  imageUrl: contentUrl + "/logos/python.svg",
  type: "Backend",
  background: "#fff",
}

export const react: Technology = {
  title: "React",
  imageUrl: contentUrl + "/logos/react.svg",
  type: "Frontend",
}

export const sqlite: Technology = {
  title: "SQLite",
  imageUrl: contentUrl + "/logos/sqlite.svg",
  type: "Database",
}

export const tailwindcss: Technology = {
  title: "TailwindCSS",
  imageUrl: contentUrl + "/logos/tailwind.svg",
  type: "Frontend",
}

export const typescript: Technology = {
  title: "TypeScript",
  imageUrl: contentUrl + "/logos/typescript.svg",
  type: "Fullstack",
}

export const electron: Technology = {
  title: "Electron",
  imageUrl: contentUrl + "/logos/electron.svg",
  type: "Backend",
}

export const r2: Technology = {
  title: "Cloudflare R2",
  imageUrl: contentUrl + "/logos/cloudflare.png",
  type: "Database",
}

export const data: TechnologyEnjoyment[] = [
  { 
    ...angular,
    experience: 50,
    enjoyment: 50,
    circle: true,
  },
  {
    ...cs,
    experience: 25,
    enjoyment: 60,
  },
  {
    ...docker,
    experience: 75,
    enjoyment: 90,
    circle: true,
  },
  {
    ...go,
    experience: 65,
    enjoyment: 75,
    circle: true,
  },
  {
    ...graphql,
    experience: 40,
    enjoyment: 30,
    circle: true,
  },
  {
    ...java,
    experience: 70,
    enjoyment: 60,
  },
  {
   ...javascript,
    experience: 100,
    enjoyment: 50,
  },
  {
    ...kubernetes,
    experience: 20,
    enjoyment: 25,
    circle: true,
  },
  {
    ...mongodb,
    experience: 83,
    enjoyment: 80,
  },
  {
    ...nestjs,
    experience: 35,
    enjoyment: 50,
    circle: true,
  },
  {
    ...nextjs,
    experience: 55,
    enjoyment: 65,
  },
  {
    ...nginx,
    experience: 75,
    enjoyment: 70,
    circle: true,
  },
  { 
    ...nodejs,
    experience: 90,
    enjoyment: 70,
  },
  {
    ...python,
    experience: 60,
    enjoyment: 20,
  },
  {
    ...react,
    experience: 101,
    enjoyment: 87,
    circle: true,
  },
  {
    ...sqlite,
    experience: 60,
    enjoyment: 50,
  },
  { 
    ...tailwindcss,
    experience: 93,
    enjoyment: 87,
    circle: true,
  },
  {
    ...typescript,
    experience: 97,
    enjoyment: 100,
  },
];
