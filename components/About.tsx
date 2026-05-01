"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Code2, Lightbulb, Users, Rocket } from "lucide-react";

const highlights = [
  {
    icon: Code2,
    title: "Technical Excellence",
    description: "Passionate about building performant, scalable web applications with modern technologies like React, Next.js, and TypeScript.",
    gradient: "linear-gradient(to bottom right, #3b82f6, #06b6d4)",
  },
  {
    icon: Lightbulb,
    title: "Problem Solver",
    description: "I thrive on tackling complex challenges, optimizing performance, and turning user needs into elegant solutions.",
    gradient: "linear-gradient(to bottom right, #a855f7, #ec4899)",
  },
  {
    icon: Users,
    title: "Team Collaboration",
    description: "Strong believer in collaborative development, code reviews, and knowledge sharing to drive team success.",
    gradient: "linear-gradient(to bottom right, #f97316, #ef4444)",
  },
  {
    icon: Rocket,
    title: "Continuous Growth",
    description: "Always learning and exploring new technologies, best practices, and industry trends to stay ahead in the rapidly evolving frontend landscape.",
    gradient: "linear-gradient(to bottom right, #22c55e, #10b981)",
  },
];

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

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
    <section
      ref={ref}
      id="about"
      className="relative bg-white dark:bg-black"
      style={{
        paddingTop: "clamp(64px, 15vw, 128px)",
        paddingBottom: "clamp(64px, 15vw, 128px)",
        overflow: "hidden"
      }}
    >
      {/* Background decoration */}
      <div style={{
        position: "absolute",
        inset: 0,
        overflow: "hidden",
        pointerEvents: "none"
      }}>
        <div style={{
          position: "absolute",
          top: "25%",
          left: "-192px",
          width: "384px",
          height: "384px",
          background: "rgba(156, 163, 175, 0.05)",
          borderRadius: "9999px",
          filter: "blur(96px)"
        }} />
        <div style={{
          position: "absolute",
          bottom: "25%",
          right: "-192px",
          width: "384px",
          height: "384px",
          background: "rgba(107, 114, 128, 0.05)",
          borderRadius: "9999px",
          filter: "blur(96px)"
        }} />
      </div>

      <div style={{
        maxWidth: "1280px",
        margin: "0 auto",
        padding: "0 16px",
        position: "relative",
        zIndex: 10
      }}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            marginBottom: "clamp(32px, 8vw, 64px)"
          }}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={isInView ? { scale: 1, opacity: 1 } : {}}
            transition={{ duration: 0.5 }}
            className="bg-gradient-to-r from-gray-100 to-gray-200 dark:from-gray-900 dark:to-gray-800 border border-gray-200 dark:border-gray-700"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              padding: "12px 24px",
              borderRadius: "9999px",
              marginBottom: "24px",
              boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)"
            }}
          >
            <div style={{
              width: "8px",
              height: "8px",
              background: "linear-gradient(to right, #3b82f6, #a855f7)",
              borderRadius: "9999px",
              animation: "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite"
            }} />
            <span className="text-gray-700 dark:text-gray-300" style={{
              fontSize: "0.875rem",
              fontWeight: "bold",
              letterSpacing: "0.05em"
            }}>
              ABOUT ME
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-gray-900 dark:text-white"
            style={{
              fontSize: "clamp(1.75rem, 5vw, 2.25rem)",
              fontWeight: "900",
              textAlign: "center",
              marginBottom: "24px",
              padding: "0 24px"
            }}
          >
            Building Digital Experiences
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-gray-600 dark:text-gray-400"
            style={{
              fontSize: "clamp(0.95rem, 2.5vw, 1.125rem)",
              textAlign: "center",
              maxWidth: "768px",
              lineHeight: "1.75",
              padding: "0 24px"
            }}
          >
            I&apos;m a Frontend Engineer with {experienceText}{" "}of experience crafting high-performance web applications. 
            Currently at Traveloka, I specialize in building seamless user experiences for millions of users across 
            complex customer journeys. I&apos;m passionate about writing clean code, optimizing performance, and delivering 
            products that make a real impact.
          </motion.p>
        </motion.div>

        {/* Highlights Grid */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 280px), 1fr))",
          gap: "clamp(20px, 5vw, 32px)",
        }}>
          {highlights.map((highlight, index) => {
            const IconComponent = highlight.icon;
            return (
              <motion.div
                key={highlight.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.4 + index * 0.1, duration: 0.6 }}
                style={{ position: "relative" }}
              >
                <div style={{
                  position: "absolute",
                  inset: 0,
                  background: "linear-gradient(to right, rgba(156, 163, 175, 0.1), rgba(107, 114, 128, 0.1), rgba(75, 85, 99, 0.1))",
                  borderRadius: "16px",
                  filter: "blur(24px)",
                  transition: "filter 0.3s"
                }} />
                
                <div
                  className="bg-white dark:bg-slate-900 border-gray-100 dark:border-slate-800"
                  style={{
                    position: "relative",
                    borderRadius: "16px",
                    padding: "clamp(20px, 5vw, 32px)",
                    boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)",
                    transition: "all 0.3s",
                    border: "1px solid #f3f4f6"
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.boxShadow = "0 25px 50px -12px rgba(0, 0, 0, 0.25)";
                    e.currentTarget.style.transform = "scale(1.02)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.boxShadow = "0 10px 15px -3px rgba(0, 0, 0, 0.1)";
                    e.currentTarget.style.transform = "scale(1)";
                  }}
                >
                  {/* Icon */}
                  <div style={{ marginBottom: "24px" }}>
                    <div
                      style={{
                        width: "56px",
                        height: "56px",
                        borderRadius: "12px",
                        background: highlight.gradient,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)",
                        transition: "transform 0.3s"
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = "scale(1.1)";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = "scale(1)";
                      }}
                    >
                      <IconComponent size={28} color="white" strokeWidth={2.5} />
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-gray-900 dark:text-white" style={{
                    fontSize: "clamp(1.1rem, 3vw, 1.25rem)",
                    fontWeight: "bold",
                    marginBottom: "12px"
                  }}>
                    {highlight.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400" style={{
                    fontSize: "clamp(0.9rem, 2.5vw, 1rem)",
                    lineHeight: "1.75"
                  }}>
                    {highlight.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.6 }}
          style={{
            marginTop: "64px",
            textAlign: "center"
          }}
        >
          <p className="text-gray-600 dark:text-gray-400" style={{
            fontSize: "clamp(0.95rem, 2.5vw, 1.125rem)",
            maxWidth: "672px",
            margin: "0 auto",
            padding: "0 16px"
          }}>
            When I&apos;m not coding, you&apos;ll find me exploring new technologies, contributing to open-source projects, 
            or sharing knowledge with the developer community.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
