import { Screenshot } from "../../types/project"

export const CarouselItem = ({ data }: { data: Screenshot }) => {
  return (
    <div className="flex flex-col w-full rounded-md shadow-lg">
      <img className="rounded-t-md" src={data.link} alt="screenshot" />
      <span className="text-center w-full bg-bglight rounded-b-md p-2 text-lg">{data.title}</span>
    </div>
  )
};
