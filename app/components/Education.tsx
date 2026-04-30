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
    <section>
      <h1 className="mb-4 text-2xl font-bold">Education</h1>
      <div className="space-y-6">
        {education.map((value) => (
          <div key={value.name}>
            <p className="text-lg font-bold">{value.programme}</p>
            <h3 className="mt-1 text-foreground/80">{value.name}</h3>
            <p className="mt-2 text-sm text-foreground/70">
              {value.graduation}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};
