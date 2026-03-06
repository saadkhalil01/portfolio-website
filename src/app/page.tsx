'use client';

import { useState, useRef } from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import { SiGmail } from 'react-icons/si';
import Image from "next/image";
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import {
  Github,
  Linkedin,
  ChevronDown,
  ArrowLeft,
  Smartphone,
  Zap,
  Cpu,
  Globe,
  Star,
  Layers
} from 'lucide-react';

// --- Data ---
const apps = [
  {
    id: 1,
    name: "MyndSpark",
    description: "Mental wellness app with real-time push/in-app notifications and an AI chatbot for mental health. Available on App Store and Play Store.",
    technologies: ["React Native", "Node.js", "MongoDB", "AI Chatbot", "WebSockets"],
    category: "Health & Wellness",
    logo: "/myndspark-logo.png",
    bg: "bg-blue-500/10",
    links: {
      appstore: "https://apps.apple.com/pk/app/myndspark/id6739531918",
      playstore: "https://play.google.com/store/apps/details?id=com.myndspark"
    }
  },
  {
    id: 2,
    name: "LoyalAI",
    description: "Relationship-focused loyalty assistant with real-time push/in-app notifications and an AI chatbot for relationships. Available on App Store.",
    technologies: ["React Native", "Firebase", "GPT-4", "Expo", "Native Modules"],
    category: "Social AI",
    logo: "/loyal-ai-logo.png",
    bg: "bg-purple-500/10",
    links: {
      appstore: "https://apps.apple.com/pk/app/loyalai-modern-love-tracker/id6747716993"
    },
    screenshots: [
      "/loyalai/iMockup - iPhone 15 Pro1 Max.png",
      "/loyalai/iMockup - iPhone 15 Pro Max (1).png",
      "/loyalai/iMockup - iPhone 15 Pro Max (2).png",
      "/loyalai/iMockup - iPhone 15 Pro Max (3).png",
      "/loyalai/iMockup - iPhone 15 Pro Max-2.png",
    ]
  },
  {
    id: 3,
    name: "FanGenie",
    description: "Fan engagement platform with push notifications and Stripe Payment Sheet integration. Available on App Store.",
    technologies: ["React Native", "Stripe", "Node.js", "Redis", "Push API"],
    category: "Entertainment",
    logo: "/fangenie-logo.jpg",
    bg: "bg-pink-500/10",
    links: {
      appstore: "https://apps.apple.com/pk/app/fangenie/id6751832502"
    }
  },
  {
    id: 4,
    name: "SplitMart",
    description: "Educational marketplace platform for teaching, learning, and service selling. Features real-time chat and integrated payment.",
    technologies: ["React Native", "MongoDB", "Express", "Stripe", "Socket.io"],
    category: "Education",
    logo: "/splitmart-logo.png",
    bg: "bg-cyan-500/10",
    links: {
      appstore: "https://apps.apple.com/pk/app/splitmart/id6740323886",
      playstore: "https://play.google.com/store/apps/details?id=com.splitmart"
    }
  },
];

const expertise = [
  { icon: Smartphone, title: "Mobile", items: ["React Native", "Expo", "Native Modules"] },
  { icon: Cpu, title: "Backend", items: ["Node.js", "Express", "MongoDB", "Firebase"] },
  { icon: Zap, title: "AI/Real-time", items: ["AI Integration", "WebSockets", "Push Notification"] },
  { icon: Star, title: "Fintech", items: ["Stripe", "RevenueCat", "In-App Purchases"] },
];

// --- Components ---

const Navbar = () => {
  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      style={{ height: 40 }}
      className="fixed top-6 left-1/2 -translate-x-1/2 z-50 px-6 py-2.5 glass-panel rounded-full flex items-center gap-4 sm:gap-8 min-w-max"
    >
      <a style={{ paddingLeft: 15, paddingRight: 15 }} href="#" className="nav-link text-sm font-medium">Home</a>
      <a style={{ paddingLeft: 15, paddingRight: 15 }} href="#work" className="nav-link text-sm font-medium">Work</a>
      <a style={{ paddingLeft: 15, paddingRight: 15 }} href="#about" className="nav-link text-sm font-medium">About</a>
      <a style={{ height: "100%", alignItems: "center", justifyContent: "center", display: "flex", paddingLeft: 15, paddingRight: 15 }} href="mailto:saadkhalil9999@gmail.com" className="px-5 py-2 bg-white text-black rounded-full text-sm font-bold hover:scale-105 transition-all shadow-[0_0_15px_rgba(255,255,255,0.3)]">
        Hire Me
      </a>
    </motion.nav>
  );
};

const SectionHeading = ({ children, subtitle }: { children: React.ReactNode; subtitle?: string }) => (
  <div className="mb-12 text-center flex flex-col items-center">
    <motion.h2
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      style={{
        marginBottom: 10,
      }}
      className="text-4xl md:text-5xl font-bold mb-4"
    >
      {children}
    </motion.h2>
    {subtitle && (
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className="text-slate-400 text-lg max-w-2xl mx-auto"
      >
        {subtitle}
      </motion.p>
    )}
  </div>
);

export default function Home() {
  const [selectedApp, setSelectedApp] = useState<typeof apps[0] | null>(null);
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: containerRef });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  return (
    <div ref={containerRef} className="relative min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-screen flex flex-col items-center justify-center px-6 overflow-hidden">
        <motion.div
          style={{ y: backgroundY }}
          className="absolute inset-0 pointer-events-none flex items-center justify-center opacity-20"
        >
          <div className="w-[800px] h-[800px] border border-blue-500/20 rounded-full animate-pulse" />
          <div className="absolute w-[600px] h-[600px] border border-purple-500/20 rounded-full animate-pulse delay-500" />
        </motion.div>

        <div className="relative z-10 text-center space-y-8 max-w-4xl">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            style={{
              marginTop: 20,
              marginBottom: 20,
              padding: 10
            }}
            className="inline-block px-4 py-1.5 rounded-full glass-panel text-blue-400 text-sm font-medium mb-4 border-blue-500/20 backdrop-blur-md"
          >
            Available for New Projects
          </motion.div>

          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-6xl md:text-8xl font-black tracking-tight"
          >
            Crafting <span style={{ paddingRight: 10 }} className="text-gradient-primary">Mobile</span><br />
            Experiences.
          </motion.h1>

          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            style={{
              marginTop: 30,
              marginBottom: 20,
            }}
            className="text-xl md:text-2xl text-slate-400 max-w-2xl mx-auto leading-relaxed"
          >
            I&apos;m <span className="text-white font-extrabold text-8xl md:text-3xl">Saad Khalil</span>, a Senior React Native Engineer specializing in high-performance cross-platform apps and AI integrations.
          </motion.p>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="flex flex-wrap items-center justify-center gap-6 pt-4"
          >
            <a
              style={{
                padding: 20,
              }}
              href="#work" className="h-14 px-8 bg-white text-black rounded-2xl font-bold flex items-center gap-2 hover:scale-105 transition-all shadow-[0_0_20px_rgba(255,255,255,0.2)]">
              Explore My Work <ChevronDown className="w-5 h-5" />
            </a>
            <div className="flex items-center gap-4">
              <a href="https://github.com/saadkhalil01" target="_blank" className="h-14 w-14 flex items-center justify-center glass-panel rounded-2xl hover:scale-110 hover:bg-white/10 transition-all border-white/10"><Github className="w-6 h-6" /></a>
              <a href="https://www.linkedin.com/in/saad-khalil-0912b2232/" target="_blank" className="h-14 w-14 flex items-center justify-center glass-panel rounded-2xl hover:scale-110 hover:bg-white/10 transition-all border-white/10"><Linkedin className="w-6 h-6" /></a>
            </div>
          </motion.div>
        </div>

        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-slate-500"
        >
          <div className="w-6 h-10 rounded-full border-2 border-slate-700 flex justify-center p-1">
            <div className="w-1 h-2 bg-slate-500 rounded-full" />
          </div>
        </motion.div>
      </section>

      {/* About / Expertise */}
      <section style={{
        marginBottom: 100,
      }} id="about" className="py-32 px-6 mx-auto flex flex-col items-center">
        <SectionHeading subtitle="Technical stack & specializations">Expertise</SectionHeading>
        <div style={{
          marginTop: 20,
        }} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 w-full max-w-7xl">
          {expertise.map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              style={{
                padding: 25,
              }}
              transition={{ delay: idx * 0.1 }}
              className="glass-panel  rounded-[2.5rem] flex flex-col hover:bg-white/5 transition-colors border-white/5"
            >
              <div className="w-16 h-16 bg-blue-500/10 rounded-2xl flex items-center justify-center mb-8">
                <item.icon className="w-8 h-8 text-blue-400" />
              </div>
              <h3 style={{
                marginTop: 20,
              }} className="text-2xl font-bold mb-6">{item.title}</h3>
              <ul style={{
                marginTop: 20,
              }}>
                {item.items.map(tech => (
                  <li key={tech} className="text-slate-400 text-base flex items-center gap-3">
                    <div className="w-1.5 h-1.5 bg-blue-500 rounded-full" /> {tech}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Portfolio Grid */}
      <section style={{
        marginBottom: 60,
      }} id="work" className="py-32 px-6  mx-auto flex flex-col items-center">
        <SectionHeading subtitle="Handcrafted mobile applications">Selected Projects</SectionHeading>
        <div style={{
          marginTop: 40,
        }} className="grid grid-cols-1 md:grid-cols-2 gap-5 items-stretch w-full max-w-7xl"
        >
          {apps.map((app, idx) => (
            <motion.div
              key={app.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              style={{
                padding: 25,
              }}
              onClick={() => setSelectedApp(app)}
              className={`group relative overflow-hidden rounded-[3rem] glass-panel p-2 cursor-pointer glass-panel-hover flex flex-col h-full`}
            >
              <motion.div
                style={{ marginBottom: 20 }}
                whileHover={{ scale: 1.05 }}
                className="relative z-10 w-40 h-40 md:w-56 md:h-56 rounded-[2.5rem] overflow-hidden shadow-2xl"
              >
                <Image
                  src={app.logo}
                  alt={app.name}
                  fill
                  className="object-cover"
                />
              </motion.div>
              <div className="p-10 flex items-center justify-between">
                <div>
                  <span style={{
                    marginBottom: 10,
                  }} className="text-blue-400 text-sm font-bold uppercase tracking-widest mb-3 block">{app.category}</span>
                  <h3 className="text-4xl font-bold tracking-tight">{app.name}</h3>
                </div>
                <div className="h-16 w-16 flex items-center justify-center rounded-[1.5rem] glass-panel group-hover:bg-white group-hover:text-black transition-all shadow-xl">
                  <ArrowLeft className="w-8 h-8 rotate-180" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-32 px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          style={{
            padding: 50, alignSelf: "center", margin: "0 auto",
            marginBottom: 20,
            marginTop: 20
          }}
          className="mx-auto glass-panel p-16 rounded-[3rem] text-center space-y-8 relative overflow-hidden w-full max-w-7xl"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 blur-[100px]" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-500/10 blur-[100px]" />

          <h2 className="text-4xl md:text-6xl font-bold tracking-tight">Let&apos;s build something <br />extraordinary.</h2>
          <p style={{ textAlign: 'center', alignSelf: "center", margin: "0 auto", marginBottom: 20, marginTop: 20 }} className="text-slate-400 text-xl max-w-2xl mx-auto">
            Ready to bring your mobile app vision to life? Let&apos;s connect and discuss your next big project.
          </p>
          <div className="flex flex-wrap justify-center gap-4 pt-4">
            <a style={{ padding: '14px 36px', borderRadius: 100, minWidth: 180, justifyContent: 'center' }} href="mailto:saadkhalil9999@gmail.com" className="bg-white text-black font-bold hover:scale-105 transition-transform flex items-center gap-2">
              <SiGmail className="w-5 h-5" /> Message Me
            </a>
            <a style={{ padding: '14px 36px', borderRadius: 100, minWidth: 180, justifyContent: 'center' }} href="https://wa.me/923229953346" className="glass-panel font-bold hover:scale-105 transition-transform flex items-center gap-2">
              <FaWhatsapp className="w-5 h-5" /> WhatsApp
            </a>
          </div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-slate-900 text-center text-slate-500">
        <p>© 2024 Muhammad Saad. Developed with React & Framer Motion.</p>
      </footer>

      {/* App Details Overlay */}
      <AnimatePresence>
        {selectedApp && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-xl overflow-y-auto px-6 py-12"
          >
            <div style={{
              padding: 50,
            }} className="mx-auto">
              <motion.button
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                onClick={() => setSelectedApp(null)}
                className="mb-8 flex items-center gap-2 text-slate-400 hover:text-white transition-colors"
              >
                <ArrowLeft className="w-5 h-5" /> Back to Work
              </motion.button>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  className="space-y-8"
                >
                  <div style={{ marginTop: 50 }} className="w-24 h-24 rounded-3xl overflow-hidden shadow-2xl">
                    <Image src={selectedApp.logo} alt={selectedApp.name} width={96} height={96} className="object-cover" />
                  </div>
                  <div>
                    <h2 style={{ textAlign: 'left', alignSelf: "center", margin: "0 auto", marginBottom: 20, marginTop: 20 }} className="text-5xl font-black mb-4">{selectedApp.name}</h2>
                    <p className="text-slate-400 text-xl leading-relaxed">{selectedApp.description}</p>
                  </div>

                  <div style={{ marginTop: 10, marginBottom: 20 }} className="flex flex-wrap gap-3">
                    {selectedApp.technologies.map(tech => (
                      <span key={tech} className="badge">{tech}</span>
                    ))}
                  </div>

                  <div style={{ marginTop: 10 }} className="flex flex-wrap gap-4 pt-4">
                    {selectedApp.links.appstore && (
                      <a style={{ height: 30, paddingLeft: 10, paddingRight: 10, borderRadius: 100 }} href={selectedApp.links.appstore} target="_blank" className="px-6 py-3 bg-white text-black rounded-xl font-bold flex items-center gap-2 hover:scale-105 transition-transform">
                        <Smartphone className="w-5 h-5" /> App Store
                      </a>
                    )}
                    {selectedApp.links.playstore && (
                      <a style={{ height: 30, paddingLeft: 10, paddingRight: 10, borderRadius: 100 }} href={selectedApp.links.playstore} target="_blank" className="px-6 py-3 glass-panel rounded-xl font-bold flex items-center gap-2 hover:scale-105 transition-transform">
                        <Globe className="w-5 h-5" /> Play Store
                      </a>
                    )}
                  </div>
                </motion.div>

                {/* <motion.div
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className="relative aspect-[9/16] lg:aspect-square bg-slate-900 rounded-[3rem] overflow-hidden glass-panel flex items-center justify-center p-8"
                >
                  {selectedApp.screenshots ? (
                    <div className="flex gap-4 overflow-x-auto p-4 snap-x no-scrollbar">
                      {selectedApp.screenshots.map((shot, idx) => (
                        <div key={idx} className="relative min-w-[280px] h-[500px] rounded-2xl overflow-hidden snap-center shadow-2xl">
                          <Image src={shot} alt="Screenshot" fill className="object-cover" />
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className={`w-full h-full ${selectedApp.bg} opacity-50 flex items-center justify-center`}>
                      <Layers className="w-20 h-20 text-white/20" />
                    </div>
                  )}
                </motion.div> */}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

