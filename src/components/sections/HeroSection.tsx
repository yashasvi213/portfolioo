import { motion } from 'framer-motion';
import { ArrowRight, Code2, Linkedin, Mail, Trophy } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { HeroFlowCard } from './HeroFlowCard';
import { HeroSkillChart } from './HeroSkillChart';

export function HeroSection() {
  return (
    <section className="relative overflow-hidden pb-16 pt-4" id="home">
      <div className="pointer-events-none absolute -left-20 top-[70%] h-72 w-72 rounded-full bg-fuchsia-300/35 blur-3xl" />
      <div className="pointer-events-none absolute right-10 top-10 h-60 w-60 rounded-full bg-violet-300/25 blur-3xl" />
      <div className="grid items-center gap-10 lg:grid-cols-[1.2fr_1fr]">
        <div className="space-y-7">
          <div className="inline-flex rounded-full border border-secondary/40 bg-secondary/15 px-5 py-2 text-lg text-purple-100">
            ✨ Welcome to my digital universe
          </div>
          <div className="space-y-4">
            <h1 className="text-6xl font-extrabold leading-tight md:text-7xl">
              Hey, I&apos;m
              <br />
              <span className="bg-gradient-to-r from-pink-300 via-fuchsia-300 to-violet-300 bg-clip-text text-transparent">
                Anurag Tiwari
              </span>
            </h1>
            <p className="text-4xl font-semibold text-fuchsia-300">2X Hackathon Winner & Full Stack Developer</p>
            <p className="max-w-xl text-2xl leading-relaxed text-purple-100/85">
              I&apos;m a <span className="font-semibold text-violet-200">passionate creator</span> from Indore, India 🇮🇳 who
              transforms <span className="font-semibold text-pink-200">coffee into code</span> and ideas into reality.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-4">
            <Button className="gap-2 text-xl" size="lg">
              <Code2 size={20} /> Explore Work
            </Button>
            <Button size="lg" variant="secondary">
              <Trophy className="mr-2" size={18} /> 2X Winner
            </Button>
          </div>
          <div className="flex items-center gap-3 pt-2">
            {[Mail, Linkedin, Code2].map((Icon, index) => (
              <a
                className="rounded-2xl border border-fuchsia-200/30 bg-fuchsia-300/10 p-3 transition hover:-translate-y-1 hover:bg-fuchsia-300/20"
                href="#"
                key={index}
              >
                <Icon size={19} />
              </a>
            ))}
          </div>
        </div>

        <motion.div
          animate={{ y: [0, -8, 0] }}
          className="relative"
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        >
          <div className="mx-auto h-[390px] w-[390px] rounded-full border-4 border-pink-200/90 bg-gradient-to-tr from-rose-50 to-violet-100 p-4 shadow-glow">
            <img
              alt="Profile"
              className="h-full w-full rounded-full border-2 border-fuchsia-300/80 object-cover"
              src="https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?auto=format&fit=crop&w=900&q=80"
            />
          </div>
          <div className="absolute -bottom-2 left-0 rounded-2xl border border-pink-200/60 bg-pink-500/80 px-8 py-4 text-xl font-semibold text-white">
            ● Available for Work
          </div>
          <div className="absolute -right-4 top-6 rounded-full border-4 border-violet-900 bg-fuchsia-500 px-6 py-5 text-center font-bold">
            🏆<br />2X Winner
          </div>
        </motion.div>
      </div>

      <div className="mt-16 grid gap-6 lg:grid-cols-2">
        <HeroFlowCard />
        <HeroSkillChart />
      </div>

      <div className="mt-10 flex justify-center text-purple-100/80">
        <ArrowRight className="rotate-90" size={20} />
      </div>
    </section>
  );
}
