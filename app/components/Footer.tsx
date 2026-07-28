import Container from "./ui/Container";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="pb-6 pt-2 sm:pb-8 sm:pt-4">
      <Container>
        <div className="flex flex-col gap-3 border-t border-white/10 py-6 text-center text-xs text-zinc-600 sm:flex-row sm:items-center sm:justify-between sm:gap-5 sm:py-8 sm:text-left sm:text-sm">
          <p>© {currentYear} Masud Rana Himel.</p>

          <p>Built with Next.js, TypeScript, and Tailwind CSS.</p>
        </div>
      </Container>
    </footer>
  );
}
