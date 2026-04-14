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
    <div>
      <h1 className="text-2xl font-bold mb-2">Education</h1>
      <div className="space-y-8">
        {education.map((value) => (
          <div key={value.name}>
            <p className="font-bold text-lg">{value.programme}</p>
            <h3>{value.name}</h3>
            <p>{value.graduation}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
