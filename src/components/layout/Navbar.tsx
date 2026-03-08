const navItems = ['Home', 'About', 'Experience', 'Skills', 'Projects', 'Gallery', 'Contact'];

export function Navbar() {
  return (
    <header className="sticky top-0 z-20 mx-auto flex w-full items-center justify-between py-6 text-sm backdrop-blur">
      <div className="text-2xl font-bold tracking-tight text-slate-900">
        your<span className="text-rose-500">portfolio</span>
      </div>
      <nav className="hidden gap-6 font-medium text-slate-600 md:flex">
        {navItems.map((item) => (
          <a className="transition hover:text-rose-500" href={`#${item.toLowerCase()}`} key={item}>
            {item}
          </a>
        ))}
      </nav>
    </header>
  );
}
