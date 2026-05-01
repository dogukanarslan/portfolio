import { Card } from "./Card";

interface Props {
  experience: {
    name: string;
    startDate: string;
    endDate: string;
    position: string;
  }[];
}

export const Experience = (props: Props) => {
  const { experience } = props;

  return (
    <Card title="Experience">
      {experience.map((value) => (
        <div key={value.name} className="space-y-2">
          <p className="text-lg font-bold">{value.position}</p>
          <h3 className="mt-1 text-foreground/80">{value.name}</h3>
          <p className="mt-2 text-sm text-foreground/70">
            {value.startDate} - {value.endDate}
          </p>
        </div>
      ))}
    </Card>
  );
};
