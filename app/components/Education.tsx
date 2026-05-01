import { Card } from "./Card";

interface Props {
  education: {
    name: string;
    graduation: string;
    programme: string;
  }[];
}

export const Education = (props: Props) => {
  const { education } = props;

  return (
    <Card title="Education">
      {education.map((value) => (
        <div key={value.name} className="space-y-2">
          <p className="text-lg font-bold">{value.programme}</p>
          <h3 className="text-foreground/80">{value.name}</h3>
          <p className="text-sm text-foreground/70">{value.graduation}</p>
        </div>
      ))}
    </Card>
  );
};
