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
    <section>
      <h1 className="mb-4 text-2xl font-bold">Projects</h1>
      <div className="space-y-6">
        {projects.map((value) => (
          <div key={value.name}>
            <h3 className="text-lg font-bold">
              <Link href={value.url} target="_blank">
                {value.name}
              </Link>
            </h3>
            <p className="mt-2 text-foreground/80">{value.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
