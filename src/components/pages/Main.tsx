import React, { useState } from "react";
import MenuButton from "../atoms/MenuButton";
import Typist from "react-typist";
import "../../css/Main.css";
// @ts-ignore
import CV from  "../../jamescvnophone.pdf"; 

export default function Main2() {
  const [firstTransition, setFirstTransition] = useState(false);
  const [secondTransition, setSecondTransition] = useState(false);

  const cursor = {
    hideWhenDone: true,
    hideWhenDoneDelay: 0,
  };

  return (
    <div className="h-screen bg-bglight flex flex-col justify-center text-xl md:text-4xl select-none">
      <div className="self-center p-2 m-2">
        <div className="flex px-2 py-1">
          <div
            className={`${
              firstTransition ? "text-function italic" : "text-white"
            }`}
          >
            <Typist
              startDelay={500}
              cursor={cursor}
              onTypingDone={() => setFirstTransition(true)}
            >
              <span>james</span>
            </Typist>
          </div>
          <div className={`${firstTransition ? "block" : "invisible"}`}>
            <Typist
              startDelay={1300}
              cursor={cursor}
              onTypingDone={() => setSecondTransition(true)}
            >
              <span className="text-declaration">&nbsp;Coppard</span>
              <span className="text-bracket">() &#123;</span>
            </Typist>
          </div>
        </div>

        <div className={`${secondTransition ? "block" : "invisible"}`}>
          <Typist
            startDelay={2500}
            cursor={{ hideWhenDone: true, hideWhenDoneDelay: 500 }}
          >
            <br></br>
            <span className="text-keyword pl-6">return (</span>
            <br></br>
            <MenuButton
              onClick={() =>
                window.open(
                  "https://github.com/nzbasic?tab=repositories",
                  "_blank"
                )
              }
            >
              &#60;Projects /&#62;
            </MenuButton>
            <br></br>
            <MenuButton onClick={() => window.open(CV)}>
              &#60;Resume /&#62;
            </MenuButton>
            <br></br>
            <MenuButton
              onClick={() => window.open("https://wiki.nzbasic.com", "_blank")}
            >
              &#60;Documentation /&#62;
            </MenuButton>
            <br></br>
            <span className="text-keyword pl-6">)</span>
            <span className="text-white">;</span>
            <Typist.Delay ms={200} />
            <br></br>
            <br></br>
            <span className="text-bracket">&#125;</span>
          </Typist>
        </div>
      </div>
    </div>
  );
}
