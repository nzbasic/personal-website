import { mongodb, typescript, nodejs, react, tailwindcss, docker } from './../technology';
import { Technology } from "../../types/project";
import { Project } from "../projects";

export const technologies: Technology[] = [
  mongodb, typescript, nodejs, react, tailwindcss, docker
];

export const snipe: Project = {
  name: "snipe.nz",
  shortName: "snipe.nz",
  link: "#projects-snipe-nz",
  repo: "https://github.com/nzbasic/snipe.nz",
  deployment: "https://snipe.nz",
  logo: "snipe.png",
  bg: "bg-pink-700",
  technologies: [{ list: technologies }],
  screenshots: [],
  contentBlocks: []
}
