import { HeroSection } from '@/components/sections/HeroSection';
import { Navbar } from '@/components/layout/Navbar';

export function HomePage() {
  return (
    <main className="min-h-screen bg-[#0c1138] px-6 text-foreground">
      <div className="mx-auto max-w-7xl">
        <Navbar />
        <HeroSection />
      </div>
    </main>
  );
}
