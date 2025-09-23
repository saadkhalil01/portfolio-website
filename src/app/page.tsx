'use client';

import { useState } from 'react';
import Image from "next/image";
import { ArrowLeftIcon } from '@heroicons/react/24/outline';
// Mock data for apps - you can replace these with actual app data later
const apps = [
  {
    id: 1,
    name: "MyndSpark",
    logo: "🧠",
    description: "Mental wellness app with real-time push/in-app notifications and an AI chatbot for mental health. Available on App Store and Play Store.",
    screens: ["Home", "Ideas", "Brainstorm", "Projects", "Profile"],
    technologies: ["React Native", "Node.js", "MongoDB", "Express", "Push Notifications", "AI Chatbot"]
  },
  {
    id: 2,
    name: "LoyalAI",
    logo: "🤖",
    description: "Relationship-focused loyalty assistant with real-time push/in-app notifications and an AI chatbot for relationships. Available on App Store.",
    screens: ["Dashboard", "Rewards", "Analytics", "Campaigns", "Settings"],
    technologies: ["React Native", "Node.js", "MongoDB", "Express", "Push Notifications", "AI Chatbot"]
  },
  {
    id: 3,
    name: "FanGenie",
    logo: "🎭",
    description: "Fan engagement platform with push notifications and Stripe Payment Sheet integration. Available on App Store.",
    screens: ["Feed", "Create", "Fans", "Analytics", "Monetize"],
    technologies: ["React Native", "Node.js", "MongoDB", "Express", "Push Notifications", "Stripe Payments"]
  },
  {
    id: 4,
    name: "Spectrum",
    logo: "🌈",
    description: "Healthcare app for KSA with push notifications, doctor appointments, and dual-language support (Arabic/English). Not available on stores.",
    screens: ["Projects", "Tasks", "Team", "Timeline", "Reports"],
    technologies: ["React Native", "Node.js", "MongoDB", "Express", "Push Notifications", "i18n"]
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

  return logoMap[appName] || logo;
};

export default function Home() {
  const [selectedApp, setSelectedApp] = useState<typeof apps[0] | null>(null);

  return (
    <div className="min-h-screen p-4 sm:p-8">
      {/* Header */}
      <header className="text-center mb-16 relative">
        <div className="mb-6">
          <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black text-white mb-6 tracking-tight">
            SAAD KHALIL
          </h1>
          <div className="h-1 w-24 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto rounded-full mb-6"></div>
        </div>
        <div className="space-y-3">
          <p className="text-2xl sm:text-3xl lg:text-4xl font-light text-white/95">
            React Native Developer
          </p>
          <p className="text-lg sm:text-xl text-white/75 font-medium">
            2+ Years Experience
          </p>
        </div>
      </header>

      {/* Portfolio Grid */}
      {!selectedApp ? (
        <main className="max-w-7xl mx-auto relative px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 justify-items-center">
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
                    className="level-card bg-gradient-to-br from-white/95 to-white/85 backdrop-blur-xl border border-white/30 rounded-3xl p-8 transition-all duration-500 group-hover:scale-110 group-hover:shadow-2xl group-hover:shadow-purple-500/25 group-hover:border-white/50"
                    style={{
                      height: '180px',
                      width: '180px',
                      alignItems: 'center',
                      justifyContent: 'center',
                      display: 'flex',
                      flexDirection: 'column',
                      backgroundColor:
                        (app.name === 'LoyalAI' || app.name === 'FanGenie')
                          ? 'rgba(0, 0, 0, 0.95)'
                          : 'rgba(255, 255, 255, 0.95)'
                    }}
                  >
                    <div className="text-center relative z-10">
                      {getAppLogo(app.name, app.logo) !== app.logo ? (
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
                        <div className="text-7xl drop-shadow-sm">
                          {app.logo}
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Glow effect on hover */}
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-purple-400/20 to-pink-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"></div>
                </div>

                <div className="mt-6 text-center">
                  <h3 className="text-white text-xl font-bold tracking-wide group-hover:text-purple-200 transition-colors duration-300">
                    {app.name}
                  </h3>
                  <div className="h-0.5 w-0 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto mt-2 transition-all duration-300 group-hover:w-12 rounded-full"></div>
                </div>
              </div>
            ))}
          </div>
        </main>
      ) : (
        /* App Detail Screen */
        <main className="max-w-5xl mx-auto px-3">
          <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20 rounded-3xl p-5 md:p-12 shadow-2xl">
            <button
              onClick={() => setSelectedApp(null)}
              className="mb-8 text-white/70 hover:text-white transition-all duration-300 flex items-center gap-3 text-2xl group"
              aria-label="Go back to portfolio"
              title="Go back to portfolio"
            >
              <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-colors duration-300">
                <ArrowLeftIcon className="w-6 h-6" />
              </div>
              <span className="font-medium">Back to Portfolio</span>
            </button>

            <div className="text-center mb-12">
              <div className="mb-8 floating">
                <div className="inline-block p-6 rounded-2xl bg-gradient-to-br from-white/15 to-white/10 backdrop-blur-sm border border-white/20">
                  {getAppLogo(selectedApp.name, selectedApp.logo) !== selectedApp.logo ? (
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
                    <div className="text-8xl drop-shadow-lg">
                      {selectedApp.logo}
                    </div>
                  )}
                </div>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
                {selectedApp.name}
              </h2>
              <p className="text-white/85 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto">
                {selectedApp.description}
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
              {/* App Screens */}
              <div className="space-y-6">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center">
                    <span className="text-white text-lg">📱</span>
                  </div>
                  <h3 className="text-2xl font-bold text-white">
                    App Screens
                  </h3>
                </div>
                <div className="space-y-3">
                  {selectedApp.screens.map((screen, index) => (
                    <div
                      key={index}
                      className="bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-sm border border-white/20 rounded-xl p-4 text-white hover:from-white/15 hover:to-white/10 transition-all duration-300"
                    >
                      <div className="flex items-center gap-3">
                        <span className="w-6 h-6 rounded-full bg-gradient-to-r from-purple-400 to-pink-400 flex items-center justify-center text-xs font-bold text-white">
                          {index + 1}
                        </span>
                        <span className="font-medium">{screen}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technologies */}
              <div className="space-y-6">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center">
                    <span className="text-white text-lg">⚙️</span>
                  </div>
                  <h3 className="text-2xl font-bold text-white">
                    Technologies
                  </h3>
                </div>
                <div className="space-y-3">
                  {selectedApp.technologies.map((tech, index) => (
                    <div
                      key={index}
                      className="bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-sm border border-white/20 rounded-xl p-4 text-white hover:from-white/15 hover:to-white/10 transition-all duration-300"
                    >
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 rounded-full bg-gradient-to-r from-purple-400 to-pink-400 mt-2 flex-shrink-0"></div>
                        <span className="font-medium leading-relaxed">{tech}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-12 text-center">
              <div className="inline-block p-4 rounded-2xl bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-sm border border-white/20">
                <p className="text-white/70 text-sm font-medium">
                  More details and live demos coming soon...
                </p>
              </div>
            </div>
          </div>
        </main>
      )}

      {/* Footer */}
      <footer className="text-center mt-20 text-white/60 relative">
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
        <div className="relative z-10">
          <div className="w-16 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto rounded-full mb-6"></div>
          <p className="text-lg font-medium">© 2024 Muhammad Saad - React Native Developer</p>
          <p className="text-sm text-white/50 mt-2">Crafted with ❤️ using Next.js & React Native</p>
        </div>
      </footer>
    </div>
  );
}
