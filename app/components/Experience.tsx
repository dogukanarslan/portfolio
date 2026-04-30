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
    <section>
      <h1 className="mb-4 text-2xl font-bold">Experience</h1>
      <div className="space-y-6">
        {experience.map((value) => (
          <div key={value.name}>
            <p className="text-lg font-bold">{value.position}</p>
            <h3 className="mt-1 text-foreground/80">{value.name}</h3>
            <p className="mt-2 text-sm text-foreground/70">
              {value.startDate} - {value.endDate}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};
