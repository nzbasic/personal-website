import classNames from "classnames";
import { useMemo } from "react";
import { ImagePreviewContent } from "../../types/project";

interface PropTypes {
  content: ImagePreviewContent
  active: boolean;
  onClick: () => void;
}

export const Card = ({ content, active, onClick }: PropTypes) => {
  // const src = useMemo(() => {
  //   if (active || !content.mobile) {
  //     return content.desktop[mode];
  //   } else {
  //     return content.mobile[mode];
  //   }
  // }, [active, content.mobile, content.desktop, mode]);

  return (
    <div className="flex flex-col gap-1">
      <img
        className={classNames(
          { 'h-96': active },
          { 'h-80': !active },
          "hover:h-96 card"
        )}
        src={""}
        alt={content.title}
        onClick={onClick}
      /> 
      <span className="text-center">{content.title}</span>
    </div>
    
  );
};
