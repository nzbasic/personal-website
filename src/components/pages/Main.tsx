import React, { useState } from "react";
import { MenuButton } from "../atoms/MenuButton";
import Typist from "react-typist";
import "../../css/Main.css";
// @ts-ignore
import CV from  "../../jamescvnophone.pdf"; 
import { Projects } from "./Projects";
import { About } from "./About";
import { Animated } from "react-animated-css"

enum Pages {
  HOME,
  PROJECTS,
  ABOUT
}

export const Main = () => {
  const [firstTransition, setFirstTransition] = useState(false);
  const [secondTransition, setSecondTransition] = useState(false);
  const [shownPage, setShownPage] = useState(Pages.HOME)
  const [animatedPage, setAnimatedPage] = useState(Pages.HOME)

  const cursor = {
    hideWhenDone: true,
    hideWhenDoneDelay: 0,
  };

  const toggleView = (page: Pages, origin: Pages) => {

    // page -> home = home goes up, then page goes up
    // home -> page = page goes down, home goes down

    // swapping pages, animate out origin, hide origin, show new, animate in new

    if (page === Pages.HOME) {
      window.history.pushState('data', "Home", "/");
    } else if (page === Pages.PROJECTS) {
      window.history.pushState('data', "Projects", "/projects");
    } else if (page === Pages.ABOUT) {
      window.history.pushState('data', "About", "/about");
    }

    // need to set the animated component visible to false, then change the page
  
    setAnimatedPage(page)
    setTimeout(() => {
      setShownPage(page)
    }, 500)

  }

  return (
    <div id="home-container" className="min-h-screen h-full bg-bglight flex justify-center text-xl md:text-4xl select-none">
      <div id="main" className={`${shownPage === Pages.HOME ? "flex flex-col" : "hidden"} h-full  items-center`}>
        <Animated className="h-full flex flex-col justify-center min-h-screen" animateOnMount={false} animationIn="slideInDown" animationOut="slideOutUp" animationInDuration={500} animationOutDuration={500} isVisible={animatedPage === Pages.HOME}>
          <div className="flex flex-col">
            <div className="flex px-2 py-1">
              <div className={`${firstTransition ? "text-function italic" : "text-white"}`}>
                <Typist startDelay={500} cursor={cursor} onTypingDone={() => setFirstTransition(true)}>
                  <span>james</span>
                </Typist>
              </div>
              <div className={`${firstTransition ? "block" : "invisible"}`}>
                <Typist avgTypingDelay={100} startDelay={1300} cursor={cursor} onTypingDone={() => setSecondTransition(true)}>
                  <span className="text-declaration">&nbsp;Coppard</span>
                  <span className="text-keyword ml-2">=</span>
                  <span className="text-bracket ml-2">()</span>
                  <span className="text-function ml-2">⇒</span>
                  <span className="text-bracket ml-2">&#123;</span>
                </Typist>
              </div>
            </div>
            
            <div className={`${secondTransition ? "block" : "invisible"}`}>
              <Typist startDelay={2500} cursor={{ hideWhenDone: true, hideWhenDoneDelay: 500 }}>
                <span className="text-keyword pl-6">return (</span><br></br>
                <MenuButton onClick={() => toggleView(Pages.ABOUT, Pages.HOME)}>&#60;About Me /&#62;</MenuButton><br></br>
                <MenuButton onClick={() => toggleView(Pages.PROJECTS, Pages.HOME)}>&#60;Projects /&#62;</MenuButton><br></br>
                <MenuButton onClick={() => window.open(CV)}>&#60;Resume /&#62;</MenuButton><br></br>
                <span className="text-keyword pl-6">)</span>
                <span className="text-white">;</span>
                <Typist.Delay ms={200} /><br></br>
                <span className="text-bracket">&#125;</span>
              </Typist>
            </div>
          </div>
        </Animated>
      </div>
      <div id="projects" className={`${shownPage === Pages.PROJECTS ? "flex flex-col" : "hidden"} min-h-screen h-full items-center`}>
        <Animated className="h-full flex flex-col justify-center min-h-screen" animateOnMount={false} animationIn="slideInUp" animationOut="slideOutDown" animationInDuration={500} animationOutDuration={500} isVisible={animatedPage === Pages.PROJECTS}>
          <Projects callback={() => toggleView(Pages.HOME, Pages.PROJECTS)}/>
        </Animated>
      </div>
      <div id="about" className={`${shownPage === Pages.ABOUT ? "flex flex-col" : "hidden"}  h-full items-center`}>
        <Animated className="h-full flex flex-col justify-center min-h-screen" animateOnMount={false} animationIn="slideInUp" animationOut="slideOutDown" animationInDuration={500} animationOutDuration={500} isVisible={animatedPage === Pages.ABOUT}>
          <About callback={() => toggleView(Pages.HOME, Pages.ABOUT)}/>
        </Animated>
      </div>
    </div>
  );
}
