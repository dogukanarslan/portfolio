import Link from "next/link";

import { Card } from "./Card";

interface Props {
  projects: {
    name: string;
    url: string;
    description: string;
  }[];
}

export const Projects = (props: Props) => {
  const { projects } = props;

  return (
    <Card title="Projects">
      {projects.map((value) => (
        <div key={value.name} className="space-y-2">
          <h3 className="text-lg font-bold">
            <Link href={value.url} target="_blank">
              {value.name}
            </Link>
          </h3>
          <p className="text-foreground/80">{value.description}</p>
        </div>
      ))}
    </Card>
  );
};
