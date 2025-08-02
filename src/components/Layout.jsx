import { Link, NavLink } from "react-router-dom";

export default function Layout({ children }) {
  const linkClass = ({ isActive }) =>
    `text-sm font-medium transition-colors ${
      isActive ? "text-neutral-900" : "text-neutral-500 hover:text-neutral-900"
    }`;

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-white to-neutral-100 text-neutral-900">
      <header className="sticky top-0 z-50 border-b bg-white/80 backdrop-blur">
        <div className="max-w-4xl mx-auto flex items-center justify-between p-6">
          <Link to="/" className="text-2xl font-serif font-bold tracking-tight">
            Regard DLP
          </Link>
          <nav className="hidden md:flex space-x-6">
            <NavLink to="/actu" className={linkClass}>
              Actu
            </NavLink>
            <NavLink to="/nostalgie" className={linkClass}>
              Nostalgie
            </NavLink>
            <NavLink to="/critique" className={linkClass}>
              Critique
            </NavLink>
          </nav>
        </div>
      </header>

      <main className="flex-1 w-full max-w-3xl mx-auto px-6 py-10">{children}</main>

      <footer className="w-full border-t py-6 text-center text-xs text-neutral-500">
        Blog personnel non affilié à The Walt Disney Company © 2025
      </footer>
    </div>
  );
}