import { GitHub, Linkedin, Star } from 'react-feather';

const PINNED_REPOS = [
  'github-searchuser',
  'rickandmorty',
  'next-rickandmorty',
  'films_oop'
];

async function getData() {
  const res = await fetch('https://api.github.com/users/dogukanarslan/repos');

  return res.json();
}

export default async function Home() {
  const repos = await getData();

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
        <div className="overflow-y-auto h-full">
          {repos
            .filter((repo) => PINNED_REPOS.includes(repo.name))
            .map((repo: any) => (
              <div key={repo.id} className="bg-dusk my-2">
                <a href={repo.html_url} className="p-20 block">
                  <p className="font-bold text-white">{repo.language}</p>
                  <h3 className="text-lg mt-3 font-semibold text-white">
                    {repo.full_name}
                  </h3>
                  <p className="mt-3">{repo.description}</p>
                  <div className="flex gap-x-2 items-center mt-5">
                    <Star /> {repo.stargazers_count}
                  </div>
                </a>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
