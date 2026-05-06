interface Props {
  title: string;
  children: React.ReactNode;
}

export const Card = (props: Props) => {
  const { title, children } = props;

  return (
    <section className="border-l-2 border-border pl-5">
      <h2 className="mb-5 font-bold text-lg uppercase">{title}</h2>
      <div className="space-y-4">{children}</div>
    </section>
  );
};
