import {
  BriefcaseBusiness,
  Code2,
  ExternalLink,
  Github,
  GraduationCap,
  Mail,
  MapPin,
  Phone,
  Trophy,
} from 'lucide-react';
import { motion } from 'framer-motion';
import { Navbar } from '@/components/layout/Navbar';
import event1Image from '@/asset/event-1.svg';
import event2Image from '@/asset/event-2.svg';
import event3Image from '@/asset/event-3.svg';
import event4Image from '@/asset/event-4.svg';
import event5Image from '@/asset/event-5.svg';
import event6Image from '@/asset/event-6.svg';
import profileMainImage from '@/asset/profile-main.svg';

const contactLinks = [
  { label: 'yashasvii045@gmail.com', icon: Mail, href: 'mailto:yashasvii045@gmail.com' },
  { label: 'yashasvisharma1369', icon: Phone, href: '#' },
  { label: 'yashasvisharma-iet', icon: Github, href: '#' },
  { label: 'LeetCode (1576)', icon: Code2, href: '#' },
];

const experiences = [
  {
    company: 'GOOGLE',
    location: 'Hyderabad, India',
    period: 'June 2025 - August 2025',
    role: 'Software Development Intern',
    points: [
      'Built a CLI tool for Kubernetes cluster debugging used by 300+ engineers; added CR watcher and log analyzer, speeding root-cause detection by 3×.',
      'Created and managed Kubernetes PersistentVolumeClaims (PVCs) and related resources for stateful workloads.',
      'Set up Kubernetes environments for a core service from scratch and integrated Golang CLI commands for one-place debugging.',
      'Collaborated with Google Cloud internal team and infrastructure, optimizing daily operations.',
      'Tech Stack: GoLang, Kubernetes, Angular, Gerrit, CLI Development, Internal tools.',
    ],
  },
  {
    company: 'VoiceOwl',
    location: 'Indore, India',
    period: 'October 2025 - November 2025',
    role: 'AI Agent Developer Intern',
    points: [
      'Designed and developed a Slack-based task management agent handling 100+ daily tasks across teams.',
      'Built 10+ curated features including manual/automated task creation and a daily reminder cron scheduler.',
      'Deployed the agent on AWS Lambda with SQS for async execution and used CloudWatch for logs and bug tracking.',
    ],
  },
];

const skillGroups = [
  {
    title: 'Programming Languages',
    skills: ['C++', 'JavaScript', 'Java', 'Go', 'Python'],
  },
  {
    title: 'Frameworks & Databases',
    skills: ['Spring Boot', 'React.js', 'FastAPI', 'Angular', 'Kubernetes', 'LangChain', 'TensorFlow', 'AWS', 'GCP', 'Docker', 'MongoDB', 'MySQL', 'Spanner'],
  },
  {
    title: 'CS Fundamentals',
    skills: ['DSA', 'OS', 'DBMS', 'OOPS', 'SDLC', 'Computer Networks', 'Microservices', 'Distributed Systems'],
  },
];

const projects = [
  {
    title: 'Customer Support Copilot',
    stack: 'LangGraph, FlaskAPI, React',
    period: 'September 2025',
    points: [
      'Engineered an end-to-end AI pipeline to classify 500+ support tickets by topic, sentiment, and priority with >90% accuracy, reducing manual effort by 60%.',
      'Enabled accurate classification and built a RAG-based bot for query handling.',
      'Deployed full-stack demo on Google Cloud for graceful customer-query handling.',
    ],
  },
  {
    title: 'Workshop Management Platform',
    stack: 'Spring Boot, Streamlit, AWS',
    period: 'July 2024',
    points: [
      'Led a top-5 finalist project out of 500+ teams in a national-scale civic automation hackathon.',
      'Built chatbot-based task scheduling and AI-powered analytics for predictive resource allocation.',
      'Deployed a live solution and open-sourced frontend and backend repositories.',
    ],
  },
  {
    title: 'Science Museums Ticket Booking',
    stack: 'React, Spring Boot, Docker, AWS',
    period: 'Aug 2024 - Nov 2024',
    points: [
      'Integrated Razorpay payment gateway with Spring Boot, securely handling 1,000+ transactions.',
      'Built a professional admin analytics dashboard with interactive React components.',
      'Implemented JWT and Google Login for secure auth across microservices.',
    ],
  },
];

const achievements = [
  'Top 5 IMC Hackathon 2024 among 500+ teams; recognized by Sandeep Jain (CEO of GFG).',
  'Open Source Contributions in GSSoc and FOSSASIA with 150+ contributions.',
  'ICPC Regionalist with rank 149 in ICPC prelims and 400+ DSA problems solved.',
  'GDG Mentor: mentored students on projects and internships through workshops.',
  'Certifications: McKinsey Forward Program, TensorFlow, DeepLearning.ai Machine Learning.',
];

const gallery = [event1Image, event2Image, event3Image, event4Image, event5Image, event6Image];

const container = {
  hidden: { opacity: 0, y: 50 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

function SectionTitle({ title, accent, subtitle }: { title: string; accent: string; subtitle?: string }) {
  return (
    <div className="mb-12 text-center">
      <h2 className="text-4xl font-bold text-rose-900 md:text-6xl">
        {title} <span className="bg-gradient-to-r from-pink-500 to-rose-500 bg-clip-text text-transparent">{accent}</span>
      </h2>
      <div className="mx-auto mt-4 h-1 w-24 rounded-full bg-pink-500" />
      {subtitle ? <p className="mx-auto mt-6 max-w-3xl text-xl text-rose-700/80">{subtitle}</p> : null}
    </div>
  );
}

export function HomePage() {
  return (
    <main className="min-h-screen pb-20 text-rose-900">
      <Navbar />

      <div className="mx-auto max-w-7xl px-6">
        <motion.section
          animate={{ opacity: 1, y: 0 }}
          className="grid min-h-[62vh] items-center gap-10 py-20 md:grid-cols-2"
          id="home"
          initial={{ opacity: 0, y: 30 }}
          transition={{ duration: 0.7 }}
        >
          <div>
            <p className="mb-4 inline-flex rounded-full border border-pink-400/40 bg-pink-100/80 px-4 py-2 text-sm text-pink-700">
              Portfolio • Software Engineer
            </p>
            <h1 className="text-5xl font-extrabold leading-tight md:text-7xl">
              Yashasvi <span className="bg-gradient-to-r from-pink-500 to-rose-500 bg-clip-text text-transparent">Sharma</span>
            </h1>
            <p className="mt-6 max-w-xl text-xl text-rose-800/90">Software developer focused on large-scale systems, AI tools, and cloud-native product engineering.</p>
            <div className="mt-6 flex flex-wrap gap-3">
              {contactLinks.map((item) => (
                <a className="inline-flex items-center gap-2 rounded-full border border-pink-300/60 bg-white/70 px-4 py-2 text-rose-900/85 transition hover:-translate-y-1 hover:border-pink-500" href={item.href} key={item.label}>
                  <item.icon className="text-pink-500" size={16} />
                  {item.label}
                </a>
              ))}
            </div>
          </div>
          <div className="rounded-3xl border border-pink-300/70 bg-white/80 p-4 shadow-[0_20px_60px_rgba(244,114,182,0.25)]">
            <img alt="Profile" className="h-[430px] w-full rounded-2xl object-cover" src={profileMainImage} />
          </div>
        </motion.section>

        <motion.section className="py-20" id="about" initial="hidden" viewport={{ once: true, amount: 0.25 }} whileInView="show" variants={container}>
          <SectionTitle accent="Me" subtitle="Engineering student with a passion for web development, embedded systems, and technical leadership." title="About" />
          <div className="grid gap-6 md:grid-cols-2">
            <article className="rounded-2xl border border-pink-300/60 bg-white/70 p-8">
              <h3 className="mb-4 flex items-center gap-2 text-2xl font-semibold text-rose-900">
                <MapPin className="text-pink-500" size={18} /> Personal Info
              </h3>
              <ul className="space-y-2 text-lg text-rose-800/90">
                <li>
                  <strong className="text-rose-900">Name:</strong> Yashasvi Sharma
                </li>
                <li>
                  <strong className="text-rose-900">Location:</strong> Indore, India
                </li>
                <li>
                  <strong className="text-rose-900">Email:</strong> yashasvii045@gmail.com
                </li>
                <li>
                  <strong className="text-rose-900">LeetCode:</strong> 1576
                </li>
              </ul>
            </article>
            <article className="rounded-2xl border border-pink-300/60 bg-white/70 p-8">
              <h3 className="mb-4 flex items-center gap-2 text-2xl font-semibold text-rose-900">
                <GraduationCap className="text-pink-500" size={18} /> Education
              </h3>
              <div className="rounded-xl border border-pink-200/80 bg-pink-50/80 p-4">
                <p className="text-lg font-semibold text-rose-900">Bachelor of Engineering (B.E.) in Information Technology</p>
                <p className="mt-1 text-rose-800/90">Institute of Engineering and Technology, DAVV, Indore, MP</p>
                <p className="mt-1 text-rose-700/80">2023 - 2027 • CGPA: 8.89</p>
              </div>
            </article>
          </div>
        </motion.section>

        <motion.section className="py-20" id="skills" initial="hidden" viewport={{ once: true, amount: 0.25 }} whileInView="show" variants={container}>
          <SectionTitle accent="Skills" subtitle="A diverse set of technical and core computer-science skills developed through education, projects, and internships." title="Technical" />
          <div className="grid gap-6 md:grid-cols-3">
            {skillGroups.map((group) => (
              <motion.article className="rounded-2xl border border-pink-300/60 bg-white/70 p-8" key={group.title} whileHover={{ y: -6 }}>
                <h3 className="mb-4 text-2xl font-semibold">{group.title}</h3>
                <ul className="space-y-2 text-rose-800/90">
                  {group.skills.map((skill) => (
                    <li className="flex items-center gap-2" key={skill}>
                      <span className="h-2 w-2 rounded-full bg-pink-500" />
                      {skill}
                    </li>
                  ))}
                </ul>
              </motion.article>
            ))}
          </div>
        </motion.section>

        <motion.section className="py-20" id="projects" initial="hidden" viewport={{ once: true, amount: 0.25 }} whileInView="show" variants={container}>
          <SectionTitle accent="Projects" subtitle="A collection of projects spanning AI workflows, civic automation, and scalable full-stack systems." title="Featured" />
          <div className="grid gap-6 md:grid-cols-3">
            {projects.map((project) => (
              <motion.article className="rounded-2xl border border-pink-300/60 bg-white/70 p-6" key={project.title} whileHover={{ y: -8 }}>
                <p className="text-sm text-pink-700">{project.period}</p>
                <h3 className="mt-1 text-2xl font-semibold text-rose-900">{project.title}</h3>
                <p className="mt-2 text-sm text-rose-700/80">{project.stack}</p>
                <ul className="mt-4 space-y-2 text-rose-800/90">
                  {project.points.map((point) => (
                    <li className="flex items-start gap-2" key={point}>
                      <span className="mt-2 h-2 w-2 rounded-full bg-pink-500" />
                      {point}
                    </li>
                  ))}
                </ul>
                <a className="mt-4 inline-flex items-center gap-1 text-pink-700 hover:text-pink-800" href="#">
                  View links <ExternalLink size={14} />
                </a>
              </motion.article>
            ))}
          </div>
        </motion.section>

        <motion.section className="py-20" id="experience" initial="hidden" viewport={{ once: true, amount: 0.25 }} whileInView="show" variants={container}>
          <SectionTitle accent="Experience" subtitle="Professional journey and impact in software engineering and AI agent development." title="Work" />
          <div className="grid gap-6 md:grid-cols-2">
            {experiences.map((item) => (
              <article className="rounded-2xl border border-pink-300/60 bg-white/70 p-8" key={item.company}>
                <p className="mb-3 flex items-center gap-2 text-pink-700">
                  <BriefcaseBusiness size={16} /> {item.period}
                </p>
                <h3 className="text-2xl font-semibold text-rose-900">{item.company}</h3>
                <p className="text-rose-700/80">{item.location}</p>
                <p className="mt-2 font-medium text-pink-700">{item.role}</p>
                <ul className="mt-4 space-y-2 text-rose-800/90">
                  {item.points.map((detail) => (
                    <li className="flex items-start gap-2" key={detail}>
                      <span className="mt-2 h-2 w-2 rounded-full bg-pink-500" />
                      {detail}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </motion.section>

        <motion.section className="py-20" id="achievements" initial="hidden" viewport={{ once: true, amount: 0.25 }} whileInView="show" variants={container}>
          <SectionTitle accent="Achievements" subtitle="Recognition, open-source impact, and competitive milestones." title="My" />
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {achievements.map((item) => (
              <motion.article className="rounded-2xl border border-pink-300/60 bg-white/70 p-6" key={item} whileHover={{ scale: 1.02 }}>
                <Trophy className="mb-4 text-amber-500" size={28} />
                <p className="text-lg font-medium text-rose-900">{item}</p>
              </motion.article>
            ))}
          </div>
        </motion.section>

        <motion.section className="py-20" id="gallery" initial="hidden" viewport={{ once: true, amount: 0.25 }} whileInView="show" variants={container}>
          <SectionTitle accent="Gallery" subtitle="Highlights from hackathons, competitions, and team moments." title="Event" />
          <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
            {gallery.map((image, index) => (
              <motion.figure className="overflow-hidden rounded-xl border border-pink-200/80 bg-white/75" key={image} whileHover={{ y: -6 }}>
                <img alt={`Event ${index + 1}`} className="h-52 w-full object-cover" src={image} />
              </motion.figure>
            ))}
          </div>
        </motion.section>


        <motion.section className="rounded-3xl border border-pink-300/60 bg-white/70 p-8" id="contact" initial="hidden" viewport={{ once: true, amount: 0.25 }} whileInView="show" variants={container}>
          <SectionTitle accent="Touch" title="Get In" />
          <div className="grid gap-4 text-lg text-rose-900/85 sm:grid-cols-2">
            <a className="inline-flex items-center gap-2 hover:text-pink-700" href="mailto:yashasvii045@gmail.com">
              <Mail className="text-pink-500" size={16} /> yashasvii045@gmail.com
            </a>
            <p className="inline-flex items-center gap-2">
              <MapPin className="text-pink-500" size={16} /> Indore, India
            </p>
            <p className="inline-flex items-center gap-2">
              <Code2 className="text-pink-500" size={16} /> LeetCode: 1576
            </p>
            <p className="inline-flex items-center gap-2">
              <Github className="text-pink-500" size={16} /> yashasvisharma-iet
            </p>
          </div>
        </motion.section>
      </div>
    </main>
  );
}
