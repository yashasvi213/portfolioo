import { Moon } from 'lucide-react';

const navItems = ['Home', 'About', 'Skills', 'Projects', 'Experience', 'Achievements', 'Gallery', 'Contact'];

export function Navbar() {
  return (
    <header className="sticky top-0 z-30 border-b border-white/5 bg-[#03091c]/90 backdrop-blur">
      <div className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between px-6">
        <a className="text-2xl font-semibold tracking-tight text-white" href="#home">
          Yashasvi<span className="text-fuchsia-500">Sharma</span>
        </a>

        <nav className="hidden items-center gap-8 text-sm font-medium text-slate-200 lg:flex">
          {navItems.map((item) => (
            <a className="transition hover:text-fuchsia-400" href={`#${item.toLowerCase()}`} key={item}>
              {item}
            </a>
          ))}
        </nav>

        <button aria-label="Toggle theme" className="text-slate-200 transition hover:text-fuchsia-400" type="button">
          <Moon size={18} />
        </button>
      </div>
    </header>
  );
}
