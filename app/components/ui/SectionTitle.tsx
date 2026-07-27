type SectionTitleProps = {
  eyebrow: string;
  title: string;
  description?: string;
};

export default function SectionTitle({
  eyebrow,
  title,
  description,
}: SectionTitleProps) {
  return (
    <div className="mb-16 max-w-3xl">
      <p className="mb-4 text-sm uppercase tracking-[0.4em] text-zinc-500">
        {eyebrow}
      </p>

      <h2 className="text-4xl font-bold tracking-tight text-white md:text-6xl">
        {title}
      </h2>

      {description && (
        <p className="mt-6 text-lg leading-9 text-zinc-400">{description}</p>
      )}
    </div>
  );
}
