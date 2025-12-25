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
  StarIcon,
  EnvelopeIcon,
  DocumentTextIcon,
  ChevronDownIcon,
  AcademicCapIcon,
  ShoppingCartIcon
} from '@heroicons/react/24/outline';
import {
  EnvelopeIcon as EnvelopeIconSolid,
  DevicePhoneMobileIcon as DevicePhoneMobileIconSolid
} from '@heroicons/react/24/solid';
// React Atom Icon Component for background
const ReactAtomIcon = ({ className = "w-64 h-64", opacity = 0.05 }: { className?: string; opacity?: number }) => (
  <svg
    viewBox="0 0 200 200"
    className={className}
    style={{ opacity }}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Central circle */}
    <circle cx="100" cy="100" r="8" fill="black" />
    {/* Three elliptical orbits */}
    <ellipse
      cx="100"
      cy="100"
      rx="60"
      ry="20"
      stroke="black"
      strokeWidth="2"
      transform="rotate(0 100 100)"
    />
    <ellipse
      cx="100"
      cy="100"
      rx="60"
      ry="20"
      stroke="black"
      strokeWidth="2"
      transform="rotate(60 100 100)"
    />
    <ellipse
      cx="100"
      cy="100"
      rx="60"
      ry="20"
      stroke="black"
      strokeWidth="2"
      transform="rotate(120 100 100)"
    />
  </svg>
);

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
    <div className="min-h-screen p-4 sm:p-8 relative overflow-hidden bg-gray-50">


      {/* Header */}
      <header className="text-left mb-8 relative z-20">
        <div className="mb-6">
          <div className="flex gap-0">
            <span className="text-5xl sm:text-7xl lg:text-8xl font-black text-white bg-black pl-6 pr-2 py-2 tracking-tight">
              SAAD
            </span>
            <span className="text-5xl sm:text-7xl lg:text-8xl font-black text-white bg-black pl-2 pr-6 py-2 tracking-tight">
              KHALIL
            </span>
          </div>
          {/* React Atom Background Pattern */}

          <div className="absolute left-0 bottom-0">
            <ReactAtomIcon className="w-180 h-105" opacity={0.07} />
          </div>

        </div>
        <div className="space-y-4">
          <p className="text-2xl sm:text-3xl lg:text-4xl font-normal text-black">
            React Native Engineer
          </p>
          <p className="text-lg sm:text-xl text-black font-medium">
            2.5+ Years Experience
          </p>
          <div className="flex items-center gap-4 mt-8 flex-wrap">
            {/* Contact Dropdown */}
            <div className="relative">
              <button
                onClick={() => setIsContactOpen(!isContactOpen)}
                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white border-2 border-black text-black hover:bg-gray-100 transition-all duration-300"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="20" height="20" className="w-5 h-5">
                  <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                  <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
                </svg>
                <span className="text-base font-medium">Contact</span>
                <ChevronDownIcon className={`w-4 h-4 transition-transform duration-300 ${isContactOpen ? 'rotate-180' : ''}`} />
              </button>

              {isContactOpen && (
                <div className="absolute top-full left-0 mt-2 bg-white border-2 border-black rounded-lg p-4 min-w-[280px] z-[100]">
                  <div className="space-y-3">
                    <a
                      href="mailto:saadkhalil9999@gmail.com"
                      className="flex items-center gap-3 text-black hover:bg-gray-100 transition-colors duration-300 p-2 rounded-lg"
                    >
                      <EnvelopeIconSolid className="w-6 h-6" />
                      <div>
                        <div className="font-medium">Email</div>
                        <div className="text-sm text-black">saadkhalil9999@gmail.com</div>
                      </div>
                    </a>



                    <a
                      href="https://wa.me/923229953346"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 text-black hover:bg-gray-100 transition-colors duration-300 p-2 rounded-lg"
                    >
                      <svg className="w-6 h-6 text-black" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                      </svg>
                      <div>
                        <div className="font-medium">WhatsApp</div>
                        <div className="text-sm text-black">+92 322 9953346</div>
                      </div>
                    </a>

                    <a
                      href="tel:+923229953346"
                      className="flex items-center gap-3 text-black hover:bg-gray-100 transition-colors duration-300 p-2 rounded-lg"
                    >
                      <DevicePhoneMobileIconSolid className="w-6 h-6" />
                      <div>
                        <div className="font-medium">Call</div>
                        <div className="text-sm text-black">+92 322 9953346</div>
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
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white border-2 border-black text-black hover:bg-gray-100 transition-all duration-300"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="20" height="20" className="w-5 h-5">
                <path fillRule="evenodd" d="M5.625 1.5c-1.036 0-1.875.84-1.875 1.875v17.25c0 1.035.84 1.875 1.875 1.875h12.75c1.035 0 1.875-.84 1.875-1.875V12.75A3.75 3.75 0 0016.5 9h-1.875a1.875 1.875 0 01-1.875-1.875V5.25A3.75 3.75 0 009 1.5H5.625zM7.5 15a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5A.75.75 0 017.5 15zm.75 2.25a.75.75 0 000 1.5H12a.75.75 0 000-1.5H8.25z" clipRule="evenodd" />
                <path d="M12.971 1.816A5.23 5.23 0 0114.25 5.25v1.875c0 .207.168.375.375.375H16.5a5.23 5.23 0 013.434 1.279 9.768 9.768 0 00-6.963-6.963z" />
              </svg>
              <span className="text-base font-medium">Resume</span>
            </a>

            <a
              href="https://www.linkedin.com/in/saad-khalil-0912b2232/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white border-2 border-black text-black hover:bg-gray-100 transition-all duration-300"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="20" height="20" className="w-5 h-5">
                <path d="M4.983 3.5C4.983 4.88 3.88 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.483 1.12 2.483 2.5zM.24 8.25h4.52V23H.24V8.25zM8.339 8.25h4.334v2.01h.061c.604-1.146 2.08-2.353 4.285-2.353 4.584 0 5.428 3.016 5.428 6.938V23h-4.72v-6.518c0-1.556-.028-3.557-2.17-3.557-2.173 0-2.506 1.698-2.506 3.448V23H8.339V8.25z" />
              </svg>
              <span className="text-base font-medium">LinkedIn</span>
            </a>

            <a
              href="https://github.com/saadkhalil01"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white border-2 border-black text-black hover:bg-gray-100 transition-all duration-300"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="24" height="24" className="w-6 h-6">
                <path fillRule="evenodd" d="M10 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.482 0-.237-.009-.868-.013-1.703-2.782.604-3.369-1.343-3.369-1.343-.454-1.154-1.11-1.462-1.11-1.462-.908-.62.069-.607.069-.607 1.004.07 1.532 1.032 1.532 1.032.892 1.53 2.341 1.088 2.91.832.091-.647.35-1.088.636-1.339-2.22-.253-4.555-1.112-4.555-4.946 0-1.092.39-1.987 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.269 2.75 1.026A9.564 9.564 0 0 1 12 6.844c.851.004 1.706.115 2.504.337 1.909-1.295 2.748-1.026 2.748-1.026.546 1.378.203 2.397.1 2.65.64.701 1.028 1.596 1.028 2.688 0 3.842-2.339 4.69-4.566 4.938.359.309.679.918.679 1.852 0 1.337-.012 2.415-.012 2.742 0 .267.18.579.688.48A10.019 10.019 0 0 0 22 12.017C22 6.484 17.523 2 12 2z" clipRule="evenodd" />
              </svg>
              <span className="text-base font-medium">GitHub</span>
            </a>
          </div>
        </div>
      </header >

      {/* Experience Section */}
      {
        !selectedApp && (
          <section className="mb-12 relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">
              About Me
            </h2>

            {/* About Content */}
            <div className="max-w-4xl bg-white border-2 border-black rounded-lg p-6 md:p-8 text-black text-lg leading-relaxed space-y-4">
              <p>
                I'm a passionate <span className="font-semibold">React Native Engineer</span> with over 2 years of professional experience building innovative mobile applications across diverse industries including <span className="font-medium">mental wellness, healthcare, education, and social engagement</span>.
              </p>
              <p>
                My expertise spans the entire mobile development lifecycle, from conceptualization to deployment on both <span className="font-medium">App Store and Google Play</span>. I've successfully delivered 5+ production-ready applications, serving thousands of users worldwide.
              </p>
              <p>
                I thrive on solving complex challenges and creating seamless user experiences. Whether it's integrating cutting-edge AI technology, implementing secure payment systems, or building real-time communication features, I bring <span className="font-medium">technical excellence and creative problem-solving</span> to every project.
              </p>
            </div>

            {/* Core Expertise and Specializations */}
            <div className="max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
              <div className="bg-white border-2 border-black rounded-lg p-6">
                <h3 className="text-black font-bold text-xl mb-4 flex items-center gap-2">
                  <div className="w-10 h-10 rounded-lg bg-black flex items-center justify-center">
                    <CpuChipIcon className="w-6 h-6 text-white" />
                  </div>
                  Core Expertise
                </h3>
                <ul className="space-y-3 text-black">
                  <li className="flex items-start gap-3">
                    <span className="text-black mt-1.5 text-xl">▸</span>
                    <span>React Native & Expo Development</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-black mt-1.5 text-xl">▸</span>
                    <span>Node.js, Express, MongoDB</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-black mt-1.5 text-xl">▸</span>
                    <span>Firebase</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-black mt-1.5 text-xl">▸</span>
                    <span>AI Chatbot Integration</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-black mt-1.5 text-xl">▸</span>
                    <span>Real-time Features & WebSockets</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-black mt-1.5 text-xl">▸</span>
                    <span>Audio/Video Calling</span>
                  </li>
                </ul>
              </div>
              <div className="bg-white border-2 border-black rounded-lg p-6">
                <h3 className="text-black font-bold text-xl mb-4 flex items-center gap-2">
                  <div className="w-10 h-10 rounded-lg bg-black flex items-center justify-center">
                    <StarIcon className="w-6 h-6 text-white" />
                  </div>
                  Specializations
                </h3>
                <ul className="space-y-3 text-black">
                  <li className="flex items-start gap-3">
                    <span className="text-black mt-1.5 text-xl">▸</span>
                    <span>Payment Integration (Stripe & more)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-black mt-1.5 text-xl">▸</span>
                    <span>RevenueCat with In-App Subscriptions</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-black mt-1.5 text-xl">▸</span>
                    <span>Push & In-app Notifications</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-black mt-1.5 text-xl">▸</span>
                    <span>Video Consultation (ZegoCloud)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-black mt-1.5 text-xl">▸</span>
                    <span>Multi-language Support</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-black mt-1.5 text-xl">▸</span>
                    <span>App Store & Play Store Launch Expertise</span>
                  </li>
                </ul>
              </div>
            </div>
          </section >
        )
      }

      {/* Portfolio Grid */}
      {
        !selectedApp ? (
          <main className="max-w-6xl mx-auto relative px-4 z-10">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-12">
              My Work
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10 justify-items-center items-center">
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
                      style={{
                        height: '200px',
                        width: '200px',
                        alignItems: 'center',
                        justifyContent: 'center',
                        display: 'flex',
                        flexDirection: 'column',
                        borderRadius: '1000px',
                        overflow: 'hidden',
                        position: 'relative',
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
                            app.name === 'SplitMart'
                              ? '#E5F8FF'
                              : app.name === 'MyndSpark'
                                ? '#ffffff'
                                : '#000000'
                        }}
                      >
                        {getAppLogo(app.name, app.logo) !== app.name ? (
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
                              className="mx-auto"
                            />
                          )
                        ) : (
                          <div className="flex justify-center items-center">
                            <AppIcon name={app.name} />
                          </div>
                        )}
                      </div>
                    </div>

                  </div>

                  <div className="mt-8 text-center">
                    <h3 className="text-black text-xl font-bold tracking-wide transition-colors duration-300">
                      {app.name}
                    </h3>
                  </div>
                </div>
              ))}
            </div>
          </main>
        ) : (
          /* App Detail Screen */
          <main className="">
            <div className="bg-white border-2 border-black rounded-lg p-5 md:p-12">
              <button
                onClick={handleBackFromDetails}
                className="mb-8 text-black hover:bg-gray-100 transition-all duration-300 flex items-center gap-2 text-base group px-3 py-1.5 rounded-lg border-2 border-black"
                aria-label="Go back to portfolio"
                title="Go back to portfolio"
              >
                <div className="w-7 h-7 rounded-full bg-black flex items-center justify-center">
                  <ArrowLeftIcon className="w-4 h-4 text-white" />
                </div>
                <span className="font-medium">Back to Portfolio</span>
              </button>

              <div className="text-center mb-12">
                <div className="mb-8 ">
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
                          selectedApp.name === 'SplitMart'
                            ? '#E5F8FF'
                            : selectedApp.name === 'MyndSpark'
                              ? '#ffffff'
                              : '#000000'
                      }}
                    >
                      {getAppLogo(selectedApp.name, selectedApp.logo) !== selectedApp.name ? (
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
                <h2 className="text-4xl md:text-5xl font-bold text-black mb-6 tracking-tight">
                  {selectedApp.name}
                </h2>
                <p className="text-black text-lg md:text-xl leading-relaxed max-w-3xl mx-auto">
                  {selectedApp.description}
                </p>
                {selectedApp && (selectedApp as any).links && (
                  <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
                    {(selectedApp as any).links.appstore && (
                      <a
                        href={(selectedApp as any).links.appstore}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group inline-flex items-center gap-3 px-4 py-2 rounded-lg border-2 border-black bg-white text-black hover:bg-gray-100 transition-colors"
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
                        className="group inline-flex items-center gap-3 px-4 py-2 rounded-lg border-2 border-black bg-white text-black hover:bg-gray-100 transition-colors"
                        aria-label={`${selectedApp.name} on Google Play`}
                      >
                        <Image src="/playstore.png" alt="Get it on Google Play" width={20} height={20} className="w-5 h-5" />
                        <span className="text-sm font-medium">Google Play</span>
                      </a>
                    )}
                  </div>
                )}
              </div>

              {/* Screenshots Section - Only for LoyalAI */}
              {selectedApp.name === "LoyalAI" && (
                <div className="mb-12">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-xl bg-black flex items-center justify-center">
                      <DevicePhoneMobileIcon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-black">
                      App Preview
                    </h3>
                  </div>
                  <div className="overflow-x-auto pb-4 scrollbar-thin scrollbar-thumb-blue-500/50 scrollbar-track-slate-800/50">
                    <div className="flex gap-4 min-w-max">
                      {[
                        "/loyalai/iMockup - iPhone 15 Pro1 Max.png",
                        "/loyalai/iMockup - iPhone 15 Pro Max (1).png",
                        "/loyalai/iMockup - iPhone 15 Pro Max (2).png",
                        "/loyalai/iMockup - iPhone 15 Pro Max (3).png",
                        "/loyalai/iMockup - iPhone 15 Pro Max-2.png",
                        "/loyalai/iMockup - iPhone 15 Pro Max-4.png",
                        "/loyalai/iMockup - iPhone 15 Pro Max-3.png",
                        "/loyalai/iMockup - iPhone 15 Pro Max-1.png",
                        "/loyalai/iMockup - iPhone 15 Pro Max.png",

                      ].map((screenshot, index) => (

                        <div key={index} className="relative w-64 h-[500px] rounded-2xl overflow-hidden shadow-lg group-hover:shadow-blue-500/50 transition-shadow duration-300">
                          <Image
                            src={screenshot}
                            alt={`LoyalAI Screenshot ${index + 1}`}
                            width={256}
                            height={500}
                            loading="lazy"
                            quality={75}
                            className="object-contain w-full h-full transition-transform duration-300"
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
                {/* Features */}
                <div className="space-y-6">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-xl bg-black flex items-center justify-center">
                      <StarIcon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-black">
                      Features
                    </h3>
                  </div>
                  <div className="space-y-3">
                    {selectedApp.features.map((feature, index) => (
                      <div
                        key={index}
                        className="bg-white border-2 border-black rounded-lg p-4 text-black hover:bg-gray-100 transition-all duration-300"
                      >
                        <div className="flex items-start gap-3">
                          <div className="w-2 h-2 rounded-full bg-black mt-2 flex-shrink-0"></div>
                          <span className="font-medium leading-relaxed">{feature}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Technologies */}
                <div className="space-y-6">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-xl bg-black flex items-center justify-center">
                      <CogIcon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-black">
                      Technologies
                    </h3>
                  </div>
                  <div className="space-y-3">
                    {selectedApp.technologies.map((tech, index) => (
                      <div
                        key={index}
                        className="bg-white border-2 border-black rounded-lg p-4 text-black hover:bg-gray-100 transition-all duration-300"
                      >
                        <div className="flex items-start gap-3">
                          <div className="w-2 h-2 rounded-full bg-black mt-2 flex-shrink-0"></div>
                          <span className="font-medium leading-relaxed">{tech}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-12 text-center">
                <div className="inline-block p-4 rounded-lg bg-white border-2 border-black">
                  <p className="text-black text-sm font-medium">
                    More details and live demos coming soon...
                  </p>
                </div>
              </div>
            </div>
          </main>
        )
      }

      {/* Footer */}
      <footer className="text-center mt-20 mb-8 relative z-10">
        <p className="text-black text-base font-medium">
          © 2024 Muhammad Saad - React Native Engineer
        </p>
        <p className="text-black text-sm mt-2">
          Crafted with passion and attention to detail
        </p>
      </footer>
    </div >
  );
}
