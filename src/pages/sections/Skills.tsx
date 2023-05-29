import { data } from '../../resources/technology';
import { ResponsiveContainer } from '../../components/graph/ResponsiveContainer';
import { TechnologyChartMemo } from '../../components/graph/TechnologyChart';
import { Technologies } from '../../components/Technologies';
import { BulletSection } from '../../components/util/BulletSection';
import { contentUrl } from '../../resources/env';

export const Skills = () => {
  return (
    <div className="flex flex-col xl:flex-row justify-between gap-8 z-20 bg-sky-700 text-white content-padding">
      <div className="flex flex-col gap-8">
        <div className="flex flex-col gap-4">
          <h1>Past Roles</h1>
          <div className="flex items-center gap-4">
            <img src={contentUrl + "/logos/portainer.png"} alt="portainer" className="w-24 h-24" />
            <div className="flex flex-col">
              <h3>Portainer.io</h3>
              <h3>Quality Assurance Engineer</h3>
              <h3>Nov 2020 - Nov 2022</h3>
            </div>
          </div>
          <p>A New Zealand based startup creating container management software.</p>

          <BulletSection title="Responsibilities">
            <li>Writing manual tests for new features in Docker, Kubernetes, and Nomad environments.</li>
            <li>Developing automated tests using cypress.</li>
          </BulletSection>
        </div>

        <div className="flex flex-col gap-4">
          <h1>Education</h1>
          <div className="flex items-center gap-4">
            <img src={contentUrl + "/logos/uoa.png"} alt="uoa" className="w-24 h-24" />
            <div className="flex flex-col gap-0">
              <h3>Bachelor of Engineering (Hons)</h3>
              <h3>Software Engineering</h3>
              <h3>University of Auckland</h3>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <h1>Awards</h1>
          <ul className="list-disc">
            <li>UoA Engineering Final Year Project Winner (Web Tools & Applications)</li>
          </ul>
        </div>

        <div className="flex flex-col gap-4">
          <h1>Hobbies</h1>
          <ul className="list-disc">
            <li>Yoga</li>
            <li>Rhythm Games</li>
            <li>Software Projects</li>
            <li>Custom Keyboards</li>
          </ul>
        </div>
      </div>

      <div className="flex flex-col items-start gap-4 alt-col-width shrink-0">
        <div className="w-full flex flex-col gap-8 mb-6">
          <div className="flex flex-col gap-2">
            <h2>Here are the technologies I use</h2>
            <span>Updated November 2022</span>
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

