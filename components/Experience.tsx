"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase, Calendar, MapPin } from "lucide-react";
import Image from "next/image";

const experiences = [
  {
    company: "Traveloka",
    division: "Flight Domain",
    role: "Frontend Engineer",
    type: "Fulltime",
    location: "Tangerang, Indonesia",
    period: "Sep 2025 – Present",
    logo: "/logos/traveloka.jpeg",
    highlights: [
      "Contributed to the entire end-to-end customer journey on traveloka.com Flights, covering search, selection, pricing, booking, and purchase flows",
      "Performed frontend performance optimization across critical, high-traffic pages using Performance profiling",
      "Enhanced user experience and conversion-critical flows by optimizing complex UI interactions and data-heavy components",
      "Developed and maintained internal pricing tools for Demand teams",
      "Currently developing a new agent-facing application for 3PS agents to manage refund and reschedule workflows",
      "Built applications using Next.js and internal frontend frameworks",
      "Implemented frontend tests using Vitest and Jest",
    ],
    color: "from-purple-600 via-pink-600 to-purple-600",
    iconBg: "from-purple-500 to-pink-500",
  },
  {
    company: "Samsung Research Indonesia",
    role: "Frontend Engineer",
    type: "Fulltime",
    location: "Jakarta, Indonesia",
    period: "Feb 2022 – Sep 2025",
    logo: "/logos/samsung.jpeg",
    highlights: [
      "Developed and maintained scalable frontend applications using React.js",
      "Built interactive dashboards, data visualizations, and CMS platforms",
      "Enhanced UI/UX and frontend performance incorporating user feedback and usability testing",
      "Implemented unit testing to ensure reliability and code quality",
      "Conducted data analysis for SmartThings, transforming usage data into actionable insights",
      "Automated data validation and workflow processes using Apache Airflow",
      "Performed web scraping using Python",
      "Earned Samsung Advanced-Level Software Certifications",
    ],
    color: "from-blue-600 via-cyan-600 to-blue-600",
    iconBg: "from-blue-500 to-cyan-500",
  },
  {
    company: "Samsung Research Indonesia",
    role: "Backend Engineer",
    type: "Internship",
    location: "Jakarta, Indonesia",
    period: "Mar 2021 – Feb 2022",
    logo: "/logos/samsung.jpeg",
    highlights: [
      "Designed and maintained database schemas optimized for chatbot applications",
      "Developed backend APIs and CMS systems to support chatbot platforms",
      "Integrated backend services with third-party platforms and external APIs",
      "Optimized backend systems for scalability and performance",
    ],
    color: "from-teal-600 via-emerald-600 to-teal-600",
    iconBg: "from-teal-500 to-emerald-500",
  },
];

function ExperienceCard({
  experience,
  index,
}: {
  experience: (typeof experiences)[0];
  index: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
      transition={{ duration: 0.8, delay: index * 0.2 }}
      className="relative group"
      style={{ width: '100%' }}
    >
      {/* Gradient border effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 via-pink-600/20 to-blue-600/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-300" />
      
      <div className="relative bg-white dark:bg-slate-900 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-slate-800 group-hover:scale-[1.02]" style={{ padding: '48px' }}>
        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'flex-start', gap: '24px', marginBottom: '32px', flexWrap: 'wrap' }}>
          {/* Icon with gradient */}
          <motion.div
            whileHover={{ rotate: 360, scale: 1.1 }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg overflow-hidden"
            style={{
              width: '80px',
              height: '80px',
              borderRadius: '16px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0,
              boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
              background: 'white'
            }}
          >
            {experience.logo ? (
              <Image 
                src={experience.logo} 
                alt={`${experience.company} logo`}
                width={80}
                height={80}
                style={{ 
                  width: '100%', 
                  height: '100%', 
                  objectFit: 'cover' 
                }}
              />
            ) : (
              <Briefcase className="text-white" size={28} />
            )}
          </motion.div>

          <div style={{ flex: 1, width: '100%' }}>
            <h3 style={{ fontSize: 'clamp(1.5rem, 5vw, 1.875rem)', fontWeight: 'bold', marginBottom: '12px' }} className="text-gray-900 dark:text-white">
              {experience.company}
              {experience.division && (
                <span style={{ display: 'block', fontSize: 'clamp(1rem, 3vw, 1.25rem)', fontWeight: 'normal', marginTop: '4px' }} className="text-gray-600 dark:text-gray-400">
                  ({experience.division})
                </span>
              )}
            </h3>
            <p style={{
              fontSize: 'clamp(1rem, 3vw, 1.25rem)',
              fontWeight: '600',
              marginBottom: '16px'
            }} className="text-gray-700 dark:text-gray-300">
              {experience.role} · {experience.type}
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', fontSize: 'clamp(0.8rem, 2vw, 0.875rem)' }} className="text-gray-600 dark:text-gray-400">
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '8px 16px', borderRadius: '9999px' }} className="bg-gray-100 dark:bg-slate-800">
                <Calendar size={16} />
                <span>{experience.period}</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '8px 16px', borderRadius: '9999px' }} className="bg-gray-100 dark:bg-slate-800">
                <MapPin size={16} />
                <span>{experience.location}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Highlights with animated bullets */}
        <ul style={{ display: 'flex', flexDirection: 'column', gap: '20px', marginTop: '32px', listStyle: 'none', padding: 0 }}>
          {experience.highlights.map((highlight, idx) => (
            <motion.li
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{ delay: index * 0.2 + idx * 0.1, duration: 0.5 }}
              style={{ display: 'flex', alignItems: 'flex-start', gap: '16px', fontSize: 'clamp(0.875rem, 2.5vw, 0.95rem)', lineHeight: '1.625rem' }}
              className="text-gray-700 dark:text-gray-300"
            >
              <motion.span
                whileHover={{ scale: 1.5 }}
                style={{
                  width: '10px',
                  height: '10px',
                  borderRadius: '50%',
                  marginTop: '8px',
                  flexShrink: 0,
                  background: 'linear-gradient(to right, rgb(107 114 128), rgb(75 85 99))',
                  boxShadow: '0 2px 8px rgba(0, 0, 0, 0.3)'
                }}
              />
              <span style={{ flex: 1 }}>{highlight}</span>
            </motion.li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}

export default function Experience() {
  // Calculate years of experience from Feb 2022 to now
  const startDate = new Date('2022-02-01');
  const currentDate = new Date();
  
  let years = currentDate.getFullYear() - startDate.getFullYear();
  let months = currentDate.getMonth() - startDate.getMonth();
  
  if (months < 0) {
    years--;
    months += 12;
  }
  
  const experienceText = months > 0 
    ? `${years} years and ${months} month${months !== 1 ? 's' : ''}`
    : `${years} years`;

  return (
    <section id="experience" className="bg-gradient-to-b from-gray-50 to-white dark:from-slate-900 dark:to-slate-950" style={{ padding: '96px 24px' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto', width: '100%' }}>
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
            style={{
              display: 'inline-block',
              padding: '8px 16px',
              borderRadius: '9999px',
              fontSize: '0.875rem',
              fontWeight: '600',
              marginBottom: '16px'
            }}
            className="bg-transparent border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300"
          >
            PROFESSIONAL JOURNEY
          </motion.span>
          <h2 style={{
            fontSize: '3rem',
            fontWeight: '900',
            marginBottom: '24px',
            padding: '0 16px'
          }} className="text-gray-900 dark:text-white">
            Work Experience
          </h2>
          <p style={{ fontSize: '1.25rem', maxWidth: '672px', margin: '0 auto' }} className="text-gray-600 dark:text-gray-400">
            Over {experienceText} of expertise in building scalable, high-performance web applications
          </p>
        </motion.div>

        <div style={{ maxWidth: '1024px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '32px' }}>
          {experiences.map((experience, index) => (
            <ExperienceCard key={index} experience={experience} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
