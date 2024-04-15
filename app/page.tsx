export default function Home() {
  return (
    <div className="flex max-w-7xl mx-auto">
      <div className="w-full pl-20 pt-20">
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

        <ul className="mt-8 flex gap-x-4 text-neutral-300">
          <li>
            <a
              href="https://github.com/dogukanarslan"
              className="hover:text-neutral-100"
            >
              GitHub
            </a>
          </li>
          <li>
            <a href="https://tr.linkedin.com/in/dogukanarslan">LinkedIn</a>
          </li>
        </ul>
      </div>
      <div className="w-full pl-20 pt-20">repos</div>
    </div>
  );
}
