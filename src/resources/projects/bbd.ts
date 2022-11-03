import { MediaSize } from './../../types/project';
import { go, sqlite, r2, docker } from './../technology';
import { ImagePreviewContent, Technology } from "../../types/project";
import { electron, react, tailwindcss, typescript } from "../technology";

export const applicationTechnologies: Technology[] = [
  react, tailwindcss, typescript, electron
]

export const apiTechnologies: Technology[] = [
  go, sqlite, r2, docker
]

export const screenshots: ImagePreviewContent[] = [
  {
    title: 'Server Status',
    dark: [
      {
        width: 854,
        height: 480,
        src: 'https://media.discordapp.net/attachments/893384567975706674/1031072035792769075/unknown.png?width=854&height=480',
        media: MediaSize.xl2
      }
    ],

    light: [
      {
        width: 1280,
        height: 720,
        src: 'https://media.discordapp.net/attachments/893384567975706674/1031071948660289546/unknown.png?width=1280&height=720',
        media: MediaSize.xl2
      }
    ],
  },
  {
    title: 'Advanced Querying',
    dark: [
      {
        width: 1280,
        height: 720,
        src: 'https://media.discordapp.net/attachments/893384567975706674/1031071753339932772/unknown.png?width=1280&height=720',
        media: MediaSize.xl2
      },
    ],
    light: [
      {
        width: 1280,
        height: 720,
        src: 'https://media.discordapp.net/attachments/893384567975706674/1031071881387839509/unknown.png?width=1280&height=720',
        media: MediaSize.xl2
      }
    ]
  },
  {
    title: 'Simple Querying',
    dark: [
      {
        width: 1280,
        height: 720,
        src: 'https://media.discordapp.net/attachments/893384567975706674/1031072207612428328/unknown.png?width=1280&height=720',
        media: MediaSize.xl2
      },
    ],
    light: [
      {
        width: 1280,
        height: 720,
        src: 'https://media.discordapp.net/attachments/893384567975706674/1031072247273750608/unknown.png?width=1280&height=720',
        media: MediaSize.xl2
      }
    ]
  },
]

