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
      className={`inline-flex rounded-full px-6 py-3 font-semibold transition duration-300 ${
        variant === "primary"
          ? "bg-white text-black hover:scale-105"
          : "border border-zinc-700 text-white hover:border-white"
      }`}
    >
      {children}
    </a>
  );
}
