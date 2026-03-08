import { Moon } from 'lucide-react';

const navItems = ['Home', 'About', 'Skills', 'Projects', 'Experience', 'Achievements', 'Gallery', 'Contact'];

export function Navbar() {
  return (
    <header className="sticky top-0 z-30 border-b border-rose-200/80 bg-[#ffe8f5]/85 backdrop-blur">
      <div className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between px-6">
        <a className="text-2xl font-semibold tracking-tight text-rose-900" href="#home">
          Yashasvi<span className="text-pink-600">Sharma</span>
        </a>

        <nav className="hidden items-center gap-8 text-sm font-medium text-rose-900/80 lg:flex">
          {navItems.map((item) => (
            <a className="transition hover:text-pink-600" href={`#${item.toLowerCase()}`} key={item}>
              {item}
            </a>
          ))}
        </nav>

        <button aria-label="Toggle theme" className="text-rose-900/80 transition hover:text-pink-600" type="button">
          <Moon size={18} />
        </button>
      </div>
    </header>
  );
}
