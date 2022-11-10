interface BulletSectionProps {
  title: string;
  children?: React.ReactNode | React.ReactNode[]
}

export const BulletSection = ({ title, children }: BulletSectionProps) => {
  return (
    <div>
      <h2>{title}</h2>
      <ul className="list-disc">
        {children}
      </ul>
    </div>
  );
};
