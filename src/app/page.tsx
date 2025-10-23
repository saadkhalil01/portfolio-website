'use client';

import { useEffect, useState } from 'react';
import Image from "next/image";
import {
  ArrowLeftIcon,
  DevicePhoneMobileIcon,
  CogIcon,
  HeartIcon,
  SparklesIcon,
  CpuChipIcon,
  UserGroupIcon,
  SwatchIcon,
  StarIcon,
  EnvelopeIcon,
  DocumentTextIcon,
  ChevronDownIcon,
  ChatBubbleLeftRightIcon,
  AcademicCapIcon,
  ShoppingCartIcon
} from '@heroicons/react/24/outline';
// Icon component for each app
const AppIcon = ({ name }: { name: string }) => {
  const iconProps = { className: "w-16 h-16" };

  switch (name) {
    case "MyndSpark":
      return <SparklesIcon {...iconProps} />;
    case "LoyalAI":
      return <CpuChipIcon {...iconProps} />;
    case "FanGenie":
      return <UserGroupIcon {...iconProps} />;
    case "Spectrum":
      return <SwatchIcon {...iconProps} />;
    case "SplitMart":
      return <AcademicCapIcon {...iconProps} />;
    default:
      return <SparklesIcon {...iconProps} />;
  }
};

// Mock data for apps - you can replace these with actual app data later
const apps = [
  {
    id: 1,
    name: "MyndSpark",
    logo: "MyndSpark", // Using name to identify which icon to render
    description: "Mental wellness app with real-time push/in-app notifications and an AI chatbot for mental health. Available on App Store and Play Store.",
    screens: ["Home", "Ideas", "Brainstorm", "Projects", "Profile"],
    technologies: ["React Native", "Node.js", "MongoDB", "Express", "AI Chatbot"],
    features: ["Real-time Push Notifications", "In-app Notifications", "AI Mental Health Chatbot"],
    links: {
      appstore: "https://apps.apple.com/pk/app/myndspark/id6739531918",
      playstore: "https://play.google.com/store/apps/details?id=com.myndspark"
    }
  },
  {
    id: 2,
    name: "LoyalAI",
    logo: "LoyalAI",
    description: "Relationship-focused loyalty assistant with real-time push/in-app notifications and an AI chatbot for relationships. Available on App Store.",
    screens: ["Dashboard", "Rewards", "Analytics", "Campaigns", "Settings"],
    technologies: ["React Native", "Node.js", "MongoDB", "Express", "AI Chatbot"],
    features: ["Real-time Push Notifications", "In-app Notifications", "Relationship AI Assistant"],
    links: {
      appstore: "https://apps.apple.com/pk/app/loyalai-modern-love-tracker/id6747716993"
    }
  },
  {
    id: 3,
    name: "FanGenie",
    logo: "FanGenie",
    description: "Fan engagement platform with push notifications and Stripe Payment Sheet integration. Available on App Store.",
    screens: ["Feed", "Create", "Fans", "Analytics", "Monetize"],
    technologies: ["React Native", "Node.js", "MongoDB", "Express", "Stripe Payments"],
    features: ["Push Notifications", "Fan Engagement", "Stripe Payment Integration"],
    links: {
      appstore: "https://apps.apple.com/pk/app/fangenie/id6751832502"
    }
  },
  {
    id: 4,
    name: "Spectrum",
    logo: "Spectrum",
    description: "Healthcare app for KSA with push notifications, doctor appointments, and dual-language support (Arabic/English). Not available on stores.",
    screens: ["Projects", "Tasks", "Team", "Timeline", "Reports"],
    technologies: ["React Native", "Node.js", "MongoDB", "Express"],
    features: ["Push Notifications", "Dual-language Support (Arabic/English)", "Video Consultation (ZegoCloud)", "Doctor Appointments"]
  },
  {
    id: 5,
    name: "SplitMart",
    logo: "SplitMart",
    description: "Educational marketplace platform for teaching, learning, and service selling. Features real-time chat, course management, and integrated payment processing.",
    screens: ["Courses", "Marketplace", "Chat", "Payments", "Dashboard"],
    technologies: ["React Native", "Node.js", "MongoDB", "Express", "Payment Integration"],
    features: ["Course Management", "Service Marketplace", "Real-time Chat", "Payment Processing", "User Ratings & Reviews"],
    links: {
      appstore: "https://apps.apple.com/pk/app/splitmart/id6740323886",
      playstore: "https://play.google.com/store/apps/details?id=com.splitmart"
    }
  },
];

// Helper function to get logo for each app
const getAppLogo = (appName: string, logo: string) => {
  const logoMap: { [key: string]: string } = {
    "MyndSpark": "/myndspark-logo.png",
    "LoyalAI": "/loyal-ai-logo.png",
    "FanGenie": "/fangenie-logo.jpg",
    "Spectrum": "/spectrum-logo.png",
    "SplitMart": "/splitmart-logo.png",
  };

  // Check if app has a custom image logo
  if (logoMap[appName]) {
    return logoMap[appName];
  }

  // Return the app name for icon rendering
  return appName;
};

export default function Home() {
  const [selectedApp, setSelectedApp] = useState<typeof apps[0] | null>(null);
  const [isContactOpen, setIsContactOpen] = useState(false);

  // Ensure the browser/device back button closes the details view instead of leaving the site/app
  useEffect(() => {
    const onPopState = () => {
      // Close any open UI like contact dropdown
      setIsContactOpen(false);
      // If a details view is open, close it when user presses back
      setSelectedApp(prev => (prev ? null : prev));
    };

    window.addEventListener('popstate', onPopState);
    return () => window.removeEventListener('popstate', onPopState);
  }, []);

  // When opening a details view, push a history state so back returns to the grid
  useEffect(() => {
    if (selectedApp) {
      try {
        const hash = `#${encodeURIComponent(selectedApp.name)}`;
        const url = hash;
        window.history.pushState({ app: selectedApp.name }, '', url);
      } catch { }
    }
  }, [selectedApp]);

  const handleBackFromDetails = () => {
    // If we previously pushed a state, go back so popstate closes details.
    // Otherwise, just close the details without navigating away.
    // This prevents exiting the app/site on Android back.
    if (typeof window !== 'undefined' && window.history.state && (window.history.state as any).app) {
      window.history.back();
    } else {
      setSelectedApp(null);
    }
  };

  return (
    <div className="min-h-screen p-4 sm:p-8">
      {/* Header */}
      <header className="text-left mb-16 relative">
        <div className="mb-6">
          <div className="flex items-center">
            <span className="text-5xl sm:text-7xl lg:text-8xl font-black text-white  px-6 py-2 tracking-tight">
              SAAD
            </span>
            <span className="text-5xl sm:text-7xl lg:text-8xl font-black text-black bg-white px-6 py-2 tracking-tight">
              KHALIL
            </span>
          </div>
        </div>
        <div className="space-y-3">
          <p className="text-2xl sm:text-3xl lg:text-4xl font-light text-slate-100">
            React Native Developer
          </p>
          <p className="text-lg sm:text-xl text-slate-300 font-medium">
            2+ Years Experience
          </p>
          <div className="flex items-center gap-6 mt-6">
            {/* Contact Dropdown */}
            <div className="relative">
              <button
                onClick={() => setIsContactOpen(!isContactOpen)}
                className="flex items-center gap-2 text-slate-100 hover:text-blue-400 transition-colors duration-300"
              >
                <EnvelopeIcon className="w-6 h-6" />
                <span className="text-lg font-medium">Contact</span>
                <ChevronDownIcon className={`w-4 h-4 transition-transform duration-300 ${isContactOpen ? 'rotate-180' : ''}`} />
              </button>

              {isContactOpen && (
                <div className="absolute top-full left-0 mt-2 bg-slate-800/95 backdrop-blur-xl border border-blue-500/30 rounded-xl p-4 min-w-[280px] z-50">
                  <div className="space-y-3">
                    <a
                      href="mailto:saadkhalil9999@gmail.com"
                      className="flex items-center gap-3 text-slate-100 hover:text-blue-400 transition-colors duration-300 p-2 rounded-lg hover:bg-blue-500/10"
                    >
                      <EnvelopeIcon className="w-5 h-5" />
                      <div>
                        <div className="font-medium">Email</div>
                        <div className="text-sm text-slate-300">saadkhalil9999@gmail.com</div>
                      </div>
                    </a>



                    <a
                      href="https://wa.me/923229953346"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 text-slate-100 hover:text-blue-400 transition-colors duration-300 p-2 rounded-lg hover:bg-blue-500/10"
                    >
                      <ChatBubbleLeftRightIcon className="w-5 h-5" />
                      <div>
                        <div className="font-medium">WhatsApp</div>
                        <div className="text-sm text-slate-300">+92 322 9953346</div>
                      </div>
                    </a>

                    <a
                      href="tel:+923229953346"
                      className="flex items-center gap-3 text-slate-100 hover:text-blue-400 transition-colors duration-300 p-2 rounded-lg hover:bg-blue-500/10"
                    >
                      <DevicePhoneMobileIcon className="w-5 h-5" />
                      <div>
                        <div className="font-medium">Call</div>
                        <div className="text-sm text-slate-300">+92 322 9953346</div>
                      </div>
                    </a>
                  </div>
                </div>
              )}
            </div>

            <a
              href="/saadKhalil.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-slate-100 hover:text-blue-400 transition-colors duration-300"
            >
              <DocumentTextIcon className="w-6 h-6" />
              <span className="text-lg font-medium">Resume</span>
            </a>

            <a
              href="https://www.linkedin.com/in/saad-khalil-0912b2232/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="flex items-center gap-2 text-slate-100 hover:text-blue-400 transition-colors duration-300"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                <path d="M4.983 3.5C4.983 4.88 3.88 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.483 1.12 2.483 2.5zM.24 8.25h4.52V23H.24V8.25zM8.339 8.25h4.334v2.01h.061c.604-1.146 2.08-2.353 4.285-2.353 4.584 0 5.428 3.016 5.428 6.938V23h-4.72v-6.518c0-1.556-.028-3.557-2.17-3.557-2.173 0-2.506 1.698-2.506 3.448V23H8.339V8.25z" />
              </svg>
              <span className="text-lg font-medium hidden sm:inline">LinkedIn</span>
            </a>

            <a
              href="https://github.com/saadkhalil01"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="flex items-center gap-2 text-slate-100 hover:text-blue-400 transition-colors duration-300"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.482 0-.237-.009-.868-.013-1.703-2.782.604-3.369-1.343-3.369-1.343-.454-1.154-1.11-1.462-1.11-1.462-.908-.62.069-.607.069-.607 1.004.07 1.532 1.032 1.532 1.032.892 1.53 2.341 1.088 2.91.832.091-.647.35-1.088.636-1.339-2.22-.253-4.555-1.112-4.555-4.946 0-1.092.39-1.987 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.269 2.75 1.026A9.564 9.564 0 0 1 12 6.844c.851.004 1.706.115 2.504.337 1.909-1.295 2.748-1.026 2.748-1.026.546 1.378.203 2.397.1 2.65.64.701 1.028 1.596 1.028 2.688 0 3.842-2.339 4.69-4.566 4.938.359.309.679.918.679 1.852 0 1.337-.012 2.415-.012 2.742 0 .267.18.579.688.48A10.019 10.019 0 0 0 22 12.017C22 6.484 17.523 2 12 2z" clipRule="evenodd" />
              </svg>
              <span className="text-lg font-medium hidden sm:inline">GitHub</span>
            </a>
          </div>
        </div>
      </header >

      {/* Experience Section */}
      {
        !selectedApp && (
          <section className="mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-100 mb-8">
              About Me
            </h2>

            {/* About Content */}
            <div className="max-w-4xl space-y-6 text-slate-200 text-lg leading-relaxed">
              <p>
                I'm a passionate <span className="text-blue-400 font-semibold">React Native Developer</span> with over 2 years of professional experience building innovative mobile applications across diverse industries including <span className="text-white font-medium">mental wellness, healthcare, education, and social engagement</span>.
              </p>
              <p>
                My expertise spans the entire mobile development lifecycle, from conceptualization to deployment on both <span className="text-white font-medium">App Store and Google Play</span>. I've successfully delivered 5+ production-ready applications, serving thousands of users worldwide.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
                <div>
                  <h3 className="text-blue-400 font-bold text-xl mb-4 flex items-center gap-2">
                    <CpuChipIcon className="w-6 h-6" />
                    Core Expertise
                  </h3>
                  <ul className="space-y-2 text-slate-200">
                    <li className="flex items-start gap-2">
                      <span className="text-blue-400 mt-1">•</span>
                      <span>React Native & Expo Development</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-400 mt-1">•</span>
                      <span>Node.js, Express, MongoDB</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-400 mt-1">•</span>
                      <span>AI Chatbot Integration</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-400 mt-1">•</span>
                      <span>Real-time Features & WebSockets</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-blue-400 font-bold text-xl mb-4 flex items-center gap-2">
                    <StarIcon className="w-6 h-6" />
                    Specializations
                  </h3>
                  <ul className="space-y-2 text-slate-200">
                    <li className="flex items-start gap-2">
                      <span className="text-blue-400 mt-1">•</span>
                      <span>Payment Integration (Stripe & more)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-400 mt-1">•</span>
                      <span>Push & In-app Notifications</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-400 mt-1">•</span>
                      <span>Video Consultation (ZegoCloud)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-400 mt-1">•</span>
                      <span>Multi-language Support</span>
                    </li>
                  </ul>
                </div>
              </div>
              <p>
                I thrive on solving complex challenges and creating seamless user experiences. Whether it's integrating cutting-edge AI technology, implementing secure payment systems, or building real-time communication features, I bring <span className="text-white font-medium">technical excellence and creative problem-solving</span> to every project.
              </p>
            </div>
          </section >
        )
      }

      {/* Portfolio Grid */}
      {
        !selectedApp ? (
          <main className="max-w-6xl mx-auto relative px-4">
            <div className="grid grid-cols-1 sm:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4 gap-8 lg:gap-10 xl:gap-8 justify-items-center items-center">
              {apps.map((app, index) => (
                <div
                  key={app.id}
                  className="group flex flex-col items-center cursor-pointer fade-in"
                  onClick={() => setSelectedApp(app)}
                  style={{
                    animationDelay: `${index * 0.15}s`,
                    justifySelf: 'center',
                  }}
                >
                  <div className="relative">
                    <div
                      // className="level-card bg-gradient-to-br backdrop-blur-xl border border-blue-300/30 rounded-3xl p-6 transition-all duration-500 group-hover:scale-105 group-hover:shadow-2xl group-hover:shadow-blue-500/25 group-hover:border-blue-400/50"
                      style={{
                        height: '200px',
                        width: '200px',
                        alignItems: 'center',
                        justifyContent: 'center',
                        display: 'flex',
                        flexDirection: 'column',
                        borderRadius: '1000px',
                        overflow: 'hidden',
                      }}
                    >
                      <div className="text-center relative z-10"
                        style={{
                          width: '100%',
                          height: '100%',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          backgroundColor:
                            (app.name === 'LoyalAI' || app.name === 'FanGenie')
                              ? '#000'
                              : (app.name === 'SplitMart')
                                ? '#E5F8FF'
                                : '#f8fafc'
                        }}
                      >
                        {getAppLogo(app.name, app.logo) !== app.name ? (
                          app.name === "Spectrum" ? (
                            <div style={{
                              width: 90, height: 90,
                              display: 'flex', alignItems: 'center',
                              justifyContent: 'center', position: 'relative'
                            }}>
                              <Image
                                src={getAppLogo(app.name, app.logo)}
                                alt={`${app.name} Logo`}
                                fill
                                style={{ objectFit: 'contain', objectPosition: 'center' }}
                              />
                            </div>
                          ) :
                            app.name === "SplitMart" ? (
                              <Image
                                src={getAppLogo(app.name, app.logo)}
                                alt={`${app.name} Logo`}
                                width={150}
                                height={150}
                              />
                            ) : (
                              <Image
                                src={getAppLogo(app.name, app.logo)}
                                alt={`${app.name} Logo`}
                                width={150}
                                height={150}
                                className="mx-auto drop-shadow-sm"
                              />
                            )
                        ) : (
                          <div className="flex justify-center items-center">
                            <AppIcon name={app.name} />
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Glow effect on hover */}
                    <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-blue-500/20 to-blue-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"></div>
                  </div>

                  <div className="mt-8 text-center">
                    <h3 className="text-slate-100 text-xl font-bold tracking-wide group-hover:text-blue-400 transition-colors duration-300">
                      {app.name}
                    </h3>
                    <div className="h-0.5 w-0 bg-gradient-to-r from-blue-500 to-blue-400 mx-auto mt-3 transition-all duration-300 group-hover:w-16 rounded-full"></div>
                  </div>
                </div>
              ))}
            </div>
          </main>
        ) : (
          /* App Detail Screen */
          <main className="max-w-5xl mx-auto px-3">
            <div className="bg-gradient-to-br from-slate-800/40 to-slate-900/20 backdrop-blur-xl border border-blue-500/20 rounded-3xl p-5 md:p-12 shadow-2xl">
              <button
                onClick={handleBackFromDetails}
                className="mb-8 text-slate-300 hover:text-white transition-all duration-300 flex items-center gap-3 text-2xl group"
                aria-label="Go back to portfolio"
                title="Go back to portfolio"
              >
                <div className="w-10 h-10 rounded-full bg-blue-500/10 flex items-center justify-center group-hover:bg-blue-500/20 transition-colors duration-300">
                  <ArrowLeftIcon className="w-6 h-6" />
                </div>
                <span className="font-medium">Back to Portfolio</span>
              </button>

              <div className="text-center mb-12">
                <div className="mb-8 floating">
                  <div
                    style={{
                      height: '200px',
                      width: '200px',
                      display: 'inline-flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexDirection: 'column',
                      borderRadius: '1000px',
                      overflow: 'hidden',
                    }}
                  >
                    <div
                      style={{
                        width: '100%',
                        height: '100%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        backgroundColor:
                          (selectedApp.name === 'LoyalAI' || selectedApp.name === 'FanGenie')
                            ? '#000'
                            : (selectedApp.name === 'SplitMart')
                              ? '#E5F8FF'
                              : '#f8fafc'
                      }}
                    >
                      {getAppLogo(selectedApp.name, selectedApp.logo) !== selectedApp.name ? (
                        selectedApp.name === "Spectrum" ? (
                          <div style={{
                            width: 90, height: 90,
                            display: 'flex', alignItems: 'center',
                            justifyContent: 'center', position: 'relative'
                          }}>
                            <Image
                              src={getAppLogo(selectedApp.name, selectedApp.logo)}
                              alt={`${selectedApp.name} Logo`}
                              fill
                              style={{ objectFit: 'contain', objectPosition: 'center' }}
                            />
                          </div>
                        ) :
                          selectedApp.name === "SplitMart" ? (
                            <Image
                              src={getAppLogo(selectedApp.name, selectedApp.logo)}
                              alt={`${selectedApp.name} Logo`}
                              width={150}
                              height={150}
                            />
                          ) : (
                            <Image
                              src={getAppLogo(selectedApp.name, selectedApp.logo)}
                              alt={`${selectedApp.name} Logo`}
                              width={150}
                              height={150}
                              className="mx-auto drop-shadow-sm"
                            />
                          )
                      ) : (
                        <div className="flex justify-center items-center">
                          <AppIcon name={selectedApp.name} />
                        </div>
                      )}
                    </div>
                  </div>
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-slate-100 mb-6 tracking-tight">
                  {selectedApp.name}
                </h2>
                <p className="text-slate-200 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto">
                  {selectedApp.description}
                </p>
                {selectedApp && (selectedApp as any).links && (
                  <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
                    {(selectedApp as any).links.appstore && (
                      <a
                        href={(selectedApp as any).links.appstore}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group inline-flex items-center gap-3 px-4 py-2 rounded-xl border border-blue-400/30 bg-slate-700/40 text-slate-100 hover:border-blue-400/60 hover:bg-slate-700/60 transition-colors"
                        aria-label={`${selectedApp.name} on the App Store`}
                      >
                        <Image src="/appstore.png" alt="Download on the App Store" width={20} height={20} className="w-5 h-5" />
                        <span className="text-sm font-medium">App Store</span>
                      </a>
                    )}
                    {(selectedApp as any).links.playstore && (
                      <a
                        href={(selectedApp as any).links.playstore}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group inline-flex items-center gap-3 px-4 py-2 rounded-xl border border-blue-400/30 bg-slate-700/40 text-slate-100 hover:border-blue-400/60 hover:bg-slate-700/60 transition-colors"
                        aria-label={`${selectedApp.name} on Google Play`}
                      >
                        <Image src="/playstore.png" alt="Get it on Google Play" width={20} height={20} className="w-5 h-5" />
                        <span className="text-sm font-medium">Google Play</span>
                      </a>
                    )}
                  </div>
                )}
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
                {/* Features */}
                <div className="space-y-6">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center">
                      <StarIcon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-slate-100">
                      Features
                    </h3>
                  </div>
                  <div className="space-y-3">
                    {selectedApp.features.map((feature, index) => (
                      <div
                        key={index}
                        className="bg-gradient-to-r from-blue-500/10 to-blue-600/5 backdrop-blur-sm border border-blue-400/20 rounded-xl p-4 text-slate-100 hover:from-blue-500/15 hover:to-blue-600/10 transition-all duration-300"
                      >
                        <div className="flex items-start gap-3">
                          <div className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-400 to-blue-500 mt-2 flex-shrink-0"></div>
                          <span className="font-medium leading-relaxed">{feature}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Technologies */}
                <div className="space-y-6">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center">
                      <CogIcon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-slate-100">
                      Technologies
                    </h3>
                  </div>
                  <div className="space-y-3">
                    {selectedApp.technologies.map((tech, index) => (
                      <div
                        key={index}
                        className="bg-gradient-to-r from-blue-500/10 to-blue-600/5 backdrop-blur-sm border border-blue-400/20 rounded-xl p-4 text-slate-100 hover:from-blue-500/15 hover:to-blue-600/10 transition-all duration-300"
                      >
                        <div className="flex items-start gap-3">
                          <div className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-400 to-blue-500 mt-2 flex-shrink-0"></div>
                          <span className="font-medium leading-relaxed">{tech}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-12 text-center">
                <div className="inline-block p-4 rounded-2xl bg-gradient-to-r from-blue-500/10 to-blue-600/5 backdrop-blur-sm border border-blue-400/20">
                  <p className="text-slate-300 text-sm font-medium">
                    More details and live demos coming soon...
                  </p>
                </div>
              </div>
            </div>
          </main>
        )
      }

      {/* Footer */}
      <footer className="text-center mt-20 text-slate-400">
        {/* <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-blue-400 mx-auto rounded-full mb-6"></div> */}
        <p className="text-lg font-medium">© 2024 Muhammad Saad - React Native Developer</p>
      </footer>
    </div >
  );
}
