import { useState } from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Terminal, Code, Send, Layout, User, Zap, ChevronDown, Briefcase, Award, Globe } from 'lucide-react';
import TerminalTUI from './TerminalTUI';

interface Project { name: string; description: string; url: string; tech: string[]; highlight?: boolean; }
interface Skill   { name: string; level: number; color: string; }
interface Experience { role: string; company: string; period: string; description: string; tags: string[]; }

const projects: Project[] = [
  { name: 'CS Theory & GenAI Tool', description: 'A sophisticated tool combining classical CS theory with Generative AI. Define languages in plain English using LLMs to derive Regex, while deterministic algorithms handle NFA/DFA conversions and minimization.', url: 'https://github.com/4awmy', tech: ['Python', 'LLMs', 'Automata Theory', 'GenAI'], highlight: true },
  { name: 'Portfolio Website',       description: 'The interactive portfolio with a full TUI terminal mode. Built with React & TypeScript.', url: 'https://github.com/4awmy/portfolio-4awmy', tech: ['React', 'TypeScript', 'Vite'] },
  { name: 'Student Mgmt System',     description: 'A full CRUD app for managing student records, grades, and enrollment.',                   url: 'https://github.com/4awmy',                  tech: ['C#', '.NET', 'SQL'] },
  { name: 'Task Tracker',            description: 'A productivity tool for managing daily tasks with priorities and deadlines.',              url: 'https://github.com/4awmy',                  tech: ['JavaScript', 'HTML', 'CSS'] },
  { name: 'University Assignments',  description: 'Coursework, labs, and projects from the AAST Software Engineering program.',              url: 'https://github.com/4awmy',                  tech: ['Various'] },
];

const skills: Skill[] = [
  { name: 'HTML/CSS',   level: 5, color: '#e34c26' },
  { name: 'JavaScript', level: 4, color: '#f7df1e' },
  { name: 'React',      level: 4, color: '#61dafb' },
  { name: 'TypeScript', level: 3, color: '#3178c6' },
  { name: 'C/C++',      level: 3, color: '#00599C' },
  { name: 'C#',         level: 3, color: '#9b4f96' },
  { name: 'Python',     level: 3, color: '#3572A5' },
  { name: 'Git',        level: 4, color: '#f05032' },
  { name: 'SQL',        level: 3, color: '#00758f' },
];

const experiences: Experience[] = [
  {
    role: 'IT Intern',
    company: 'QNB — Qatar National Bank',
    period: '2025',
    description: 'Gained hands-on experience in IT operations and infrastructure at one of the largest banks in the Middle East.',
    tags: ['IT Infrastructure', 'Banking', 'Operations'],
  },
  {
    role: 'Office Assistant',
    company: "Al Hamdy's Accounting Office",
    period: '2023 – Present',
    description: 'Supporting accounting operations and administrative workflows.',
    tags: ['Administration', 'Accounting', 'Office Mgmt'],
  },
];

export default function App() {
  const [isTerminal, setIsTerminal] = useState(false);

  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  if (isTerminal) {
    return <TerminalTUI onExit={() => setIsTerminal(false)} />;
  }

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans">

      {/* Nav */}
      <nav className="sticky top-0 z-50 px-6 py-4 flex justify-between items-center max-w-6xl mx-auto backdrop-blur-sm border-b border-slate-200 bg-slate-50/80">
        <button onClick={() => scrollTo('hero')} className="text-xl font-bold flex items-center gap-2 hover:opacity-70 transition-opacity">
          <Code className="w-5 h-5 text-blue-600" /> Omar Hossam
        </button>
        <div className="flex items-center gap-6">
          <div className="hidden sm:flex gap-5 text-sm font-medium text-slate-600">
            {['about', 'experience', 'skills', 'projects', 'achievements', 'contact'].map(s => (
              <button key={s} onClick={() => scrollTo(s)} className="capitalize hover:text-blue-600 transition-colors">{s}</button>
            ))}
          </div>
          <button
            onClick={() => setIsTerminal(true)}
            className="flex items-center gap-1.5 px-3 py-1.5 border border-slate-300 rounded-lg text-xs font-mono font-semibold text-slate-600 hover:border-green-500 hover:text-green-600 hover:bg-green-50 transition-all"
          >
            <Terminal className="w-3.5 h-3.5" /> &gt;_ TUI
          </button>
        </div>
      </nav>

      <main className="max-w-5xl mx-auto px-6 pb-24">

        {/* Hero */}
        <section id="hero" className="pt-20 pb-28 relative">
          <div className="absolute -top-10 -left-10 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-50 pointer-events-none" />
          <div className="absolute top-20 right-0 w-72 h-72 bg-indigo-100 rounded-full blur-3xl opacity-40 pointer-events-none" />
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="relative space-y-6">
            <div className="flex flex-wrap gap-2">
              <span className="inline-block px-3 py-1 bg-blue-100 text-blue-700 text-sm font-semibold rounded-full">🎓 AAST — Software Engineering</span>
              <span className="inline-block px-3 py-1 bg-amber-100 text-amber-700 text-sm font-semibold rounded-full">🏆 ICPC 2024 — Honorable Mention</span>
            </div>
            <h1 className="text-5xl sm:text-7xl font-extrabold tracking-tight leading-tight">
              Software <span className="text-blue-600">Engineer</span><br />& AI Enthusiast.
            </h1>
            <p className="text-xl text-slate-500 max-w-2xl leading-relaxed">
              I build intelligent, clean software — from GenAI-powered tools to full-stack web apps. ICPC competitor, QNB intern, and passionate about turning ideas into production-ready products.
            </p>
            <div className="flex flex-wrap gap-3 pt-2">
              <a href="https://github.com/4awmy" target="_blank" rel="noreferrer" className="flex items-center gap-2 px-5 py-3 bg-slate-900 text-white rounded-xl hover:bg-slate-700 transition-colors font-semibold"><Github className="w-5 h-5" /> GitHub</a>
              <a href="https://www.linkedin.com/in/omar-hossam-4awmy" target="_blank" rel="noreferrer" className="flex items-center gap-2 px-5 py-3 bg-blue-700 text-white rounded-xl hover:bg-blue-600 transition-colors font-semibold"><Linkedin className="w-5 h-5" /> LinkedIn</a>
              <a href="mailto:o.metwall06131@student.aast.edu" className="flex items-center gap-2 px-5 py-3 bg-white border border-slate-200 text-slate-800 rounded-xl hover:bg-slate-50 transition-colors shadow-sm font-semibold"><Mail className="w-5 h-5" /> Email Me</a>
              <button onClick={() => setIsTerminal(true)} className="flex items-center gap-2 px-5 py-3 border border-green-500 text-green-700 rounded-xl hover:bg-green-50 transition-colors font-semibold font-mono">
                <Terminal className="w-5 h-5" /> &gt;_ TUI Mode
              </button>
            </div>
            <button onClick={() => scrollTo('about')} className="flex items-center gap-1 text-slate-400 hover:text-blue-600 transition-colors text-sm mt-6 animate-bounce">
              <ChevronDown className="w-5 h-5" /> scroll down
            </button>
          </motion.div>
        </section>

        {/* About */}
        <section id="about" className="py-20 border-t border-slate-100">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-5">
              <h2 className="text-3xl font-bold flex items-center gap-2"><User className="w-7 h-7 text-blue-600" /> About Me</h2>
              <p className="text-slate-600 leading-relaxed">Hey! I'm <strong>Omar Hossam</strong>, a Software Engineering student at the Arab Academy for Science, Technology &amp; Maritime Transport (AAST), expected to graduate in 2027.</p>
              <p className="text-slate-600 leading-relaxed">I'm passionate about building intelligent, thoughtful software — from <strong className="text-blue-600">GenAI-powered tools</strong> that bridge LLMs with classical CS theory, to interactive frontends and backend systems. I earned an <strong className="text-blue-600">ICPC 2024 Honorable Mention</strong> representing AAST Cairo and have real-world experience through my IT internship at <strong>QNB</strong>.</p>
              <p className="text-slate-600 leading-relaxed">I'm trilingual (Arabic, English, French) and currently <strong className="text-blue-600">open to internships</strong> and freelance opportunities. Let's build something great together.</p>
            </div>
            <div className="flex justify-center">
              <div className="w-52 h-52 rounded-3xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center shadow-xl">
                <span className="text-8xl select-none">👨‍💻</span>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Experience */}
        <section id="experience" className="py-20 border-t border-slate-100">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-3xl font-bold flex items-center gap-2 mb-10"><Briefcase className="w-7 h-7 text-blue-600" /> Experience</h2>
            <div className="space-y-6">
              {experiences.map((exp, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="p-6 bg-white border border-slate-200 rounded-2xl shadow-sm hover:shadow-md transition-all relative overflow-hidden group"
                >
                  <div className="absolute top-0 left-0 w-1 h-full bg-blue-600 rounded-l-2xl" />
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-3 pl-4">
                    <div>
                      <h3 className="text-xl font-bold text-slate-800">{exp.role}</h3>
                      <p className="text-blue-600 font-semibold">{exp.company}</p>
                    </div>
                    <span className="text-sm text-slate-400 font-mono mt-1 sm:mt-0">{exp.period}</span>
                  </div>
                  <p className="text-slate-500 pl-4 leading-relaxed">{exp.description}</p>
                  <div className="flex flex-wrap gap-2 mt-3 pl-4">
                    {exp.tags.map(t => <span key={t} className="px-2.5 py-1 bg-slate-100 text-slate-600 text-xs font-semibold rounded-lg">{t}</span>)}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* Skills */}
        <section id="skills" className="py-20 border-t border-slate-100">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-3xl font-bold flex items-center gap-2 mb-10"><Zap className="w-7 h-7 text-blue-600" /> Skills &amp; Tech Stack</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {skills.map((skill, i) => (
                <motion.div key={skill.name} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }} whileHover={{ y: -3 }} className="p-4 bg-white border border-slate-200 rounded-2xl shadow-sm hover:shadow-md transition-all">
                  <div className="flex items-center justify-between mb-3">
                    <span className="font-semibold text-slate-800">{skill.name}</span>
                    <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: skill.color }} />
                  </div>
                  <div className="text-xs text-slate-400 mb-2">{skill.level}/5</div>
                  <div className="w-full h-1.5 bg-slate-100 rounded-full overflow-hidden">
                    <motion.div initial={{ width: 0 }} whileInView={{ width: `${(skill.level / 5) * 100}%` }} viewport={{ once: true }} transition={{ duration: 0.8, delay: i * 0.05 }} className="h-full rounded-full" style={{ backgroundColor: skill.color }} />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* Projects */}
        <section id="projects" className="py-20 border-t border-slate-100">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-3xl font-bold flex items-center gap-2 mb-10"><Layout className="w-7 h-7 text-blue-600" /> Featured Projects</h2>
            <div className="grid sm:grid-cols-2 gap-6">
              {projects.map((project, idx) => (
                <motion.div key={idx} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.08 }} whileHover={{ y: -4 }} className={`p-6 bg-white border rounded-2xl shadow-sm hover:shadow-lg transition-all flex flex-col gap-3 ${project.highlight ? 'border-blue-300 ring-1 ring-blue-100' : 'border-slate-200'}`}>
                  {project.highlight && (
                    <span className="inline-flex items-center gap-1 self-start px-2.5 py-0.5 bg-blue-50 text-blue-600 text-xs font-bold rounded-full">⭐ Featured</span>
                  )}
                  <h3 className="text-xl font-bold">{project.name}</h3>
                  <p className="text-slate-500 flex-1 leading-relaxed">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map(t => <span key={t} className="px-2.5 py-1 bg-blue-50 text-blue-700 text-xs font-semibold rounded-lg">{t}</span>)}
                  </div>
                  <a href={project.url} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 text-blue-600 font-semibold text-sm hover:gap-3 transition-all mt-1">
                    <Github className="w-4 h-4" /> View on GitHub →
                  </a>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* Achievements & Certifications */}
        <section id="achievements" className="py-20 border-t border-slate-100">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-3xl font-bold flex items-center gap-2 mb-10"><Award className="w-7 h-7 text-blue-600" /> Achievements & Certifications</h2>
            <div className="grid sm:grid-cols-2 gap-6">

              {/* ICPC */}
              <motion.div whileHover={{ y: -3 }} className="p-6 bg-gradient-to-br from-amber-50 to-orange-50 border border-amber-200 rounded-2xl shadow-sm hover:shadow-md transition-all">
                <div className="text-4xl mb-3">🏆</div>
                <h3 className="text-xl font-bold text-slate-800">ICPC 2024 — Honorable Mention</h3>
                <p className="text-slate-500 mt-2 leading-relaxed">Qualified and received Honorable Mention at the ICPC 2024 Qualifications (Day 1), representing AAST Cairo.</p>
                <span className="inline-block mt-3 px-3 py-1 bg-amber-100 text-amber-700 text-xs font-semibold rounded-full">Competitive Programming</span>
              </motion.div>

              {/* DELF A2 */}
              <motion.div whileHover={{ y: -3 }} className="p-6 bg-white border border-slate-200 rounded-2xl shadow-sm hover:shadow-md transition-all">
                <div className="text-4xl mb-3">📜</div>
                <h3 className="text-xl font-bold text-slate-800">DELF A2 — French Language</h3>
                <p className="text-slate-500 mt-2 leading-relaxed">Diploma in French Language Studies issued by France Éducation international, November 2021.</p>
                <span className="inline-block mt-3 px-3 py-1 bg-blue-50 text-blue-600 text-xs font-semibold rounded-full">Language Certification</span>
              </motion.div>

              {/* DELF A1 */}
              <motion.div whileHover={{ y: -3 }} className="p-6 bg-white border border-slate-200 rounded-2xl shadow-sm hover:shadow-md transition-all">
                <div className="text-4xl mb-3">📜</div>
                <h3 className="text-xl font-bold text-slate-800">DELF A1 — French Language</h3>
                <p className="text-slate-500 mt-2 leading-relaxed">Diploma in French Language Studies issued by France Éducation international, July 2018.</p>
                <span className="inline-block mt-3 px-3 py-1 bg-blue-50 text-blue-600 text-xs font-semibold rounded-full">Language Certification</span>
              </motion.div>

              {/* Languages */}
              <motion.div whileHover={{ y: -3 }} className="p-6 bg-gradient-to-br from-indigo-50 to-blue-50 border border-indigo-200 rounded-2xl shadow-sm hover:shadow-md transition-all">
                <div className="flex items-center gap-2 mb-3">
                  <Globe className="w-6 h-6 text-indigo-600" />
                  <h3 className="text-xl font-bold text-slate-800">Languages</h3>
                </div>
                <div className="space-y-3 mt-2">
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-slate-700">🇪🇬 Arabic</span>
                    <span className="text-xs text-indigo-600 font-semibold bg-indigo-100 px-2.5 py-1 rounded-full">Native</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-slate-700">🇬🇧 English</span>
                    <span className="text-xs text-indigo-600 font-semibold bg-indigo-100 px-2.5 py-1 rounded-full">Professional</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-slate-700">🇫🇷 French</span>
                    <span className="text-xs text-indigo-600 font-semibold bg-indigo-100 px-2.5 py-1 rounded-full">Working Proficiency</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </section>

        {/* Contact */}
        <section id="contact" className="py-20 border-t border-slate-100">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="p-12 bg-gradient-to-br from-blue-600 to-indigo-700 text-white rounded-3xl text-center space-y-6 shadow-xl">
            <h2 className="text-3xl font-bold">Ready to collaborate?</h2>
            <p className="text-blue-100 max-w-md mx-auto leading-relaxed">I'm currently open for internships and freelance opportunities. Let's build something amazing together.</p>
            <a href="mailto:o.metwall06131@student.aast.edu" className="inline-flex items-center gap-2 px-8 py-4 bg-white text-blue-700 font-bold rounded-xl hover:bg-blue-50 transition-colors shadow-md">
              Send Me an Email <Send className="w-5 h-5" />
            </a>
          </motion.div>
        </section>
      </main>

      <footer className="py-8 text-center text-sm text-slate-400">
        © 2026 Omar Hossam · Built with React &amp; TypeScript
      </footer>
    </div>
  );
}
