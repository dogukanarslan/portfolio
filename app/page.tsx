import { promises as fs } from 'fs'
import { GitHub, Linkedin, Star } from 'react-feather'
import { Experience } from './components/Experience'
import { Education } from './components/Education'
import { Projects } from './components/Projects'

export default async function Home() {
  const file = await fs.readFile(process.cwd() + '/app/data.json', 'utf-8')
  const data = JSON.parse(file)

  return (
    <div className="flex max-w-7xl mx-auto h-full">
      <div className="w-full pl-20 pt-20 pb-20 flex flex-col justify-between h-full">
        <div>
          <h1 className="font-bold text-6xl text-white">Doğukan Arslan</h1>
          <h2 className="mt-4 text-2xl font-semibold text-white">
            Frontend Engineer
          </h2>
          <div className="leading-loose">
            <p className="mt-8">
              Highly motivated, self-taught developer with a great passion for
              frontend development.
            </p>
            <p className="mt-2">
              Looking to develop responsive and user-friendly web applications
              along with clean code.
            </p>
          </div>
        </div>

        <ul className="flex gap-x-4 text-neutral-300">
          <li>
            <a
              href="https://github.com/dogukanarslan"
              className="hover:text-neutral-100 flex items-center gap-x-2"
            >
              <GitHub />
              GitHub
            </a>
          </li>
          <li>
            <a
              href="https://tr.linkedin.com/in/dogukanarslan"
              className="hover:text-neutral-100 flex items-center gap-x-2"
            >
              <Linkedin /> LinkedIn
            </a>
          </li>
        </ul>
      </div>
      <div className="w-full pl-20 pt-20 pb-20 h-full">
        <div className="overflow-y-auto h-full space-y-10">
          <Experience experience={data.experience} />
          <Education education={data.education} />
          <Projects projects={data.projects} />
        </div>
      </div>
    </div>
  )
}
