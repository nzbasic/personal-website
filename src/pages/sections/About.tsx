import { ChevronDownIcon } from '@heroicons/react/20/solid';
import { ResponsiveGlobe } from '../../components/globe/Globe';
import { Contacts } from '../../components/Contacts';
import { useData } from '../../context/DataProvider';
import { useNavigation } from '../../context/NavigationProvider';
import { useGlobeAnalytics } from '../../hooks/useGlobeAnalytics';
import { bytesToFileSize } from '../../util/fileSize';

export const About = () => {
  const { scrollTo } = useNavigation();
  const { countries } = useGlobeAnalytics();
  const { analytics } = useData();

  return (
    <div className="relative flex flex-col justify-between bg-monokai-light text-white min-h-screen">
      <div className="flex flex-col !gap-12 xl:flex-row lg:items-center content-padding pb-52 min-h-screen">
        <div className="flex flex-col items-start gap-8">
          <div>
            <h2 className="mb-2">Hi, I'm</h2>
            <h1 className="text-7xl">James / nzbasic</h1>
          </div>
          <h2 className="max-w-6xl">I'm a software engineer with an interest in frontend development, data visualisation, and DevOps.</h2>
          <Contacts />
        </div>

        <div className="flex flex-col items-center xl:items-end w-full h-full mb-36 xl:mb-4">
          <div className="relative flex flex-col items-center 4xl:max-w-2xl 2xl:max-w-lg max-w-md w-full h-full">
            {countries && (
              <div className="aspect-square w-full h-full">
                <ResponsiveGlobe countries={countries} className="w-full h-full" />
              </div>
            )}
            {analytics && (
              <div className="flex flex-col absolute -bottom-28 2xl:-bottom-20 bg-monokai-dark p-4 rounded-md border-black">
                <h2>Total service requests (7d)</h2>
                <p className="mt-2">Requests: {analytics.total.requests.toLocaleString()}</p>
                <p>Bandwidth: {bytesToFileSize(analytics.total.bytes)}</p>
                <p>Page Views: {analytics.total.pageViews.toLocaleString()}</p>
              </div>
            )}
          </div>
        </div>
      </div>
  
      <div onClick={() => scrollTo("#skills")} className="absolute bottom-0 flex flex-col items-center self-center mb-2 cursor-pointer">
        <ChevronDownIcon className="w-12 mt-1" />
      </div>
    </div>
  )
};
