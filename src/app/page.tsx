'use client';

import { useState, useRef, useEffect } from 'react';
import Image from "next/image";
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import {
  ChevronDown,
  ArrowLeft,
  Smartphone,
  Zap,
  Cpu,
  Star,
  Check,
  Menu,
  X,
} from 'lucide-react';
import { SiWhatsapp, SiGmail } from 'react-icons/si';
import { FaGithub, FaLinkedin, FaAppStoreIos, FaGooglePlay } from 'react-icons/fa';
import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa';

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
    },
    screenshots: [
      "https://res.cloudinary.com/di6f1n6pc/image/upload/f_auto,q_auto/v1776240910/Screenshot_2025-11-26_at_10.04.12_PM_wx3upe.png",
      "https://res.cloudinary.com/di6f1n6pc/image/upload/f_auto,q_auto/v1776240910/Screenshot_2025-11-26_at_10.01.19_PM_m1jxcf.png",
      "https://res.cloudinary.com/di6f1n6pc/image/upload/f_auto,q_auto/v1776240910/Screenshot_2025-11-26_at_10.04.22_PM_td4xrg.png",
      "https://res.cloudinary.com/di6f1n6pc/image/upload/f_auto,q_auto/v1776240910/Screenshot_2025-11-26_at_10.15.44_PM_foftpg.png",
    ]
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
      "https://res.cloudinary.com/di6f1n6pc/image/upload/f_auto,q_auto/v1776240911/Screenshot_2025-11-26_at_9.49.53_PM_kbaoch.png",
      "https://res.cloudinary.com/di6f1n6pc/image/upload/f_auto,q_auto/v1776240910/Screenshot_2025-11-26_at_9.49.31_PM_hosndn.png",
      "https://res.cloudinary.com/di6f1n6pc/image/upload/f_auto,q_auto/v1776240910/Screenshot_2025-11-26_at_9.49.09_PM_atobin.png",
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
    },
    screenshots: [
      "https://res.cloudinary.com/di6f1n6pc/image/upload/f_auto,q_auto/v1776240911/Screenshot_2026-04-15_at_12.52.22_PM_dfnahd.png",
      "https://res.cloudinary.com/di6f1n6pc/image/upload/f_auto,q_auto/v1776240911/Screenshot_2026-04-15_at_12.52.41_PM_aetjc4.png",
      "https://res.cloudinary.com/di6f1n6pc/image/upload/f_auto,q_auto/v1776240911/Screenshot_2026-04-15_at_12.52.32_PM_ykfoqb.png",
    ]
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
  { icon: Smartphone, title: "iOS & Mobile", items: ["React Native", "SwiftUI", "Expo", "Native Modules"] },
  { icon: Cpu, title: "Backend", items: ["Node.js", "Express", "MongoDB", "Firebase"] },
  { icon: Zap, title: "AI/Real-time", items: ["AI Integration", "WebSockets", "Push Notification"] },
  { icon: Star, title: "Fintech", items: ["Stripe", "RevenueCat", "In-App Purchases"] },
];

const processSteps = [
  {
    number: "01",
    title: "Discovery Call",
    description: "We align on your goals, target users, and timeline in 30 minutes. I ask the hard questions upfront so there are no surprises later.",
  },
  {
    number: "02",
    title: "Architecture & Plan",
    description: "I map out the full tech stack, sprint milestones, and any technical risks — before a single line of code is written.",
  },
  {
    number: "03",
    title: "Sprint Development",
    description: "Rapid two-week sprints with live demos after each one. You always know exactly where your app stands.",
  },
  {
    number: "04",
    title: "Launch & Handoff",
    description: "App Store submission, production deployment, and full code handoff with documentation. You own everything.",
  },
];

const reviews = [
  {
    name: "Myuran HasarangaNathan",
    role: "Founder, MyndSpark",
    location: "Sri Lanka",
    content: "Saad's ability to turn complex AI requirements into a smooth mobile experience is unmatched. We launched ahead of schedule thanks to his expertise.",
    rating: 5
  },
  {
    name: "Michael Thompson",
    role: "CTO, LoyalAI",
    location: "USA",
    content: "Working with Saad was a game-changer. His deep knowledge of React Native and AI integration helped us build a truly premium application.",
    rating: 4.5
  },
  {
    name: "Daniel Rodriguez",
    role: "CTO, TechSolutions",
    location: "USA",
    content: "Saad's bug-fixing expertise saved our launch. He identified and resolved critical performance bottlenecks that others missed.",
    rating: 4.5
  },
  {
    name: "Emily Watson",
    role: "Founder, SpeedFlow",
    location: "UK",
    content: "The app performance improved by 40% after Saad's optimization. His deep understanding of React Native internals is truly impressive.",
    rating: 5
  },
  {
    name: "Sarah J. Stevens",
    role: "Founder, SplitMart",
    location: "Germany",
    content: "Reliable, fast, and incredibly skilled. Saad doesn't just write code; he understands the business goals and delivers accordingly.",
    rating: 5
  },
];


const pricingPlans = [
  {
    name: "Starter",
    tagline: "Ship your MVP fast",
    price: "$999",
    period: "one-time",
    highlight: false,
    badge: null,
    description: "Perfect for founders who need a focused, production-ready mobile app to validate their idea.",
    features: [
      "1 platform (iOS or Android)",
      "Up to 5 core screens",
      "Auth + basic backend",
      "Push notifications",
      "App Store submission",
      "2 weeks of post-launch support",
    ],
    cta: "Get Started",
    ctaHref: "mailto:saadkhalil9999@gmail.com?subject=Starter Plan",
  },
  {
    name: "Growth",
    tagline: "The full product, done right",
    price: "$2999",
    period: "one-time",
    highlight: true,
    badge: "Most Popular",
    description: "For startups ready to launch a polished cross-platform app with payments and AI integration.",
    features: [
      "iOS + Android (React Native)",
      "Unlimited screens",
      "AI / GPT integration",
      "Stripe / RevenueCat payments",
      "Real-time features (WebSockets)",
      "App Store + Play Store submission",
      "4 weeks of post-launch support",
      "Full code handoff + documentation",
    ],
    cta: "Book a Call",
    ctaHref: "mailto:saadkhalil9999@gmail.com?subject=Growth Plan",
  },
  {
    name: "Scale",
    tagline: "Dedicated engineering partner",
    price: "$1999",
    period: "/ month",
    highlight: false,
    badge: "Best Value",
    description: "Ongoing development, feature sprints, and technical leadership — your app keeps growing.",
    features: [
      "Everything in Growth",
      "Dedicated 40 hrs/month",
      "Weekly sprint demos",
      "Architecture consulting",
      "Performance optimization",
      "Priority Slack support",
      "Cancel anytime",
    ],
    cta: "Let's Talk",
    ctaHref: "https://wa.me/923229953346",
  },
];

// --- Components ---

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const links = [
    { href: '#Home', label: 'Home' },
    { href: '#work', label: 'Work' },
    { href: '#about', label: 'About' },
    // { href: '#pricing', label: 'Pricing' }, // temporarily hidden
  ];

  return (
    <>
      {/* Desktop: centered pill */}
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        style={{ paddingLeft: 24, paddingRight: 0 }}
        className="hidden sm:flex fixed top-0 left-1/2 -translate-x-1/2 z-50 px-4 py-2 bg-white border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] items-center gap-6"
      >
        {links.map(l => (
          <a key={l.href} href={l.href} className="text-black text-sm font-black uppercase hover:underline decoration-2 underline-offset-4">{l.label}</a>
        ))}
        <a href="mailto:saadkhalil9999@gmail.com" style={{ padding: '8px 14px' }} className="btn-neo-black text-xs whitespace-nowrap">
          Strategy Call
        </a>
      </motion.nav>

      {/* Mobile: hamburger button — plain div owns positioning so Framer Motion can't eat right/top */}
      <div style={{ position: 'fixed', top: 12, right: 12, zIndex: 50 }} className="sm:hidden">
        <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }}>
          <button
            onClick={() => setIsOpen(o => !o)}
            aria-label="Toggle menu"
            style={{ width: 44, height: 44 }}
            className="flex items-center justify-center border-2 border-black bg-white text-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] active:shadow-none active:translate-x-[2px] active:translate-y-[2px] transition-all"
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </motion.div>
      </div>

      {/* Mobile dropdown menu */}
      <AnimatePresence>
        {isOpen && (
          <div style={{ position: 'fixed', top: 68, right: 12, zIndex: 40 }} className="sm:hidden">
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.15 }}
              className="bg-white border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
              style={{ minWidth: 200 }}
            >
              {links.map(l => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setIsOpen(false)}
                  style={{ paddingLeft: 20, paddingTop: 16, paddingBottom: 16 }}
                  className="block text-black font-black uppercase text-sm border-b-2 border-black hover:bg-black hover:text-white transition-colors"
                >
                  {l.label}
                </a>
              ))}
              <a
                href="mailto:saadkhalil9999@gmail.com"
                onClick={() => setIsOpen(false)}
                style={{ paddingLeft: 20, paddingTop: 16, paddingBottom: 16 }}
                className="block bg-black text-white font-black uppercase text-sm tracking-widest"
              >
                Strategy Call →
              </a>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
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

const ReviewCard = ({ name, role, content, rating }: typeof reviews[0]) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    style={{ padding: 10 }}
    className="bg-white border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] p-0 flex flex-col gap-6 min-w-[280px] sm:min-w-[350px] md:min-w-[450px]"
  >
    <div className="flex gap-1 text-yellow-400">
      {[...Array(5)].map((_, i) => {
        const starIndex = i + 1;
        if (starIndex <= Math.floor(rating)) {
          return <FaStar key={i} className="w-5 h-5 fill-current" />;
        } else if (starIndex === Math.ceil(rating) && !Number.isInteger(rating)) {
          return <FaStarHalfAlt key={i} className="w-5 h-5 fill-current" />;
        } else {
          return <FaRegStar key={i} className="w-5 h-5" />;
        }
      })}
    </div>
    <p className="text-black font-bold italic leading-relaxed">&quot;{content}&quot;</p>
    <div className="flex justify-between items-end">
      <div>
        <h4 className="font-black text-black uppercase tracking-tight">{name}</h4>
        <p className="text-black/60 text-sm font-bold uppercase">{role}</p>
      </div>
      {reviews.find(r => r.name === name)?.location && (
        <span className="text-black/40 text-[10px] font-black uppercase px-1.5 py-0.5">
          {reviews.find(r => r.name === name)?.location}
        </span>
      )}
    </div>
  </motion.div>
);


export default function Home() {
  const [selectedApp, setSelectedApp] = useState<typeof apps[0] | null>(null);
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: containerRef });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const [wordIndex, setWordIndex] = useState(0);
  const words = ["Experiences", "Applications", "Solutions"];

  useEffect(() => {
    const interval = setInterval(() => {
      setWordIndex((prev) => (prev + 1) % words.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [words.length]);

  return (
    <div ref={containerRef} className="relative min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section id="Home" className="relative h-screen flex flex-col items-center justify-center px-6 overflow-hidden neobrutalist-bg">
        <motion.div
          style={{ y: backgroundY }}
          className="absolute inset-0 pointer-events-none flex items-center justify-center opacity-20"
        >
          <div className="w-[800px] h-[800px] border border-[#7DD3FC]/20 rounded-full animate-pulse" />
          <div className="absolute w-[600px] h-[600px] border border-[#7DD3FC]/20 rounded-full animate-pulse delay-500" />
        </motion.div>

        <div className="relative z-10 text-center space-y-8 max-w-4xl">

          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-5xl md:text-7xl font-black tracking-tight text-black"
          >
            Crafting <span style={{ paddingRight: 10 }} className="text-black">Mobile</span><br />
            <div className="relative h-[1.2em] flex justify-center items-center overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.span
                  key={words[wordIndex]}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  className="text-white absolute whitespace-nowrap"
                >
                  {words[wordIndex]}.
                </motion.span>
              </AnimatePresence>
            </div>
          </motion.h1>

          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-lg md:text-2xl text-black/80 max-w-2xl mx-auto leading-relaxed px-4 mt-5 mb-5 md:mt-10 md:mb-10"
          >
            I&apos;m <span className="text-black font-extrabold text-2xl md:text-5xl leading-tight">Saad Khalil</span>. I help startups launch high-performance cross-platform apps in half the time.
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
              <a href="https://github.com/saadkhalil01" target="_blank" className="btn-neo-white p-4 rounded-none" aria-label="View GitHub Profile"><FaGithub className="w-6 h-6" /></a>
              <a href="https://www.linkedin.com/in/saad-khalil-0912b2232/" target="_blank" className="btn-neo-white p-4 rounded-none" aria-label="View LinkedIn Profile"><FaLinkedin className="w-6 h-6" /></a>
            </div>
          </motion.div>
        </div>

        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-black/40"
        >
          <div className="w-6 h-10 rounded-full border-2 border-black/40 flex justify-center p-1">
            <div className="w-1 h-2 bg-black/40 rounded-full" />
          </div>
        </motion.div>
      </section>

      {/* About / Expertise */}
      <section style={{
        paddingBottom: 100,
        paddingTop: 70,
      }} id="about" className="py-32 px-6 mx-auto flex flex-col items-center bg-white border-y-4 border-black">
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

                <div className="absolute inset-0 flex items-center justify-center sm:justify-start sm:pl-20">
                  <div className="relative w-42 h-42 sm:w-44 sm:h-44 md:w-52 md:h-52 flex-shrink-0 overflow-hidden border-4 border-black bg-[#f4f4f4] shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
                    <Image
                      src={app.logo}
                      alt={app.name}
                      fill
                      className="object-cover p-1"
                    />
                  </div>
                </div>

                <div className="absolute top-4 left-4">
                  <span style={{
                    padding: 10
                  }} className="bg-black text-white text-xs font-black uppercase tracking-widest px-4 py-2 border-2 border-black">
                    {app.category}
                  </span>
                </div>
              </div>
              <div className="p-8 flex items-center justify-between bg-white">
                <div style={{
                  paddingLeft: 10
                }}>
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

      {/* Process Section */}
      <section style={{ paddingBottom: 100, paddingTop: 70 }} className="py-32 px-6 mx-auto flex flex-col items-center bg-white border-b-4 border-black">
        <SectionHeading subtitle="From first call to App Store — here's exactly how we work together">How It Works</SectionHeading>
        <div style={{ marginTop: 40 }} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 w-full max-w-7xl">
          {processSteps.map((step, idx) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              style={{ padding: 30 }}
              className="bg-white border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] flex flex-col gap-4 hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] transition-all"
            >
              <span className="text-6xl font-black text-black/10 leading-none">{step.number}</span>
              <h3 className="text-xl font-black text-black uppercase tracking-tight">{step.title}</h3>
              <p className="text-black/70 font-bold leading-relaxed text-sm">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Pricing Section — temporarily hidden */}
      {/* <section id="pricing" style={{ paddingBottom: 100, paddingTop: 70 }} className="py-32 px-6 mx-auto flex flex-col items-center neobrutalist-bg border-b-4 border-black">
        <SectionHeading subtitle="Transparent pricing for every stage of your journey">Pricing Plans</SectionHeading>
        <div style={{ marginTop: 40 }} className="grid grid-cols-1 md:grid-cols-3 gap-0 w-full max-w-6xl border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
          {pricingPlans.map((plan, idx) => (
            <motion.div
              key={plan.name}
              style={{
                padding: 30
              }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className={`relative flex flex-col p-12 ${plan.highlight ? 'bg-black text-white' : 'bg-white text-black'} ${idx < pricingPlans.length - 1 ? 'border-r-4 border-black' : ''}`}
            >
              {plan.badge && (
                <span className={`absolute top-6 right-6 text-[10px] font-black uppercase tracking-widest px-3 py-1 border-2 ${plan.highlight ? 'bg-white text-black border-white' : 'bg-black text-white border-black'}`}>
                  {plan.badge}
                </span>
              )}

              <div style={{marginTop: 10,marginBottom: 10}} className="mb-6">
                <h3 className={`text-2xl font-black uppercase tracking-tight mb-1 ${plan.highlight ? 'text-white' : 'text-black'}`}>{plan.name}</h3>
                <p className={`text-sm font-bold ${plan.highlight ? 'text-white/60' : 'text-black/50'}`}>{plan.tagline}</p>
              </div>

              <div className="mb-6 flex items-end gap-1">
                <span className={`text-5xl font-black tracking-tighter ${plan.highlight ? 'text-white' : 'text-black'}`}>{plan.price}</span>
                <span className={`text-sm font-bold mb-2 ${plan.highlight ? 'text-white/60' : 'text-black/50'}`}>{plan.period}</span>
              </div>

              <p style={{marginTop: 15,marginBottom: 15}} className={`text-sm font-bold leading-relaxed mb-8 ${plan.highlight ? 'text-white/70' : 'text-black/60'}`}>{plan.description}</p>

              <ul className="flex flex-col gap-3 mb-10 flex-1">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <div className={`mt-0.5 w-5 h-5 flex-shrink-0 flex items-center justify-center border-2 ${plan.highlight ? 'bg-white border-white' : 'bg-black border-black'}`}>
                      <Check className={`w-3 h-3 ${plan.highlight ? 'text-black' : 'text-white'}`} />
                    </div>
                    <span className={`text-sm font-bold ${plan.highlight ? 'text-white/80' : 'text-black/80'}`}>{feature}</span>
                  </li>
                ))}
              </ul>

              <a
              style={{
                marginTop: 20,
                padding: 10,
              }}
                href={plan.ctaHref}
                target={plan.ctaHref.startsWith('http') ? '_blank' : undefined}
                rel={plan.ctaHref.startsWith('http') ? 'noopener noreferrer' : undefined}
                className={`block text-center py-4 font-black uppercase tracking-widest text-sm border-2 transition-all hover:translate-x-[-2px] hover:translate-y-[-2px] ${plan.highlight ? 'bg-white text-black border-white hover:shadow-[4px_4px_0px_0px_rgba(255,255,255,0.5)]' : 'bg-black text-white border-black hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,0.3)]'}`}
              >
                {plan.cta}
              </a>
            </motion.div>
          ))}
        </div>
        <div style={{ marginTop: 24 }} className="text-center space-y-1">
          <p className="text-black/50 text-sm font-bold">All plans include a free 30-min discovery call &mdash; no commitment needed.</p>
          <p className="text-black/40 text-xs font-bold uppercase tracking-wider">Scale retainer = ongoing velocity at ~$50/hr · cancel anytime</p>
        </div>
      </section> */}

      <section className="py-32 px-6 neobrutalist-bg">
        <motion.div
          style={{
            paddingBottom: 100,
            paddingTop: 70,
          }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mx-auto text-center space-y-8 max-w-8xl"
        >
          <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight text-black">Ready to <span className="text-white">Launch</span> in <br />half the time?</h2>
          <p style={{ textAlign: 'center', alignSelf: "center", margin: "0 auto", marginBottom: 20, marginTop: 20 }} className="text-black/80 text-xl max-w-2xl mx-auto">
            Book a Free 30-Minute Strategy Call and let&apos;s map out the perfect plan for your application.
          </p>
          <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-4 pt-4 w-full max-w-md mx-auto sm:max-w-none">
            <a href="mailto:saadkhalil9999@gmail.com" className="btn-neo-black rounded-none w-full sm:w-auto justify-center">
              <SiGmail className="w-5 h-5 mr-3" /> Book a Strategy Call
            </a>
            <a href="https://wa.me/923229953346" className="btn-neo-white rounded-none w-full sm:w-auto justify-center">
              <SiWhatsapp className="w-5 h-5 mr-3" /> WhatsApp
            </a>
          </div>
        </motion.div>
      </section>

      {/* Reviews Section */}
      <section
        style={{
          paddingBottom: 100,
          paddingTop: 70,
        }}
        className="py-32 px-6 bg-white border-b-4 border-black overflow-hidden">
        <SectionHeading subtitle="What my partners and clients say about our collaboration">Client Feedback</SectionHeading>

        <div className="relative mt-12 flex">
          <motion.div
            style={{
              paddingTop: 40,
            }}
            animate={{
              x: [0, "-50%"],
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 30,
                ease: "linear",
              },
            }}
            className="flex gap-8"
          >
            {[...reviews, ...reviews].map((review, idx) => (
              <div key={idx} className="whitespace-normal">
                <ReviewCard {...review} />
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 bg-black border-t-4 border-black text-center">
        <p className="text-white/50 font-bold uppercase tracking-wider text-sm">© 2026 Muhammad Saad Khalil — Built with Next.js & Framer Motion.</p>
      </footer>

      {/* App Details Overlay */}
      <AnimatePresence
      >
        {selectedApp && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{ backgroundColor: 'rgba(65, 105, 225, 0.95)' }}
            className="fixed inset-0 z-[100] overflow-y-auto px-10 py-12"
          >
            <div
              style={{padding: '30px' }} className="w-full bg-white border-4 border-black shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] p-6 md:p-16 pb-20 relative">
              <motion.button
                style={{
                  marginBottom: 20,
                }}
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
                  <div className="w-20 h-20 sm:w-28 sm:h-28 rounded-3xl overflow-hidden border-4 border-black bg-white shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] relative">
                    <Image src={selectedApp.logo} alt={selectedApp.name} fill className="object-cover p-2" />
                  </div>
                  <div
                    style={{
                      marginTop: 20,
                    }}>
                    <h2 className="text-5xl md:text-7xl font-black mb-6 text-black uppercase tracking-tighter">{selectedApp.name}</h2>
                    <p
                      style={{
                        marginTop: 20,
                      }} className="text-black/80 text-xl leading-relaxed font-bold">{selectedApp.description}</p>
                  </div>

                  <div
                    style={{
                      marginTop: 20,
                    }} className="flex flex-wrap gap-3">
                    {selectedApp.technologies.map(tech => (
                      <span
                        style={{
                          padding: 5,
                        }} key={tech} className="bg-black text-white px-3 py-1 text-xs font-black uppercase border-2 border-black">{tech}</span>
                    ))}
                  </div>

                  <div style={{
                    marginTop: 20,
                  }} className="flex flex-wrap gap-6 pt-8">
                    {selectedApp.links.appstore && (
                      <a href={selectedApp.links.appstore} target="_blank" className="btn-neo-black">
                        <FaAppStoreIos style={{ marginRight: 5 }} className="w-6 h-6 mr-2" /> App Store
                      </a>
                    )}
                    {selectedApp.links.playstore && (
                      <a href={selectedApp.links.playstore} target="_blank" className="btn-neo-white">
                        <FaGooglePlay style={{ marginRight: 5 }} className="w-6 h-6 mr-2" /> Play Store
                      </a>
                    )}
                  </div>
                </motion.div>

                <motion.div
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  style={{padding:'0px'}}
                  // className="bg-slate-900 rounded-[3rem] overflow-hidden glass-panel flex items-center justify-center p-8"
                >
                  {selectedApp.screenshots ? (
                    <div>
                      {selectedApp.screenshots.map((shot, idx) => (
                        <div key={idx}  style={{marginBottom:10}} className="relative w-full aspect-video overflow-hidden snap-start">
                          <Image style={{backgroundColor:"#0D0F28"}} src={shot} fill className="object-contain object-center" alt="Screenshot"/>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className={`w-full h-full ${selectedApp.bg} opacity-50 flex items-center justify-center`}>
                      <span className="text-white/20 text-6xl">📱</span>
                    </div>
                  )}
                </motion.div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

