import Link from "next/link";

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
    <div>
      <h1 className="text-2xl font-bold mb-2">Projects</h1>
      <div className="space-y-8">
        {projects.map((value) => (
          <div key={value.name}>
            <h3 className="font-bold text-lg">
              <Link href={value.url} target="_blank">
                {value.name}
              </Link>
            </h3>
            <p>{value.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
