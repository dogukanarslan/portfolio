interface Props {
  experience: {
    name: string
    startDate: string
    endDate: string
    position: string
  }[]
}

export const Experience = (props: Props) => {
  const { experience } = props

  return (
    <div>
      <h1 className="text-xl font-bold mb-4">Experience</h1>
      {experience.map((value) => (
        <div key={value.name} className="bg-dusk my-2 p-10">
          <p className="font-bold text-white">{value.position}</p>
          <h3 className="text-lg mt-3 font-semibold text-white">
            {value.name}
          </h3>
          <p className="mt-3">
            {value.startDate} - {value.endDate}
          </p>
        </div>
      ))}
    </div>
  )
}
