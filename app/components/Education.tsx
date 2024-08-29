interface Props {
  education: {
    name: string
    graduation: string
    programme: string
  }[]
}

export const Education = (props: Props) => {
  const { education } = props

  return (
    <div>
      <h1 className="text-xl font-bold mb-4">Education</h1>
      {education.map((value) => (
        <div key={value.name} className="bg-dusk my-2 p-10">
          <p className="font-bold text-white">{value.programme}</p>
          <h3 className="text-lg mt-3 font-semibold text-white">
            {value.name}
          </h3>
          <p className="mt-3">{value.graduation}</p>
        </div>
      ))}
    </div>
  )
}
