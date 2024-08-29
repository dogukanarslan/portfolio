import Link from 'next/link'

interface Props {
  projects: {
    name: string
    url: string
    description: string
  }[]
}

export const Projects = (props: Props) => {
  const { projects } = props

  return (
    <div>
      <h1 className="text-xl font-bold mb-4">Projects</h1>
      {projects.map((value) => (
        <div key={value.name} className="bg-dusk my-2 p-10">
          <h3 className="text-lg mt-3 font-semibold text-white">
            <Link href={value.url} target="_blank">
              {value.name}
            </Link>
          </h3>
          <p className="mt-3">{value.description}</p>
        </div>
      ))}
    </div>
  )
}
