import { ch } from './projects/ch';
import { time } from './projects/time';
import { Technology } from "../types/project";
import { mpd } from "./projects/mpd";
import { osuTracker } from "./projects/osutracker";
import { simex } from "./projects/simex";
import { bbd } from './projects/bbd';

export interface ContentBlock {
  title: string;
  type: "text" | "bullet"
  content: string[];
}

export type Technologies = {
  title?: string;
  list: Technology[];
}

export interface Project {
  name: string;
  shortName: string;
  link: string;
  logo: string;
  bg: string;
  repo?: string;
  deployment?: string;
  technologies: Technologies[];
  contentBlocks: ContentBlock[];
  screenshots: string[];
  custom?: JSX.Element[];
}

export const projects: Project[] = [
  bbd,
  osuTracker,
  mpd,
  simex,
  time,
  ch
]