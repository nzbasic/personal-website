import { ContentBlock } from "../../resources/projects"
import { BulletSection } from "./BulletSection";
import { TextSection } from "./TextSection";

interface SectionWrapperProps {
  block: ContentBlock 
}

export const SectionWrapper = ({ block }: SectionWrapperProps) => {
  if (block.type === "text") return (
    <TextSection title={block.title}>
      {block.content.map((text, index) => (
        <p key={index}>{text}</p>
      ))}
    </TextSection>
  );

  return (
    <BulletSection title={block.title}>
      {block.content.map((text, index) => (
        <li key={index}>{text}</li>
      ))}
    </BulletSection>
  );
};
