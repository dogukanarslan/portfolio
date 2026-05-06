import { promises as fs } from "fs";
import { GitHub, Linkedin, Star } from "react-feather";
import { Experience } from "./components/Experience";
import { Education } from "./components/Education";
import { Projects } from "./components/Projects";

export default async function Home() {
  const file = await fs.readFile(process.cwd() + "/app/data.json", "utf-8");
  const data = JSON.parse(file);

  return (
    <>
      <div>
        <h1 className="text-4xl uppercase tracking-wide">{data.name}</h1>
        <h2 className="mt-2 text-2xl">{data.role}</h2>
        <p className="mt-4 max-w-xl leading-7 text-foreground/80">
          {data.about}
        </p>
      </div>

      <ul className="my-6 flex gap-4">
        <li>
          <a
            href={data.socials.github_url}
            target="_blank"
            className="flex items-center gap-x-2 opacity-70 hover:opacity-100"
          >
            <GitHub />
          </a>
        </li>
        <li>
          <a
            href={data.socials.linkedin_url}
            target="_blank"
            className="flex items-center gap-x-2 opacity-70 hover:opacity-100"
          >
            <Linkedin />
          </a>
        </li>
      </ul>
      <div className="space-y-6">
        <Experience experience={data.experience} />
        <Education education={data.education} />
        <Projects projects={data.projects} />
      </div>
    </>
  );
}
