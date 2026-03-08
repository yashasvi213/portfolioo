import { Mail, MapPin, BriefcaseBusiness, Sparkles, ExternalLink, Instagram, Linkedin, Send } from 'lucide-react';
import { Navbar } from '@/components/layout/Navbar';

const experiences = [
  {
    role: 'Product Design Intern',
    company: 'Creative Labs',
    period: '2025 — Present',
    highlights: 'Designed user-focused landing pages and collaborated with developers on polished UI details.',
  },
  {
    role: 'Frontend Developer (Freelance)',
    company: 'Independent Projects',
    period: '2023 — 2025',
    highlights: 'Built responsive websites for personal brands and small businesses with modern React stacks.',
  },
];

const skills = ['UI/UX Design', 'React + TypeScript', 'Tailwind CSS', 'Figma', 'Content Strategy', 'Brand Storytelling'];

const projects = [
  {
    title: 'Personal Brand Portfolio',
    description: 'A warm, editorial-style portfolio focused on storytelling and clean visuals.',
    image: '/assets/project-brand.svg',
  },
  {
    title: 'Event Landing Experience',
    description: 'A conversion-focused event microsite with smooth scrolling and visual hierarchy.',
    image: '/assets/project-event.svg',
  },
  {
    title: 'Creator Media Kit',
    description: 'A modern one-pager for partnerships, audience highlights, and collaboration details.',
    image: '/assets/project-media-kit.svg',
  },
];

const gallery = ['/assets/event-1.svg', '/assets/event-2.svg', '/assets/event-3.svg', '/assets/event-4.svg', '/assets/event-5.svg', '/assets/event-6.svg'];

export function HomePage() {
  return (
    <main className="min-h-screen px-6 pb-20 text-slate-800">
      <div className="mx-auto max-w-6xl">
        <Navbar />

        <section className="grid items-center gap-10 pb-20 pt-8 md:grid-cols-2" id="home">
          <div className="space-y-5">
            <span className="inline-flex items-center gap-2 rounded-full bg-rose-100 px-4 py-2 text-sm font-medium text-rose-700">
              <Sparkles size={16} /> hello, welcome to my world
            </span>
            <h1 className="text-4xl font-bold leading-tight text-slate-900 md:text-6xl">
              I&apos;m building a portfolio that feels personal, creative, and truly me.
            </h1>
            <p className="max-w-xl text-lg leading-relaxed text-slate-600">
              This is my refreshed space inspired by my journey, my resume, and the things I love creating. It&apos;s soft,
              modern, and designed to grow with me.
            </p>
            <a
              className="inline-flex items-center gap-2 rounded-full bg-rose-500 px-6 py-3 font-semibold text-white transition hover:bg-rose-600"
              href="#contact"
            >
              Let&apos;s connect <Send size={16} />
            </a>
          </div>
          <div className="rounded-[2rem] border border-rose-100 bg-white p-4 shadow-xl shadow-rose-100/70">
            <img alt="Profile placeholder" className="h-[430px] w-full rounded-[1.6rem] object-cover" src="/assets/profile-main.svg" />
          </div>
        </section>

        <section className="pb-16" id="about">
          <div className="rounded-3xl border border-rose-100 bg-white/85 p-8 shadow-lg shadow-rose-100/50">
            <h2 className="text-3xl font-semibold text-slate-900">About Me</h2>
            <p className="mt-4 text-lg leading-relaxed text-slate-600">
              I&apos;m a curious creator who loves mixing design and development to turn ideas into delightful experiences.
              I care about details, storytelling, and making things feel both beautiful and easy to use.
            </p>
          </div>
        </section>

        <section className="pb-16" id="experience">
          <h2 className="mb-6 text-3xl font-semibold text-slate-900">Experience</h2>
          <div className="grid gap-5 md:grid-cols-2">
            {experiences.map((item) => (
              <article className="rounded-3xl border border-rose-100 bg-white p-6" key={item.role}>
                <p className="flex items-center gap-2 text-sm font-medium text-rose-500">
                  <BriefcaseBusiness size={14} /> {item.period}
                </p>
                <h3 className="mt-3 text-xl font-semibold text-slate-900">{item.role}</h3>
                <p className="mt-1 font-medium text-slate-500">{item.company}</p>
                <p className="mt-3 text-slate-600">{item.highlights}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="pb-16" id="skills">
          <h2 className="mb-6 text-3xl font-semibold text-slate-900">Skills</h2>
          <div className="flex flex-wrap gap-3">
            {skills.map((skill) => (
              <span className="rounded-full border border-rose-200 bg-rose-50 px-4 py-2 font-medium text-rose-700" key={skill}>
                {skill}
              </span>
            ))}
          </div>
        </section>

        <section className="pb-16" id="projects">
          <h2 className="mb-6 text-3xl font-semibold text-slate-900">Projects</h2>
          <div className="grid gap-6 md:grid-cols-3">
            {projects.map((project) => (
              <article className="overflow-hidden rounded-3xl border border-rose-100 bg-white" key={project.title}>
                <img alt={project.title} className="h-44 w-full object-cover" src={project.image} />
                <div className="space-y-2 p-5">
                  <h3 className="text-xl font-semibold text-slate-900">{project.title}</h3>
                  <p className="text-slate-600">{project.description}</p>
                  <a className="inline-flex items-center gap-1 font-medium text-rose-500" href="#">
                    View project <ExternalLink size={14} />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="pb-16" id="gallery">
          <h2 className="mb-6 text-3xl font-semibold text-slate-900">Event Gallery</h2>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
            {gallery.map((image, index) => (
              <img alt={`Event ${index + 1}`} className="h-52 w-full rounded-2xl object-cover" key={image} src={image} />
            ))}
          </div>
        </section>

        <section className="rounded-3xl border border-rose-100 bg-white p-8" id="contact">
          <h2 className="text-3xl font-semibold text-slate-900">Get In Touch</h2>
          <p className="mt-3 text-slate-600">I&apos;m open to collaborations, creative projects, and new opportunities.</p>
          <div className="mt-6 grid gap-4 text-slate-700 sm:grid-cols-2">
            <p className="inline-flex items-center gap-2">
              <Mail size={16} /> hello@yourmail.com
            </p>
            <p className="inline-flex items-center gap-2">
              <MapPin size={16} /> Your City, India
            </p>
            <a className="inline-flex items-center gap-2 text-rose-600" href="#">
              <Linkedin size={16} /> LinkedIn
            </a>
            <a className="inline-flex items-center gap-2 text-rose-600" href="#">
              <Instagram size={16} /> Instagram
            </a>
          </div>
        </section>
      </div>
    </main>
  );
}
