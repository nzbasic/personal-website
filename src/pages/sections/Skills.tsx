import { data } from '../../resources/technology';
import { ResponsiveContainer } from '../../components/graph/ResponsiveContainer';
import { TechnologyChartMemo } from '../../components/graph/TechnologyChart';
import { Technologies } from '../../components/Technologies';

export const Skills = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-between gap-8 z-20 bg-sky-700 text-white p-8 lg:p-16">
      <div className="flex flex-col gap-4">
        <div>
          <h1>Skills</h1>
          
          <div>
            <h3>Leadership</h3>
            <p>wa wa wa wa</p>
          </div>
        </div>
        
        <div>
          <h1>Education</h1>
          <h3>Bachelor of Engineering (Hons) - Software Engineering - University of Auckland</h3>
        </div>

        <div>
          <h1>Awards</h1>
          <ul className="list-disc">
            <li>UoA Engineering Final Project Winner (Web Tools & Applications)</li>
          </ul>
        </div>

        <div>
          <h1>Hobbies</h1>
          <ul className="list-disc">
            <li>Yoga</li>
            <li>Rhythm Games</li>
            <li>Custom Keyboards</li>
            <li>Software Projects</li>
          </ul>
        </div>
      </div>

      <div className="flex flex-col items-start gap-4 alt-col-width">
        <div className="w-full flex flex-col gap-8 mb-6">
          <div className="flex flex-col gap-2">
            <h2>Here are the technologies I use regularly</h2>
            <span>Updated October 2022</span>
          </div>
          <Technologies data={data} />
        </div>

        <div className="flex flex-col h-72 lg:h-96 w-full min-w-0">
          <div className="flex h-full min-w-0 relative">
            <div style={{ writingMode: 'vertical-rl' }} className="absolute rotate-180 text-center -left-6 top-24 lg:top-36">Enjoyment</div>
            <ResponsiveContainer className="h-full w-full rounded-xl border-2 border-function bg-monokai-dark">
              <TechnologyChartMemo />
            </ResponsiveContainer>
          </div>
          <div className="text-center pl-6">Experience</div>
        </div>
      </div>
    </div>
  )
};

