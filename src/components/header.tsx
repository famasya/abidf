import { Link } from "@tanstack/react-router";

const links = [
  { to: "/", label: "home" },
  { to: "/about", label: "about" },
  { to: "/playground", label: "playground" },
  { to: "/blog", label: "blog" },
];
export default function Header() {
  return (
    <header className="flex gap-2 bg-white text-black justify-between pt-4 mb-4 border-b border-zinc-200 flex-col md:flex-row items-center md:items-start">
      <Link to="/">
        <h1 className="text-lg text-sky-900 font-medium p-0 bg-sky-50 rounded-lg hover:bg-sky-100 px-2">
          Abid Famasya
        </h1>
      </Link>
      <nav className="flex flex-row">
        {links.map((link) => (
          <Link
            key={link.to}
            to={link.to}
            activeProps={{ className: "border-b border-sky-700!" }}
            className="bg-white px-4 py-1 hover:bg-zinc-50 border-white"
          >
            {link.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
