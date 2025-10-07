import { Link } from "@tanstack/react-router"

const links = [
  { to: "/", label: "home" },
  { to: "/about", label: "about" },
  { to: "/playground", label: "playground" },
]
export default function Header() {
  return (
    <header className="flex gap-2 bg-white text-black justify-between mt-4 mb-4 border-b border-zinc-200">
      <Link to="/">
        <h1 className="text-xl font-medium p-0">abid famasya</h1>
      </Link>
      <nav className="flex flex-row">
        {links.map((link) => (
          <Link key={link.to} to={link.to} activeProps={{ className: "border-b border-sky-700!" }} className="bg-white px-4 py-1 hover:bg-zinc-50 border-white">
            {link.label}
          </Link>
        ))}
      </nav>
    </header>
  )
}
