"use client";

import { motion } from "framer-motion";
import { Mail, Phone, Send } from "lucide-react";

export default function Contact() {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "raymond_wijaya10@yahoo.co.id",
      href: "mailto:raymond_wijaya10@yahoo.co.id",
      color: "from-gray-700 to-gray-900",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "(+62) 822-2017-4609",
      href: "tel:+6282220174609",
      color: "from-gray-600 to-gray-800",
    },
    {
      icon: ({ className, size }: { className?: string; size?: number }) => (
        <svg className={className} width={size} height={size} fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      ),
      label: "LinkedIn",
      value: "Connect on LinkedIn",
      href: "https://www.linkedin.com/in/crwraymond/",
      color: "from-gray-600 to-gray-800",
    },
    {
      icon: ({ className, size }: { className?: string; size?: number }) => (
        <svg className={className} width={size} height={size} fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
        </svg>
      ),
      label: "GitHub",
      value: "View my projects",
      href: "https://github.com/crwraymond",
      color: "from-gray-700 to-gray-900",
    },
  ];

  return (
    <section id="contact" className="relative bg-gradient-to-br from-black via-gray-900 to-black overflow-hidden" style={{ padding: '80px 24px' }}>
      {/* Animated background */}
      <div className="absolute inset-0">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl"
        />
      </div>

      <div style={{ maxWidth: '1024px', margin: '0 auto', position: 'relative', zIndex: 10 }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          style={{ textAlign: 'center', marginBottom: '48px' }}
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-transparent border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300"
            style={{
              display: "inline-block",
              padding: "8px 16px",
              borderRadius: "9999px",
              fontSize: "0.875rem",
              fontWeight: "600",
              marginBottom: "16px",
            }}
          >
            LET&apos;S CONNECT
          </motion.span>
          <h2 style={{
            fontSize: 'clamp(2rem, 7vw, 3rem)',
            fontWeight: '900',
            marginBottom: '16px',
            padding: '0 16px'
          }} className="text-white">
            Get In Touch
          </h2>
          <p style={{ fontSize: 'clamp(1rem, 3vw, 1.125rem)', maxWidth: '600px', margin: '0 auto', lineHeight: '1.6', padding: '0 16px' }} className="text-gray-300">
            I&apos;m always open to discussing new projects and opportunities.
          </p>
        </motion.div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '48px', maxWidth: '800px', margin: '0 auto 48px auto' }}>
          {contactInfo.map((contact, index) => (
            <motion.a
              key={contact.label}
              href={contact.href}
              target={contact.label === "LinkedIn" || contact.label === "GitHub" ? "_blank" : undefined}
              rel={contact.label === "LinkedIn" || contact.label === "GitHub" ? "noopener noreferrer" : undefined}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.02, x: 10 }}
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-gray-600/20 to-gray-800/20 rounded-2xl blur-lg group-hover:blur-xl transition-all duration-300" />
              
              <div className="relative bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl hover:bg-white/20 transition-all duration-300 shadow-xl" style={{ padding: 'clamp(16px, 4vw, 20px)', display: 'flex', alignItems: 'center', gap: 'clamp(12px, 3vw, 20px)' }}>
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className="rounded-xl flex items-center justify-center shadow-lg flex-shrink-0"
                  style={{
                    width: 'clamp(48px, 10vw, 56px)',
                    height: 'clamp(48px, 10vw, 56px)',
                    background: 'linear-gradient(to bottom right, rgb(55 65 81), rgb(17 24 39))'
                  }}
                >
                  <contact.icon className="text-white" size={24} />
                </motion.div>
                <div style={{ flex: 1, textAlign: 'left' }}>
                  <h3 style={{ fontSize: 'clamp(0.9rem, 2.5vw, 1rem)', fontWeight: 'bold', marginBottom: '4px' }} className="text-white">
                    {contact.label}
                  </h3>
                  <p style={{ fontSize: 'clamp(0.8rem, 2vw, 0.875rem)', lineHeight: '1.4' }} className="text-gray-300">{contact.value}</p>
                </div>
              </div>
            </motion.a>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          style={{ textAlign: 'center' }}
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-3 text-white rounded-full font-bold transition-all cursor-pointer"
            style={{
              padding: '16px 48px',
              background: 'linear-gradient(135deg, rgb(31 41 55) 0%, rgb(17 24 39) 50%, rgb(0 0 0) 100%)',
              boxShadow: '0 20px 60px rgba(0, 0, 0, 0.8), 0 0 30px rgba(255, 255, 255, 0.1)',
              fontSize: '1.125rem',
              lineHeight: '1.75rem',
              border: '1px solid rgba(255, 255, 255, 0.1)'
            }}
            onClick={() => window.location.href = "mailto:raymond_wijaya10@yahoo.co.id"}
          >
            <Send size={20} />
            Send Me an Email
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
