import { HashSection } from "../../components/layout/HashSection";
import { BBD } from "../../projects/BBD";
import { CollectionHelper } from "../../projects/CollectionHelper";
import { MaoriPD } from "../../projects/MaoriPD";
import { OsuTracker } from "../../projects/OsuTracker";
import { SimulateExchange } from "../../projects/SimulateExchange";
import { SnipeNZ } from "../../projects/SnipeNZ";
import { TimeTracker } from "../../projects/TimeTracker";

export const Projects = () => {
  return (
    <div className="flex flex-col z-20 bg-monokai-dark text-white">
      <HashSection hash="#projects" className="my-12">
        <h1 className="text-center">Projects</h1>
      </HashSection>   

      <HashSection hash="#projects-bbd">
        <BBD />
      </HashSection>   
       
      <HashSection hash="#projects-osutracker">
        <OsuTracker />  
      </HashSection>  

      <HashSection hash="#projects-maori-pronunciation-dictionary">
        <MaoriPD />  
      </HashSection>  

      <HashSection hash="#projects-simulate-exchange">
        <SimulateExchange />  
      </HashSection>  

      <HashSection hash="#projects-time-tracker">
        <TimeTracker />  
      </HashSection>  

      <HashSection hash="#projects-collection-helper">
        <CollectionHelper />  
      </HashSection>  

      <HashSection hash="#projects-snipe-nz">
        <SnipeNZ />  
      </HashSection>  
    </div>
  )
};
