import React from "react"
import { PageTitle } from "../atoms/PageTitle";
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TwitterIcon from '@material-ui/icons/Twitter'
import FavoriteIcon from '@material-ui/icons/Favorite';

export const About = ({ callback }: { callback?: () => void }) => {
  return (
    <div className="w-full flex justify-center pb-4 text-base">
      <div className="flex flex-col space-y-4 md:max-w-5xl px-4 w-full items-center text-white">
        <PageTitle title="About Me" callback={callback} />
        <div className="flex flex-col">
          <h2 className="mb-2 text-xl font-semibold">Overview</h2>
          <p className="mb-4">Hi, I am an engineering student at the University of Auckland specializing in software and graduating in 2022. In my free time I am an open-source developer and write full-stack apps with modern frameworks (React, Angular, Electron, etc) to learn and to make apps that others can get use out of (hopefully!). The three apps that I maintain were very large projects that I made to fill a gap in a community that I am a part of. Giving back to the people that have helped me is very fulfilling and always inspires me to make the best apps that I can. I make my apps with other developers in mind so I make sure they have extensive documentation and public-facing APIs.</p>
      
          <div className="flex items-center gap-2 mb-4">
            <FavoriteIcon />
            <span>Material Monokai</span>
          </div>

          <h2 className="mb-2 text-xl font-semibold">Proficient Technologies</h2>
          <div className="flex flex-wrap gap-2 mb-4">
            <img alt="Typescript" src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" />
            <img alt="Java" src="https://img.shields.io/badge/Java-ED8B00?style=for-the-badge&logo=java&logoColor=white" />
            <img alt="JavaScript" src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" />
            <img alt="Golang" src="https://img.shields.io/badge/Go-00ADD8?style=for-the-badge&logo=go&logoColor=white" />
            <img alt="Node.js" src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white" />
            <img alt="React" src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" />
            <img alt="Angular" src="https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white" />
            <img alt="Electron" src="https://img.shields.io/badge/Electron-2B2E3A?style=for-the-badge&logo=electron&logoColor=9FEAF9" />
            <img alt="SQLite" src="https://img.shields.io/badge/SQLite-07405E?style=for-the-badge&logo=sqlite&logoColor=white" />
            <img alt="MongoDB" src="https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white" />
            <img alt="Docker" src="https://img.shields.io/badge/Docker-2CA5E0?style=for-the-badge&logo=docker&logoColor=white" />
            <img alt="Tailwind CSS" src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" />
          </div>

          <h2 className="mb-2 text-xl font-semibold">Familiar Technologies</h2>
          <div className="flex flex-wrap gap-2 mb-4">
            <img alt="Python" src="https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white" />
            <img alt="C#" src="https://img.shields.io/badge/C%23-239120?style=for-the-badge&logo=c-sharp&logoColor=white" />
            <img alt="Kubernetes" src="https://img.shields.io/badge/kubernetes-326ce5.svg?&style=for-the-badge&logo=kubernetes&logoColor=white" />
            <img alt="Firebase" src="https://img.shields.io/badge/firebase-ffca28?style=for-the-badge&logo=firebase&logoColor=black" />
          </div>

          <h2 className="mb-2 text-xl font-semibold">Hobbies</h2>
          <p className="mb-1"><span className="font-semibold mr-1">osu!:</span>A rhythm game with a very active community, especially in NZ. What makes the game amazing is the public API that I have made heavy use of for my projects which has been a catalyst for a lot of learning.</p>
          <p className="mb-1"><span className="font-semibold mr-1">Projects:</span>My software projects are some of the only things that I can just sink into and forget about everything else.</p>
          <p className="mb-1"><span className="font-semibold mr-1">Keyboards:</span>I am a serial collector/hoarder (a.k.a bad with money 🤭) and most of that energy goes into building keyboards. You can probably find me chatting in keyboard discords or at meetups!</p>
          <h2 className="mb-2 text-xl font-semibold">Socials</h2>
          <div className="flex space-x-2">
            <LinkedInIcon className="cursor-pointer" onClick={() => window.open("https://linkedin.com/in/jamescoppard024")} />
            <TwitterIcon className="cursor-pointer" onClick={() => window.open("https://twitter.com/nzbasic")}/>
          </div>
        </div>
      </div>
    </div>
  )
}