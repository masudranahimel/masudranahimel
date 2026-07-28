type ButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
};

export default function Button({
  href,
  children,
  variant = "primary",
}: ButtonProps) {
  return (
    <a
      href={href}
      className={`inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold transition-all duration-300 ${
        variant === "primary"
          ? "bg-white text-black hover:scale-105 hover:bg-zinc-200"
          : "border border-white/15 text-white hover:border-white/30 hover:bg-white/5"
      }`}
    >
      {children}
    </a>
  );
}
