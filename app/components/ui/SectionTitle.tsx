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
    <div className="max-w-3xl">
      <p className="mb-4 text-sm font-semibold uppercase tracking-[0.4em] text-zinc-500">
        {eyebrow}
      </p>

      <h2 className="text-4xl font-semibold tracking-[-0.04em] text-white sm:text-5xl md:text-6xl">
        {title}
      </h2>

      {description && (
        <p className="mt-6 text-base leading-8 text-zinc-400 sm:text-lg">
          {description}
        </p>
      )}
    </div>
  );
}
