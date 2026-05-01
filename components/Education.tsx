"use client";

import { motion } from "framer-motion";
import { GraduationCap, Award, Users, Trophy } from "lucide-react";

export default function Education() {
  return (
    <section id="education" className="bg-gradient-to-b from-gray-50 to-white dark:from-slate-900 dark:to-slate-950 relative overflow-hidden" style={{ padding: '96px 24px' }}>
      {/* Background decoration */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-gray-200/20 dark:bg-gray-800/20 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-gray-300/20 dark:bg-gray-700/20 rounded-full blur-3xl" />
      
      <div style={{ maxWidth: '1280px', margin: '0 auto', position: 'relative', zIndex: 10 }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          style={{ textAlign: 'center', marginBottom: '80px' }}
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
            ACADEMIC BACKGROUND
          </motion.span>
          <h2 style={{
            fontSize: 'clamp(2rem, 7vw, 3rem)',
            fontWeight: '900',
            marginBottom: '24px',
            padding: '0 16px'
          }} className="text-gray-900 dark:text-white">
            Education
          </h2>
          <p style={{ fontSize: 'clamp(1rem, 3vw, 1.25rem)', maxWidth: '672px', margin: '0 auto', padding: '0 16px' }} className="text-gray-600 dark:text-gray-400">
            Strong academic foundation combined with professional certifications
          </p>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '32px', maxWidth: '1024px', margin: '0 auto' }}>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            style={{ display: 'flex', flexDirection: 'column' }}
          >
            <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-slate-800" style={{ padding: '32px', height: '100%', display: 'flex', flexDirection: 'column' }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '20px', marginBottom: '24px' }}>
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                  className="w-20 h-20 bg-gradient-to-br from-gray-700 to-gray-900 rounded-2xl flex items-center justify-center shadow-lg flex-shrink-0"
                >
                  <GraduationCap className="text-white" size={40} />
                </motion.div>
                <div className="flex-1">
                  <h3 style={{ fontSize: 'clamp(1.25rem, 4vw, 1.5rem)', fontWeight: 'bold', marginBottom: '8px' }} className="text-gray-900 dark:text-white">
                    BINA NUSANTARA UNIVERSITY
                  </h3>
                  <p style={{ fontWeight: '500' }} className="text-gray-600 dark:text-gray-400">
                    Sep 2017 – Feb 2022
                  </p>
                </div>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', flex: 1 }}>
                <div className="bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800/30 dark:to-gray-900/30 rounded-2xl" style={{ padding: '20px' }}>
                  <p style={{ fontSize: 'clamp(1rem, 3vw, 1.25rem)', fontWeight: 'bold', marginBottom: '8px' }} className="text-gray-900 dark:text-white">
                    Bachelor of Science (Computer Science)
                  </p>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <Trophy className="text-gray-700 dark:text-gray-400" size={24} />
                    <p style={{ fontSize: 'clamp(1.25rem, 4vw, 1.5rem)', fontWeight: '800' }} className="text-gray-900 dark:text-white">
                      GPA: 3.70/4.00
                    </p>
                  </div>
                </div>

                <div className="border-t-2 border-gray-200 dark:border-slate-700" style={{ paddingTop: '20px' }}>
                  <h4 style={{ fontSize: 'clamp(1rem, 3vw, 1.25rem)', fontWeight: 'bold', marginBottom: '12px', display: 'flex', alignItems: 'center', gap: '12px' }} className="text-gray-900 dark:text-white">
                    <div className="w-10 h-10 bg-gradient-to-br from-gray-600 to-gray-800 rounded-lg flex items-center justify-center">
                      <Users size={20} className="text-white" />
                    </div>
                    Leadership & Mentoring
                  </h4>
                  <ul style={{ display: 'flex', flexDirection: 'column', gap: '12px' }} className="text-gray-700 dark:text-gray-300">
                    <motion.li
                      whileHover={{ x: 5 }}
                      className="flex items-center gap-3 bg-gray-50 dark:bg-slate-800 rounded-xl" style={{ padding: '12px' }}
                    >
                      <div>
                        <span className="font-semibold text-gray-900 dark:text-white">BSLC Tutor and Mentor</span>
                        <br />
                        <span className="text-sm text-gray-500 dark:text-gray-400">Sep 2019 – Feb 2021</span>
                      </div>
                    </motion.li>
                    <motion.li
                      whileHover={{ x: 5 }}
                      className="flex items-center gap-3 bg-gray-50 dark:bg-slate-800 rounded-xl" style={{ padding: '12px' }}
                    >
                      <div>
                        <span className="font-semibold text-gray-900 dark:text-white">Freshmen Leader & Partner</span>
                        <br />
                        <span className="text-sm text-gray-500 dark:text-gray-400">Jul 2019 – Jun 2020</span>
                      </div>
                    </motion.li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}
          >
            <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-slate-800" style={{ padding: '32px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '20px' }}>
                <div className="w-16 h-16 bg-gradient-to-br from-gray-700 to-gray-900 rounded-xl flex items-center justify-center shadow-lg">
                  <Award className="text-white" size={32} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                  Certifications
                </h3>
              </div>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-gray-700 dark:text-gray-300 font-medium text-lg"
              >
                Samsung Advanced-Level Software Certifications
              </motion.div>
            </div>

            <div className="bg-gradient-to-br from-gray-800 to-black rounded-2xl shadow-xl text-white" style={{ padding: '32px' }}>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '12px' }}>Languages</h3>
              <ul style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <li className="flex justify-between items-center">
                  <span style={{ fontWeight: '600' }}>Indonesian</span>
                  <span style={{ fontSize: '0.875rem' }}>Native</span>
                </li>
                <li className="flex justify-between items-center">
                  <span style={{ fontWeight: '600' }}>English</span>
                  <span style={{ fontSize: '0.875rem' }}>Professional</span>
                </li>
                <li className="flex justify-between items-center">
                  <span style={{ fontWeight: '600' }}>Mandarin</span>
                  <span style={{ fontSize: '0.875rem' }}>Elementary</span>
                </li>
              </ul>
            </div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-gradient-to-r from-gray-700 to-gray-900 rounded-2xl shadow-xl text-center border border-gray-600"
              style={{ padding: '32px' }}
            >
              <div className="flex items-center justify-center mb-2">
                <Trophy className="text-white" size={40} />
              </div>
              <h3 className="text-2xl font-bold text-white mb-1">Best Mentor</h3>
              <p className="text-white/90 text-sm">BSLC - Binus Student Learning Center</p>
              <p className="text-white/80 text-sm mt-1">2021</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
