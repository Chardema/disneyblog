import { Link } from "react-router-dom";

export default function Layout({ children }) {
  return (
    <div className="min-h-screen bg-neutral-100 text-neutral-900 flex flex-col">
      <header className="p-6 border-b border-neutral-300 bg-white shadow-sm">
        <Link to="/" className="text-3xl font-serif font-bold">Regard DLP</Link>
        <p className="text-sm text-neutral-500">Actu — Nostalgie — Critique</p>
      </header>
      <main className="flex-1 p-6">{children}</main>
      <footer className="p-6 text-center text-xs text-neutral-500 border-t border-neutral-300">
        Blog personnel non affilié à The Walt Disney Company © 2025
      </footer>
    </div>
  );
}
