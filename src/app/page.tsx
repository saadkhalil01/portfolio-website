'use client';

import { useState } from 'react';
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
  ChatBubbleLeftRightIcon
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
    features: ["Real-time Push Notifications", "In-app Notifications", "AI Mental Health Chatbot"]
  },
  {
    id: 2,
    name: "LoyalAI",
    logo: "LoyalAI",
    description: "Relationship-focused loyalty assistant with real-time push/in-app notifications and an AI chatbot for relationships. Available on App Store.",
    screens: ["Dashboard", "Rewards", "Analytics", "Campaigns", "Settings"],
    technologies: ["React Native", "Node.js", "MongoDB", "Express", "AI Chatbot"],
    features: ["Real-time Push Notifications", "In-app Notifications", "Relationship AI Assistant"]
  },
  {
    id: 3,
    name: "FanGenie",
    logo: "FanGenie",
    description: "Fan engagement platform with push notifications and Stripe Payment Sheet integration. Available on App Store.",
    screens: ["Feed", "Create", "Fans", "Analytics", "Monetize"],
    technologies: ["React Native", "Node.js", "MongoDB", "Express", "Stripe Payments"],
    features: ["Push Notifications", "Fan Engagement", "Stripe Payment Integration"]
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
];

// Helper function to get logo for each app
const getAppLogo = (appName: string, logo: string) => {
  const logoMap: { [key: string]: string } = {
    "MyndSpark": "/myndspark-logo.png",
    "LoyalAI": "/loyal-ai-logo.png",
    "FanGenie": "/fangenie-logo.jpg",
    "Spectrum": "/spectrum-logo.png",
    // SplitMart removed
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

  return (
    <div className="min-h-screen p-4 sm:p-8">
      {/* Header */}
      <header className="text-left mb-16 relative">
        <div className="mb-6">
          <div className="flex items-center">
            <span className="text-5xl sm:text-7xl lg:text-8xl font-black text-black bg-[#f5f5dc] px-6 py-2 tracking-tight">
              SAAD
            </span>
            <span className="text-5xl sm:text-7xl lg:text-8xl font-black text-[#f5f5dc] bg-black px-6 py-2 tracking-tight">
              KHALIL
            </span>
          </div>
        </div>
        <div className="space-y-3">
          <p className="text-2xl sm:text-3xl lg:text-4xl font-light text-[#f5f5dc]">
            React Native Developer
          </p>
          <p className="text-lg sm:text-xl text-[#f5f5dc]/75 font-medium">
            2+ Years Experience
          </p>
          <div className="flex items-center gap-6 mt-6">
            {/* Contact Dropdown */}
            <div className="relative">
              <button
                onClick={() => setIsContactOpen(!isContactOpen)}
                className="flex items-center gap-2 text-[#f5f5dc] hover:text-[#d4af37] transition-colors duration-300"
              >
                <EnvelopeIcon className="w-6 h-6" />
                <span className="text-lg font-medium">Contact</span>
                <ChevronDownIcon className={`w-4 h-4 transition-transform duration-300 ${isContactOpen ? 'rotate-180' : ''}`} />
              </button>

              {isContactOpen && (
                <div className="absolute top-full left-0 mt-2 bg-black/90 backdrop-blur-xl border border-[#f5f5dc]/20 rounded-xl p-4 min-w-[280px] z-50">
                  <div className="space-y-3">
                    <a
                      href="mailto:saadkhalil9999@gmail.com"
                      className="flex items-center gap-3 text-[#f5f5dc] hover:text-[#d4af37] transition-colors duration-300 p-2 rounded-lg hover:bg-[#f5f5dc]/10"
                    >
                      <EnvelopeIcon className="w-5 h-5" />
                      <div>
                        <div className="font-medium">Email</div>
                        <div className="text-sm text-[#f5f5dc]/70">saadkhalil9999@gmail.com</div>
                      </div>
                    </a>

                    <a
                      href="https://wa.me/923229953346"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 text-[#f5f5dc] hover:text-[#d4af37] transition-colors duration-300 p-2 rounded-lg hover:bg-[#f5f5dc]/10"
                    >
                      <ChatBubbleLeftRightIcon className="w-5 h-5" />
                      <div>
                        <div className="font-medium">WhatsApp</div>
                        <div className="text-sm text-[#f5f5dc]/70">+92 322 9953346</div>
                      </div>
                    </a>

                    <a
                      href="tel:+923229953346"
                      className="flex items-center gap-3 text-[#f5f5dc] hover:text-[#d4af37] transition-colors duration-300 p-2 rounded-lg hover:bg-[#f5f5dc]/10"
                    >
                      <DevicePhoneMobileIcon className="w-5 h-5" />
                      <div>
                        <div className="font-medium">Call</div>
                        <div className="text-sm text-[#f5f5dc]/70">+92 322 9953346</div>
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
              className="flex items-center gap-2 text-[#f5f5dc] hover:text-[#d4af37] transition-colors duration-300"
            >
              <DocumentTextIcon className="w-6 h-6" />
              <span className="text-lg font-medium">Resume</span>
            </a>
          </div>
        </div>
      </header>

      {/* Portfolio Grid */}
      {!selectedApp ? (
        <main className="max-w-6xl mx-auto relative px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-8 lg:gap-10 xl:gap-8 justify-items-center items-start">
            {apps.map((app, index) => (
              <div
                key={app.id}
                className="group flex flex-col items-center cursor-pointer fade-in"
                onClick={() => setSelectedApp(app)}
                style={{
                  animationDelay: `${index * 0.15}s`
                }}
              >
                <div className="relative">
                  <div
                    className="level-card bg-gradient-to-br from-[#f5f5dc]/95 to-[#f5f5dc]/85 backdrop-blur-xl border border-[#f5f5dc]/30 rounded-3xl p-6 transition-all duration-500 group-hover:scale-105 group-hover:shadow-2xl group-hover:shadow-[#f5f5dc]/25 group-hover:border-[#f5f5dc]/50"
                    style={{
                      height: '200px',
                      width: '200px',
                      alignItems: 'center',
                      justifyContent: 'center',
                      display: 'flex',
                      flexDirection: 'column',
                      backgroundColor:
                        (app.name === 'LoyalAI' || app.name === 'FanGenie')
                          ? 'rgba(0, 0, 0, 0.95)'
                          : 'rgba(245, 245, 220, 0.95)'
                    }}
                  >
                    <div className="text-center relative z-10">
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
                        ) : (
                          <Image
                            src={getAppLogo(app.name, app.logo)}
                            alt={`${app.name} Logo`}
                            width={100}
                            height={100}
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
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-[#f5f5dc]/20 to-[#d4af37]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"></div>
                </div>

                <div className="mt-8 text-center">
                  <h3 className="text-[#f5f5dc] text-xl font-bold tracking-wide group-hover:text-[#d4af37] transition-colors duration-300">
                    {app.name}
                  </h3>
                  <div className="h-0.5 w-0 bg-gradient-to-r from-[#f5f5dc] to-[#d4af37] mx-auto mt-3 transition-all duration-300 group-hover:w-16 rounded-full"></div>
                </div>
              </div>
            ))}
          </div>
        </main>
      ) : (
        /* App Detail Screen */
        <main className="max-w-5xl mx-auto px-3">
          <div className="bg-gradient-to-br from-[#f5f5dc]/10 to-[#f5f5dc]/5 backdrop-blur-xl border border-[#f5f5dc]/20 rounded-3xl p-5 md:p-12 shadow-2xl">
            <button
              onClick={() => setSelectedApp(null)}
              className="mb-8 text-[#f5f5dc]/70 hover:text-[#f5f5dc] transition-all duration-300 flex items-center gap-3 text-2xl group"
              aria-label="Go back to portfolio"
              title="Go back to portfolio"
            >
              <div className="w-10 h-10 rounded-full bg-[#f5f5dc]/10 flex items-center justify-center group-hover:bg-[#f5f5dc]/20 transition-colors duration-300">
                <ArrowLeftIcon className="w-6 h-6" />
              </div>
              <span className="font-medium">Back to Portfolio</span>
            </button>

            <div className="text-center mb-12">
              <div className="mb-8 floating">
                <div className="inline-block p-6 rounded-2xl bg-gradient-to-br from-[#f5f5dc]/15 to-[#f5f5dc]/10 backdrop-blur-sm border border-[#f5f5dc]/20">
                  {getAppLogo(selectedApp.name, selectedApp.logo) !== selectedApp.name ? (
                    selectedApp.name === "Spectrum" ? (
                      <div style={{ width: 140, height: 140, display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative' }}>
                        <Image
                          src={getAppLogo(selectedApp.name, selectedApp.logo)}
                          alt={`${selectedApp.name} Logo`}
                          fill
                          style={{ objectFit: 'contain', objectPosition: 'center' }}
                        />
                      </div>
                    ) : (
                      <Image
                        src={getAppLogo(selectedApp.name, selectedApp.logo)}
                        alt={`${selectedApp.name} Logo`}
                        width={140}
                        height={140}
                        className="drop-shadow-lg"
                      />
                    )
                  ) : (
                    <div className="flex justify-center items-center">
                      <AppIcon name={selectedApp.name} />
                    </div>
                  )}
                </div>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-[#f5f5dc] mb-6 tracking-tight">
                {selectedApp.name}
              </h2>
              <p className="text-[#f5f5dc]/85 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto">
                {selectedApp.description}
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
              {/* Features */}
              <div className="space-y-6">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#f5f5dc] to-[#d4af37] flex items-center justify-center">
                    <StarIcon className="w-6 h-6 text-black" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#f5f5dc]">
                    Features
                  </h3>
                </div>
                <div className="space-y-3">
                  {selectedApp.features.map((feature, index) => (
                    <div
                      key={index}
                      className="bg-gradient-to-r from-[#f5f5dc]/10 to-[#f5f5dc]/5 backdrop-blur-sm border border-[#f5f5dc]/20 rounded-xl p-4 text-[#f5f5dc] hover:from-[#f5f5dc]/15 hover:to-[#f5f5dc]/10 transition-all duration-300"
                    >
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 rounded-full bg-gradient-to-r from-[#f5f5dc] to-[#d4af37] mt-2 flex-shrink-0"></div>
                        <span className="font-medium leading-relaxed">{feature}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technologies */}
              <div className="space-y-6">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#f5f5dc] to-[#d4af37] flex items-center justify-center">
                    <CogIcon className="w-6 h-6 text-black" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#f5f5dc]">
                    Technologies
                  </h3>
                </div>
                <div className="space-y-3">
                  {selectedApp.technologies.map((tech, index) => (
                    <div
                      key={index}
                      className="bg-gradient-to-r from-[#f5f5dc]/10 to-[#f5f5dc]/5 backdrop-blur-sm border border-[#f5f5dc]/20 rounded-xl p-4 text-[#f5f5dc] hover:from-[#f5f5dc]/15 hover:to-[#f5f5dc]/10 transition-all duration-300"
                    >
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 rounded-full bg-gradient-to-r from-[#f5f5dc] to-[#d4af37] mt-2 flex-shrink-0"></div>
                        <span className="font-medium leading-relaxed">{tech}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-12 text-center">
              <div className="inline-block p-4 rounded-2xl bg-gradient-to-r from-[#f5f5dc]/10 to-[#f5f5dc]/5 backdrop-blur-sm border border-[#f5f5dc]/20">
                <p className="text-[#f5f5dc]/70 text-sm font-medium">
                  More details and live demos coming soon...
                </p>
              </div>
            </div>
          </div>
        </main>
      )}

      {/* Footer */}
      <footer className="text-center mt-20 text-[#f5f5dc]/60">
        {/* <div className="w-16 h-1 bg-gradient-to-r from-[#f5f5dc] to-[#d4af37] mx-auto rounded-full mb-6"></div> */}
        <p className="text-lg font-medium">© 2024 Muhammad Saad - React Native Developer</p>
      </footer>
    </div>
  );
}
