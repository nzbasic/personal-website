import { Technology, TechnologyEnjoyment } from "../types/project";

export const angular: Technology = { 
  title: "Angular",   
  imageUrl: "angular.png",
  type: "Frontend",
}

export const cs: Technology = {
  title: "C#",
  imageUrl: "csharp.png",
  type: "Fullstack",
  background: "#fff",
}

export const docker: Technology = {
  title: "Docker",
  imageUrl: "docker.png",
  type: "DevOps",
}

export const go: Technology = {
  title: "Go",
  imageUrl: "go.png",
  type: "Backend",
}

export const graphql: Technology = {
  title: "GraphQL",
  imageUrl: "graphql.png",
  type: "Fullstack",
}

export const java: Technology = {
  title: "Java",
  imageUrl: "java.png",
  type: "Backend",
  background: "#fff",
}

export const javascript: Technology = {
  title: "JavaScript",
  imageUrl: "javascript.png",
  type: "Fullstack",
}

export const kubernetes: Technology = {
  title: "Kubernetes",
  imageUrl: "kubernetes.png",
  type: "DevOps",
}

export const mongodb: Technology = {
  title: "MongoDB",
  imageUrl: "mongodb.png",
  type: "Database",
  background: "#fff",
}

export const nestjs: Technology = {
  title: "NestJs",
  imageUrl: "nestjs.svg",
  type: "Backend",
}

export const nextjs: Technology = {
  title: "NextJs",
  imageUrl: "nextjs.svg",
  type: "Frontend",
  background: "#fff",
}

export const nginx: Technology = {
  title: "Nginx",
  imageUrl: "nginx.png",
  type: "DevOps",
}

export const python: Technology = {
  title: "Python",
  imageUrl: "python.jpg",
  type: "Backend",
  background: "#fff",
}

export const react: Technology = {
  title: "React",
  imageUrl: "react.png",
  type: "Frontend",
}

export const sqlite: Technology = {
  title: "SQLite",
  imageUrl: "sqlite.png",
  type: "Database",
}

export const tailwindcss: Technology = {
  title: "TailwindCSS",
  imageUrl: "tailwind.png",
  type: "Frontend",
}

export const typescript: Technology = {
  title: "TypeScript",
  imageUrl: "typescript.png",
  type: "Fullstack",
}

export const electron: Technology = {
  title: "Electron",
  imageUrl: "electron.png",
  type: "Backend",
}

export const r2: Technology = {
  title: "Cloudflare R2",
  imageUrl: "cloudflare.png",
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
    experience: 60,
    enjoyment: 70,
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
    experience: 50,
    enjoyment: 70,
  },
  {
   ...javascript,
    experience: 100,
    enjoyment: 20,
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
    experience: 50,
    enjoyment: 20,
  },
  {
    ...nginx,
    experience: 75,
    enjoyment: 70,
    circle: true,
  },
  {
    ...python,
    experience: 60,
    enjoyment: 10,
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
