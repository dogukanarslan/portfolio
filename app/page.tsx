export default function Home() {
  return (
    <div>
      <h1 className="font-medium text-2xl tracking-tighter mb-8">
        Hello, this is Doğukan Arslan
      </h1>
      <p>
        Highly motivated, self-taught developer with a great passion for
        frontend development. Looking to develop responsive and user-friendly
        web applications along with clean code.
      </p>

      <ul className="mt-8 flex gap-x-4 text-neutral-300">
        <li>
          <a href="https://github.com/dogukanarslan" className="hover:text-neutral-100">GitHub</a>
        </li>
        <li>
          <a href="https://tr.linkedin.com/in/dogukanarslan">LinkedIn</a>
        </li>
      </ul>
    </div>
  );
}
