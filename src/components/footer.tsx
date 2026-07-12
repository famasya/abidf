export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-zinc-200 py-4 px-4 lg:px-0">
      <p className="text-sm text-zinc-500 text-center">
        {year}
      </p>
    </footer>
  );
}
