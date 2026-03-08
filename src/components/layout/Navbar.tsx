import { Moon } from 'lucide-react';

const navItems = ['Home', 'About', 'Skills', 'Projects', 'Experience', 'Achievements', 'Gallery', 'Contact'];

export function Navbar() {
  return (
    <header className="mx-auto flex w-full max-w-7xl items-center justify-between py-8 text-sm text-purple-100/90">
      <div className="text-3xl font-bold tracking-tight">
        Anurag<span className="text-secondary">Tiwari</span>
      </div>
      <nav className="hidden gap-7 font-medium md:flex">
        {navItems.map((item) => (
          <a className="transition hover:text-primary" href={`#${item.toLowerCase()}`} key={item}>
            {item}
          </a>
        ))}
      </nav>
      <button className="rounded-full border border-white/20 p-2 hover:bg-white/10" type="button">
        <Moon size={18} />
      </button>
    </header>
  );
}
