import { Status } from "../components/bbd/Status";
import { ImageSlider } from "../components/preview/ImageSlider";
import { Technologies } from "../components/Technologies";
import { apiTechnologies, applicationTechnologies, screenshots } from "../resources/projects/bbd";

import Icon from '../resources/logos/bbd.svg';

export const BBD = () => {
  return (
    <div className="flex flex-col lg:flex-row gap-8 justify-between bg-emerald-700 p-8 lg:p-16">
      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-4">
          <img src={Icon} alt="icon" className="w-36" />
          <div className="flex flex-col">
            <h2>Batch</h2>
            <h2>Beatmap</h2>
            <h2>Downloader</h2>
          </div>
        </div>

        <div>
          <h2>Description</h2>
          <p>A standalone application and API for mass downloading osu! beatmaps.</p>
          <p className="mt-2">The project consists of an API (Golang) and an application (Electron) with visual query builders to make it easy for osu! players to downloads lots of maps that fit a certain criteria.</p>
        </div>

        <div>
          <h2>Motivation</h2>
          <p>Outside of a few peer hosted torrents, there was no easy way to download a lot of beatmaps at one time. Users usually download maps one at a time using the osu! client or through the official website which was very arduous. </p>
        </div>

        <div>
          <h2>Challenges</h2>
          <p>Data egress costs would been enormous if I decided to use a cloud solution such as AWS S3, and Cloudflare R2 was not available at launch. To overcome this initially I decided that the best solution was to host them myself because I already had an excellent internet connection.</p>
        </div>

        <div>
          <h2>Achievements</h2>
          <ul className="list-disc">
            <li>Serving over 1.5TB of beatmaps in a single day</li>
            <li>Serving 2 million beatmap sets in a month</li>
            <li>25,000 App downloads and 50 stars on GitHub</li>
          </ul>
        </div>
        
        <div>
          <h2>Lessons Learned</h2>
          <p>Building out my own server rack for hosting this project was a great learning experience because it helped me to see what it is like to deploy and maintain live software in a practical setting.</p>
        </div>
      </div>

      <div className="flex flex-col max-w-3xl w-full">
        <ImageSlider images={screenshots} />
      </div>


      {/* <div className="flex justify-between flex-wrap">
        

        <div className="flex flex-col gap-4 max-w-lg w-full">
          <div className="flex flex-col gap-2">
            <h2>Technologies (Application)</h2>
            <Technologies data={applicationTechnologies} />
          </div>
          <div className="flex flex-col gap-2">
            <h2>Technologies (Application)</h2>
            <Technologies data={apiTechnologies} />
          </div>
        </div>
      </div>

      <div className="flex flex-wrap gap-8 justify-between">
        <div className="mt-8">
          
        </div>

        <div className="flex flex-col max-w-lg w-full">
          <h2>Live Server Status</h2>
          <Status />
        </div>
      </div> */}
    </div>
  );
};
