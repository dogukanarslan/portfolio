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
    <div>
      <h1 className="text-2xl font-bold mb-2">Experience</h1>
      <div className="space-y-8">
        {experience.map((value) => (
          <div key={value.name}>
            <p className="font-bold text-lg">{value.position}</p>
            <h3>{value.name}</h3>
            <p>
              {value.startDate} - {value.endDate}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};
