interface Props {
  title?: string;
  children: React.ReactNode;
}

export const Card = (props: Props) => {
  const { title, children } = props;

  return (
    <section className="py-4">
      <div className="space-y-4">
        {title && <h2 className="text-2xl font-semibold">{title}</h2>}
        <div className="space-y-4">{children}</div>
      </div>
    </section>
  );
};
