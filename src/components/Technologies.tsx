import classNames from 'classnames';
import { useMemo } from 'react';
import { Technology } from '../types/project';

interface Group {
  title: string;
  items: Technology[];
}

interface TechnologiesProps {
  data: Technology[]
}

export const Technologies = ({ data }: TechnologiesProps) => {
  const grouped = useMemo(() => (
    data
      .reduce((acc, entry) => {
        const group = acc.find(item => item.title === entry.type)
        if (group) {
          group.items.push(entry)
        } else {
          acc.push({ 
            title: entry.type,
            items: [entry]
          })
        }

        return acc;
      }, [] as Group[])
      .sort((a, b) => b.items.length - a.items.length)
  ), [data]);

  return (
    <div className="grid grid-cols-2 lg:grid-cols-3 w-full gap-4">
      {grouped.map(group => (
        <div key={group.title} className="flex flex-col w-full gap-2 bg-monokai-dark rounded-md p-2">
          <span className="font-semibold">{group.title}</span>
          {group.items.map(item => (
            <div key={item.title} className="flex items-center gap-2 bg-monokai-light rounded-md p-2">
              <div className="w-[30px] h-[30px] flex items-center justify-center">
                <img 
                  src={require('../resources/logos/' + item.imageUrl)} 
                  alt="logo" 
                  width="30" 
                  height="30" 
                  className={classNames(
                    {"rounded-full bg-white": item.background },
                  )}
                />
              </div>
              <span className="w-32">{item.title}</span>
            </div>
          ))}
        </div>
      ))}
    </div>
  )
};
