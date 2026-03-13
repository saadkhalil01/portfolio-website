'use client';

import { useState, useRef } from 'react';
import Image from "next/image";
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import {
  Github,
  Linkedin,
  ChevronDown,
  ArrowLeft,
  Smartphone,
  Mail,
  MessageCircle,
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
    description: "Helped a health startup deliver a seamless mental wellness platform by integrating a responsive AI chatbot and real-time notifications, achieving a successful App Store and Play Store launch.",
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
    description: "Built a relationship-focused loyalty assistant with real-time push/in-app notifications and a custom GPT-4 integration, enabling the client to successfully deploy to the App Store.",
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
    description: "Developed a robust fan engagement platform featuring secure Stripe Payment integration and highly reliable push notifications.",
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
    description: "Created a comprehensive educational marketplace with real-time chat and integrated payments, drastically reducing launch time for the founders.",
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
      style={{
        paddingLeft: 20
      }}
      animate={{ y: 0, opacity: 1 }}
      className="fixed top-6 left-1/2 -translate-x-1/2 z-50 px-6 py-2 bg-white border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] rounded-none flex items-center gap-4
       sm:gap-8 min-w-max"
    >
      <a href="#Home" className="text-black text-sm font-black uppercase hover:underline decoration-2 underline-offset-4">Home</a>
      <a href="#work" className="text-black text-sm font-black uppercase hover:underline decoration-2 underline-offset-4">Work</a>
      <a href="#about" className="text-black text-sm font-black uppercase hover:underline decoration-2 underline-offset-4">About</a>
      <a href="mailto:saadkhalil9999@gmail.com" className="btn-neo-black p-2 text-xs">
        Strategy Call
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
      className="text-4xl md:text-5xl font-black mb-4 text-black uppercase tracking-tighter"
    >
      {children}
    </motion.h2>
    {subtitle && (
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className="text-black/60 text-lg max-w-2xl mx-auto font-bold"
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
      <section className="relative h-screen flex flex-col items-center justify-center px-6 overflow-hidden neobrutalist-bg">
        <motion.div
          style={{ y: backgroundY }}
          className="absolute inset-0 pointer-events-none flex items-center justify-center opacity-20"
        >
          <div className="w-[800px] h-[800px] border border-blue-500/20 rounded-full animate-pulse" />
          <div className="absolute w-[600px] h-[600px] border border-purple-500/20 rounded-full animate-pulse delay-500" />
        </motion.div>

        <div className="relative z-10 text-center space-y-8 max-w-4xl">

          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-5xl md:text-7xl font-black tracking-tight text-black"
          >
            Crafting <span style={{ paddingRight: 10 }} className="text-black">Mobile</span><br />
            Experiences.
          </motion.h1>

          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            style={{
              marginLeft: 20,
              marginRight: 20,
              marginTop: 40,
              marginBottom: 40,
            }}
            className="text-xl md:text-2xl text-black/80 max-w-2xl mx-auto leading-relaxed"
          >
            I&apos;m <span className="text-black font-extrabold text-3xl md:text-5xl leading-tight">Saad Khalil</span>. I help startups launch high-performance cross-platform apps in half the time.
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
              href="#work" className="btn-neo-black rounded-none">
              Explore My Work <ChevronDown className="w-5 h-5 ml-2" />
            </a>
            <div className="flex items-center gap-4">
              <a href="https://github.com/saadkhalil01" target="_blank" className="btn-neo-white p-4 rounded-none"><Github className="w-6 h-6" /></a>
              <a href="https://www.linkedin.com/in/saad-khalil-0912b2232/" target="_blank" className="btn-neo-white p-4 rounded-none"><Linkedin className="w-6 h-6" /></a>
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
        paddingBottom: 100,
        paddingTop: 70,
      }} id="about" className="py-32 px-6 mx-auto flex flex-col items-center neobrutalist-bg border-y-4 border-black">
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
              transition={{ delay: idx * 0.1 }}
              style={{
                paddingLeft: 20,
                paddingTop: 10
              }}
              className="bg-white border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] rounded-none flex flex-col p-8 hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] transition-all"
            >
              <div className="w-16 h-16 bg-black border-2 border-black flex items-center justify-center mb-8">
                <item.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-black mb-4 text-black uppercase tracking-tight">{item.title}</h3>
              <ul className="space-y-3">
                {item.items.map(tech => (
                  <li key={tech} className="text-black/80 text-base flex items-center gap-3 font-bold">
                    <div className="w-2 h-2 bg-black" /> {tech}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Portfolio Grid */}
      <section style={{
        paddingBottom: 100,
        paddingTop: 70,
      }} id="work" className="py-32 px-6 mx-auto flex flex-col items-center neobrutalist-bg border-b-4 border-black">
        <SectionHeading subtitle="How I solved complex problems for my clients">Case Studies</SectionHeading>
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
              onClick={() => setSelectedApp(app)}
              className="group relative overflow-hidden bg-white border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] p-0 cursor-pointer flex flex-col h-full hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] transition-all"
            >
              <div className="relative aspect-video w-full overflow-hidden border-b-4 border-black">
                <div>
                  <Image
                    src={app.logo}
                    alt={app.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                <div className="absolute top-4 left-4">
                  <span className="bg-black text-white text-xs font-black uppercase tracking-widest px-4 py-2 border-2 border-black">
                    {app.category}
                  </span>
                </div>
              </div>
              <div className="p-8 flex items-center justify-between bg-white">
                <div>
                  <h3 className="text-3xl font-black tracking-tighter text-black uppercase">{app.name}</h3>
                </div>
                <div className="h-14 w-14 flex items-center justify-center bg-black text-white hover:bg-white hover:text-black border-2 border-black transition-colors">
                  <ArrowLeft className="w-4 h-4 rotate-180" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="py-32 px-6 neobrutalist-bg">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mx-auto text-center space-y-8 max-w-7xl"
        >
          <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight text-black">Ready to launch in <br />half the time?</h2>
          <p style={{ textAlign: 'center', alignSelf: "center", margin: "0 auto", marginBottom: 20, marginTop: 20 }} className="text-black/80 text-xl max-w-2xl mx-auto">
            Book a Free 15-Minute Strategy Call and let's map out the perfect plan for your application.
          </p>
          <div className="flex flex-wrap justify-center gap-6 pt-4">
            <a style={{ minWidth: 200 }} href="mailto:saadkhalil9999@gmail.com" className="btn-neo-black rounded-none">
              <Mail className="w-5 h-5 mr-2" /> Book a Strategy Call
            </a>
            <a style={{ minWidth: 200 }} href="https://wa.me/923229953346" className="btn-neo-white rounded-none">
              <MessageCircle className="w-5 h-5 mr-2" /> WhatsApp
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
            className="fixed inset-0 z-[100] bg-[#56d39e]/95 overflow-y-auto px-6 py-12"
          >
            <div className="max-w-6xl mx-auto bg-white border-4 border-black shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] p-8 md:p-16 relative">
              <motion.button
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                onClick={() => setSelectedApp(null)}
                className="mb-8 flex items-center gap-2 text-black font-black uppercase hover:translate-x-[-2px] transition-transform"
              >
                <ArrowLeft className="w-6 h-6" /> Back to Work
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
                    <h2 className="text-5xl md:text-7xl font-black mb-6 text-black uppercase tracking-tighter">{selectedApp.name}</h2>
                    <p className="text-black/80 text-xl leading-relaxed font-bold">{selectedApp.description}</p>
                  </div>

                  <div className="flex flex-wrap gap-3">
                    {selectedApp.technologies.map(tech => (
                      <span key={tech} className="bg-black text-white px-3 py-1 text-xs font-black uppercase border-2 border-black">{tech}</span>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-6 pt-8">
                    {selectedApp.links.appstore && (
                      <a href={selectedApp.links.appstore} target="_blank" className="btn-neo-black">
                        <Smartphone className="w-6 h-6 mr-2" /> App Store
                      </a>
                    )}
                    {selectedApp.links.playstore && (
                      <a href={selectedApp.links.playstore} target="_blank" className="btn-neo-white">
                        <Globe className="w-6 h-6 mr-2" /> Play Store
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

