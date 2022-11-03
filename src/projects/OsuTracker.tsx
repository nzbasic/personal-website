import { ImagePreviewContent } from "../types/project";

// const initialContent: ImagePreviewContent[] = [
//   {
//     title: 'Home',
//     desktop: {
//       light: new Image().src = 'https://media.discordapp.net/attachments/893384567975706674/1031031161096519750/unknown.png?width=1015&height=598',
//       dark: new Image().src = 'https://media.discordapp.net/attachments/893384567975706674/1031031486050218054/unknown.png?width=1015&height=598',
//     },
//     mobile: {
//       light: new Image().src = 'https://media.discordapp.net/attachments/893384567975706674/1031032453080559747/unknown.png?width=289&height=598',
//       dark: new Image().src = 'https://media.discordapp.net/attachments/893384567975706674/1031032328853667931/unknown.png?width=289&height=598',
//     },
//   },
//   {
//     title: 'Stats',
//     desktop: {
//       light: new Image().src = 'https://media.discordapp.net/attachments/893384567975706674/1031031740044685323/unknown.png?width=1015&height=598',
//       dark: new Image().src = 'https://media.discordapp.net/attachments/893384567975706674/1031031679986454538/unknown.png?width=1015&height=598',
//     }, 
//     mobile: {
//       light: new Image().src = 'https://media.discordapp.net/attachments/893384567975706674/1031032874482274344/unknown.png?width=289&height=598',
//       dark: new Image().src = 'https://media.discordapp.net/attachments/893384567975706674/1031032795469987891/unknown.png?width=289&height=598',
//     },
//   },
//   {
//     title: 'Player Tracking',
//     desktop: {
//       light: new Image().src = 'https://media.discordapp.net/attachments/893384567975706674/1031031885045960744/unknown.png?width=1015&height=598',
//       dark: new Image().src = 'https://media.discordapp.net/attachments/893384567975706674/1031031942369525840/unknown.png?width=1015&height=598',
//     }, 
//     mobile: {
//       light: new Image().src = 'https://media.discordapp.net/attachments/893384567975706674/1031032604734017616/unknown.png?width=289&height=598',
//       dark: new Image().src = 'https://media.discordapp.net/attachments/893384567975706674/1031032670588784670/unknown.png?width=289&height=598',
//     },
//   },
// ];

export const OsuTracker = () => {
  return (
    <div className="flex bg-monokai-light p-8 lg:p-16">
      
      <div className="flex flex-col gap-4">
        <h1>osuTracker</h1>
        <div>
          <h2>Links</h2>
        </div>

        <div>
          <h2>Description</h2>
          <p>osuTracker is an online web tool that tracks osu! daily statistics of any player who signs up. It also offers a unique overall view of each country, including the top 100 plays history and top 10 players over time.</p>
        </div>

        <div>
          <h2>Motivation</h2>
          <p>Initially I just wanted to track data for a few of my friends so that we could look back later and see our full daily history in osu!. Officially, the website only displays the last 90 day rank history, which misses out on a huge amount of extra data points. After building a simple app for my friends, I realised that there was a huge potential in storing granular data for more players so that in the future I could analyze long term trends.</p>
        </div>

        <div>
          <h2>Challenges</h2>
          <p>osuTracker was the first large scale public website that I built which meant that I had to learn a whole lot. </p>
        </div>

        <div>
          <h2>Achievements</h2>
          <ul className="list-disc">
            <li>25000+ Total users</li>
            <li>3000+ Active monthly users</li>
          </ul>
        </div>

        <div>
          <h2>Lessons Learned</h2>
          <p></p>
        </div>
      </div>

      {/* <ImageSlides data={initialContent} /> */}
    </div>
  );
};
