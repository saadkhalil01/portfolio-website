'use client';

import { useState } from 'react';
import Image from "next/image";

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
      <header className="text-center mb-12 ">
        <h1 className="text-4xl sm:text-6xl font-bold text-white mb-4 ">
          SAAD KHALIL
        </h1>
        <p className="text-xl sm:text-2xl text-white/90 mb-2">
          React Native Developer
        </p>
        <p className="text-lg text-white/80">
          2+ Years Experience
        </p>
      </header>

      {/* Level Selection Grid */}
      {!selectedApp ? (
        <main className="max-w-6xl mx-auto relative">



          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
              flexDirection: 'row',
              width: '100%',
              alignSelf: "center",
              gap: '60px'
            }}
            className="relative z-10">
            {apps.map((app, index) => (
              <div
                key={app.id}
                className="flex flex-col items-center cursor-pointer transition-all duration-300 hover:scale-105 fade-in"
                onClick={() => setSelectedApp(app)}
                style={{
                  animationDelay: `${index * 0.2}s`
                }}
              >
                <div
                  className="level-card bg-purple-900/30 backdrop-blur-sm border border-purple-800/40 rounded-xl p-6 transition-all duration-300 hover:bg-purple-900/40 hover:shadow-2xl"
                  style={{
                    borderRadius: 1000,
                    height: '150px',
                    width: '150px',
                    alignItems: 'center',
                    justifyContent: 'center',
                    display: 'flex',
                    flexDirection: 'column',
                    backgroundColor:
                      (app.name === 'LoyalAI' || app.name === 'FanGenie')
                        ? 'black'
                        : 'white'
                  }}
                >
                  <div className="text-center">
                    {getAppLogo(app.name, app.logo) !== app.logo ? (
                      app.name === "Spectrum" ? (
                        <div style={{ width: 80, height: 80, display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative' }}>
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
                          width={80}
                          height={80}
                          className="mx-auto"
                        />
                      )
                    ) : (
                      <div className="text-6xl">
                        {app.logo}
                      </div>
                    )}
                  </div>
                </div>
                <h3 className="text-white text-lg font-semibold mt-4 text-center max-w-[150px]">
                  {app.name}
                </h3>
              </div>
            ))}
          </div>
        </main>
      ) : (
        /* App Detail Screen */
        <main className="max-w-4xl mx-auto">
          <div className="bg-purple-900/30 backdrop-blur-sm border border-purple-800/40 rounded-xl p-8">
            <button
              onClick={() => setSelectedApp(null)}
              className="mb-6 text-white/80 hover:text-white transition-colors flex items-center gap-2 text-2xl"
              aria-label="Back"
              title="Back"
            >
              ←
            </button>

            <div className="text-center mb-8">
              <div className="mb-4 floating">
                {getAppLogo(selectedApp.name, selectedApp.logo) !== selectedApp.logo ? (
                  selectedApp.name === "Spectrum" ? (
                    <div style={{ width: 140, height: 140, display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', margin: '0 auto' }}>
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
                      width={120}
                      height={120}
                      className="mx-auto"
                    />
                  )
                ) : (
                  <div className="text-8xl">
                    {selectedApp.logo}
                  </div>
                )}
              </div>
              <h2 className="text-3xl font-bold text-white mb-2">
                {selectedApp.name}
              </h2>
              <p className="text-white/80 text-lg">
                {selectedApp.description}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* App Screens */}
              <div>
                <h3 className="text-xl font-bold text-white mb-4">
                  📱 App Screens
                </h3>
                <div className="space-y-2">
                  {selectedApp.screens.map((screen, index) => (
                    <div
                      key={index}
                      className="bg-purple-900/25 border border-purple-800/35 rounded-lg p-3 text-white"
                    >
                      {index + 1}. {screen}
                    </div>
                  ))}
                </div>
              </div>

              {/* Technologies */}
              <div>
                <h3 className="text-xl font-bold text-white mb-4">
                  🛠️ Technologies Used
                </h3>
                <div className="space-y-2">
                  {selectedApp.technologies.map((tech, index) => (
                    <div
                      key={index}
                      className="bg-purple-950/40 border border-purple-900/50 rounded-lg p-3 text-white"
                    >
                      {tech}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-8 text-center">
              <p className="text-white/60 text-sm">
                More details and live demos coming soon...
              </p>
            </div>
          </div>
        </main>
      )}

      {/* Footer */}
      <footer className="text-center mt-16 text-white/60">
        <p>© 2024 Muhammad Saad - React Native Developer</p>
      </footer>
    </div>
  );
}
