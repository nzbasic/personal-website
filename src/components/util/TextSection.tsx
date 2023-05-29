interface TextSectionProps {
  title: string;
  children?: React.ReactNode | React.ReactNode[]
}

export const TextSection = ({ title, children }: TextSectionProps) => {
  return (
    <div>
      <h2>{title}</h2>
      <div className="flex flex-col gap-2">
        {children}
      </div>
    </div>
  );
};
