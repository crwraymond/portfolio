"use client";

import { motion } from "framer-motion";
import { Mail } from "lucide-react";

const DownloadIcon = ({ size = 20 }: { size?: number }) => (
  <svg width={size} height={size} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
  </svg>
);

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-black via-gray-900 to-black text-white px-4 py-12">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute top-1/4 -left-48 w-96 h-96 bg-white/5 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [90, 0, 90],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute bottom-1/4 -right-48 w-96 h-96 bg-white/5 rounded-full blur-3xl"
        />
      </div>

      <div className="max-w-6xl mx-auto relative z-10 w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center flex flex-col items-center"
        >
          {/* Avatar with glow effect */}
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200, damping: 15 }}
            style={{ marginBottom: '32px' }}
          >
            <div className="relative w-36 h-36 mx-auto group">
              <div className="absolute inset-0 bg-gradient-to-br from-gray-400 via-gray-500 to-gray-600 rounded-full animate-gradient" style={{ boxShadow: '0 0 60px rgba(255,255,255,0.1)' }} />
              <div className="relative w-full h-full bg-gradient-to-br from-gray-800 to-black rounded-full flex items-center justify-center text-6xl font-bold shadow-2xl group-hover:scale-110 transition-transform duration-300 border-2 border-gray-700">
                CW
              </div>
            </div>
          </motion.div>

          {/* Name with gradient animation */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black text-center w-full text-white"
            style={{
              marginBottom: '24px',
              padding: '0 16px'
            }}
          >
            Christian Raymond Wijaya
          </motion.h1>

          {/* Role with typing effect feel */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            style={{ marginBottom: '40px' }}
          >
            <p className="text-3xl md:text-4xl text-gray-300 font-light mb-2">
              Frontend Engineer
            </p>
            <div className="flex items-center justify-center gap-2 text-gray-400">
              <span className="text-lg">Specialized in</span>
              <motion.span
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="text-lg font-semibold text-white"
              >
                React • Next.js • TypeScript
              </motion.span>
            </div>
          </motion.div>

          {/* Contact info with better spacing */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="flex flex-col md:flex-row items-center justify-center"
            style={{ gap: '20px', marginBottom: '40px' }}
          >
            <motion.a
              whileHover={{ scale: 1.05 }}
              href="mailto:raymond_wijaya10@yahoo.co.id"
              className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors"
            >
              <Mail size={20} />
              <span>raymond_wijaya10@yahoo.co.id</span>
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05 }}
              href="https://www.linkedin.com/in/crwraymond/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
              <span>LinkedIn</span>
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05 }}
              href="https://github.com/crwraymond"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
              <span>GitHub</span>
            </motion.a>
          </motion.div>

          {/* CTA Button with enhanced styling */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.8 }}
            className="flex flex-wrap justify-center items-center w-full"
            style={{ gap: '20px' }}
          >
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#experience"
              className="inline-flex items-center justify-center rounded-full font-bold text-white transition-all cursor-pointer"
              style={{
                padding: '16px 48px',
                background: 'linear-gradient(135deg, rgb(31 41 55) 0%, rgb(17 24 39) 50%, rgb(0 0 0) 100%)',
                boxShadow: '0 10px 40px rgba(0, 0, 0, 0.6), 0 0 20px rgba(255, 255, 255, 0.1)',
                fontSize: '1.125rem',
                lineHeight: '1.75rem',
                border: '1px solid rgba(255, 255, 255, 0.1)'
              }}
            >
              View My Work
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#contact"
              className="inline-flex items-center justify-center rounded-full font-bold text-white transition-all backdrop-blur-md cursor-pointer"
              style={{
                padding: '16px 48px',
                background: 'rgba(255, 255, 255, 0.1)',
                border: '2px solid rgba(255, 255, 255, 0.2)',
                boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
                fontSize: '1.125rem',
                lineHeight: '1.75rem'
              }}
            >
              Contact Me
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="/resume.pdf"
              download
              className="inline-flex items-center justify-center gap-2 rounded-full font-bold text-white transition-all backdrop-blur-md cursor-pointer"
              style={{
                padding: '16px 48px',
                background: 'rgba(255, 255, 255, 0.1)',
                border: '2px solid rgba(255, 255, 255, 0.2)',
                boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
                fontSize: '1.125rem',
                lineHeight: '1.75rem'
              }}
            >
              <DownloadIcon size={20} />
              Download CV
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
