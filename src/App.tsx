/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { SplashScreen } from './components/SplashScreen';
import { AnimatedBackground } from './components/AnimatedBackground';
import { Navigation } from './components/Navigation';
import { Hero } from './components/sections/Hero';
import { Experience } from './components/sections/Experience';
import { Achievements } from './components/sections/Achievements';
import { Projects } from './components/sections/Projects';
import { Skills } from './components/sections/Skills';
import { Education } from './components/sections/Education';

export default function App() {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <main className="relative min-h-screen bg-slate-950 text-slate-200 selection:bg-blue-500/30 selection:text-blue-200">
      <AnimatePresence mode="wait">
        {!isLoaded ? (
          <SplashScreen key="splash" onComplete={() => setIsLoaded(true)} />
        ) : (
          <motion.div
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="relative z-10"
          >
            <AnimatedBackground />
            <Navigation />
            
            <div id="hero">
              <Hero />
            </div>
            
            <div id="achievements">
              <Achievements />
            </div>

            <div id="experience">
              <Experience />
            </div>

            <div id="projects">
              <Projects />
            </div>

            <div id="skills">
              <Skills />
            </div>

            <div id="education">
              <Education />
            </div>

            <footer className="py-12 px-4 border-t border-slate-900/50 text-center">
              <p className="text-sm text-slate-500 font-mono tracking-widest uppercase">
                &copy; {new Date().getFullYear()} Ansh Chandra • Built with Precision
              </p>
            </footer>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
