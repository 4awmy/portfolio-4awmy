import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, Linkedin, Mail, Terminal, User, Code, Send, Layout } from 'lucide-react';

const projects = [
  { name: 'Assignments', description: 'Collection of university assignments and labs.' },
  { name: 'Portfolio Website', description: 'The interactive portfolio you are looking at right now.' },
  { name: 'Student Management System', description: 'A CRUD application for managing student data.' },
  { name: 'Task Tracker', description: 'A productivity tool to manage daily tasks.' }
];

export default function App() {
  const [isTerminal, setIsTerminal] = useState(false);
  const [command, setCommand] = useState('');
  const [history, setHistory] = useState<string[]>(['Welcome to Omar\'s Interactive Portfolio. Type "help" for commands.']);

  const handleCommand = (e: React.FormEvent) => {
    e.preventDefault();
    const cmd = command.toLowerCase().trim();
    let response = '';

    switch(cmd) {
      case 'help':
        response = 'Available commands: about, projects, contact, clear';
        break;
      case 'about':
        response = 'Omar Hossam - Software Engineering Student. Passionate about web development and building interactive experiences.';
        break;
      case 'projects':
        response = projects.map(p => `- ${p.name}: ${p.description}`).join('\n');
        break;
      case 'contact':
        response = 'GitHub: 4awmy | LinkedIn: omar-hossam-4awmy | Email: o.metwall06131@student.aast.edu';
        break;
      case 'clear':
        setHistory([]);
        setCommand('');
        return;
      default:
        response = `Command not found: ${cmd}. Type "help" for a list of commands.`;
    }

    setHistory([...history, `> ${command}`, response]);
    setCommand('');
  };

  return (
    <div className={`min-h-screen transition-colors duration-500 ${isTerminal ? 'terminal-theme bg-black text-green-500' : 'bg-slate-50 text-slate-900'}`}>
      
      {/* Navigation / Header */}
      <nav className="p-6 flex justify-between items-center max-w-6xl mx-auto">
        <h1 className="text-2xl font-bold flex items-center gap-2">
          {isTerminal ? <Terminal className="w-6 h-6" /> : <Code className="w-6 h-6 text-blue-600" />}
          Omar Hossam
        </h1>
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2">
            <span className="text-xs font-semibold uppercase tracking-wider opacity-60">
              {isTerminal ? 'Terminal Mode' : 'Modern Mode'}
            </span>
            <button 
              onClick={() => setIsTerminal(!isTerminal)}
              className={`w-12 h-6 rounded-full relative transition-colors ${isTerminal ? 'bg-green-900 border border-green-500' : 'bg-blue-600'}`}
            >
              <motion.div 
                animate={{ x: isTerminal ? 24 : 0 }}
                className={`absolute w-6 h-6 rounded-full top-0 left-0 shadow-sm ${isTerminal ? 'bg-green-500' : 'bg-white'}`}
              />
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="max-w-4xl mx-auto px-6 pt-12 pb-24">
        {!isTerminal ? (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <h2 className="text-5xl font-extrabold tracking-tight sm:text-7xl">
                Software <span className="text-blue-600">Architect</span> in Training.
              </h2>
              <p className="text-xl text-slate-600 max-w-2xl leading-relaxed">
                I build digital experiences that are clean, efficient, and interactive. 
                Currently a student at AAST, exploring the frontiers of software engineering.
              </p>
            </div>

            <div className="flex gap-4">
              <a href="https://github.com/4awmy" className="p-3 bg-slate-900 text-white rounded-xl hover:bg-slate-800 transition-colors">
                <Github className="w-6 h-6" />
              </a>
              <a href="https://www.linkedin.com/in/omar-hossam-4awmy" className="p-3 bg-blue-700 text-white rounded-xl hover:bg-blue-600 transition-colors">
                <Linkedin className="w-6 h-6" />
              </a>
              <a href="mailto:o.metwall06131@student.aast.edu" className="p-3 bg-white border border-slate-200 text-slate-900 rounded-xl hover:bg-slate-50 transition-colors shadow-sm">
                <Mail className="w-6 h-6" />
              </a>
            </div>

            {/* Projects Grid */}
            <section className="pt-16">
              <h3 className="text-3xl font-bold mb-8 flex items-center gap-2">
                <Layout className="w-8 h-8 text-blue-600" /> Featured Projects
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {projects.map((project, idx) => (
                  <motion.div 
                    key={idx}
                    whileHover={{ scale: 1.02 }}
                    className="p-6 bg-white border border-slate-200 rounded-2xl shadow-sm hover:shadow-md transition-all"
                  >
                    <h4 className="text-xl font-bold mb-2">{project.name}</h4>
                    <p className="text-slate-600 mb-4">{project.description}</p>
                    <button className="text-blue-600 font-semibold flex items-center gap-1 hover:gap-2 transition-all">
                      View Repository <Code className="w-4 h-4" />
                    </button>
                  </motion.div>
                ))}
              </div>
            </section>

            {/* Contact CTA */}
            <section className="pt-20 text-center">
              <div className="p-12 bg-blue-600 text-white rounded-3xl space-y-6">
                <h3 className="text-3xl font-bold">Ready to collaborate?</h3>
                <p className="text-blue-100 max-w-md mx-auto">
                  I'm currently open for internships and freelance opportunities. 
                  Let's build something amazing together.
                </p>
                <button className="px-8 py-4 bg-white text-blue-600 font-bold rounded-xl hover:bg-blue-50 transition-colors inline-flex items-center gap-2">
                  Contact Me <Send className="w-5 h-5" />
                </button>
              </div>
            </section>
          </motion.div>
        ) : (
          <div className="font-mono text-green-500 h-[70vh] flex flex-col border border-green-500/30 rounded-lg p-6 bg-black/40 backdrop-blur-sm">
            <div className="flex-1 overflow-y-auto space-y-2 mb-4 scrollbar-hide">
              {history.map((line, i) => (
                <div key={i} className="whitespace-pre-wrap">{line}</div>
              ))}
            </div>
            <form onSubmit={handleCommand} className="flex gap-2 items-center">
              <span>{`omar@portfolio:~ $`}</span>
              <input 
                type="text" 
                autoFocus
                value={command}
                onChange={(e) => setCommand(e.target.value)}
                className="bg-transparent border-none outline-none flex-1 text-green-500"
              />
            </form>
          </div>
        )}
      </main>

      <footer className={`py-8 text-center text-sm ${isTerminal ? 'text-green-900' : 'text-slate-400'}`}>
        &copy; 2026 Omar Hossam. Built with React & Tailwind.
      </footer>
    </div>
  );
}
