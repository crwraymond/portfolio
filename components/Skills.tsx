"use client";

import { motion } from "framer-motion";
import { Star, TrendingUp, CheckCircle2 } from "lucide-react";

const proficiencyLevels = [
  {
    level: "Expert / Advanced",
    description: "Daily use, deep knowledge, production experience",
    icon: Star,
    skills: [
      "React.js",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "Git",
      "REST APIs",
    ],
    gradient: "from-gray-800 to-gray-950",
    borderColor: "border-gray-300 dark:border-gray-700",
  },
  {
    level: "Proficient",
    description: "Regular use, solid understanding, confident application",
    icon: TrendingUp,
    skills: [
      "React Native",
      "Node.js",
      "PostgreSQL",
      "Python",
      "Jest/Vitest",
      "Apache Airflow",
      "Datadog",
    ],
    gradient: "from-gray-600 to-gray-800",
    borderColor: "border-gray-300 dark:border-gray-600",
  },
  {
    level: "Familiar",
    description: "Have worked with, can pick up quickly",
    icon: CheckCircle2,
    skills: [
      "Laravel",
      "PHP",
      "MySQL",
      "Docker",
      "GraphQL",
    ],
    gradient: "from-gray-500 to-gray-700",
    borderColor: "border-gray-300 dark:border-gray-500",
  },
];

function SkillTag({ skill, delay }: { skill: string; delay: number }) {
  return (
    <motion.span
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3, delay }}
      whileHover={{ scale: 1.05, y: -2 }}
      className="bg-white dark:bg-slate-800 text-gray-800 dark:text-gray-100 border border-gray-200 dark:border-slate-700 rounded-xl shadow-sm hover:shadow-md transition-all duration-200"
      style={{
        padding: "10px 20px",
        fontSize: "0.9375rem",
        fontWeight: "600",
        display: "inline-block",
      }}
    >
      {skill}
    </motion.span>
  );
}

export default function Skills() {
  return (
    <section
      className="bg-gradient-to-b from-white to-gray-50 dark:from-slate-950 dark:to-slate-900"
      style={{ padding: "96px 24px" }}
    >
      <div style={{ maxWidth: "1280px", margin: "0 auto", width: "100%" }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          style={{ textAlign: "center", marginBottom: "80px" }}
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
            TECHNICAL EXPERTISE
          </motion.span>
          <h2
            style={{
              fontSize: "clamp(2rem, 7vw, 3rem)",
              fontWeight: "900",
              marginBottom: "24px",
              padding: "0 16px",
            }}
            className="text-gray-900 dark:text-white"
          >
            Skills & Technologies
          </h2>
          <p
            style={{ fontSize: "clamp(1rem, 3vw, 1.25rem)", maxWidth: "672px", margin: "0 auto", padding: "0 16px" }}
            className="text-gray-600 dark:text-gray-400"
          >
            Proficiency levels based on practical experience and production use
          </p>
        </motion.div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "40px",
            maxWidth: "1024px",
            margin: "0 auto",
          }}
        >
          {proficiencyLevels.map((proficiency, index) => {
            const Icon = proficiency.icon;
            return (
              <motion.div
                key={proficiency.level}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="relative group"
              >
                {/* Subtle glow effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-gray-400/5 via-gray-500/5 to-gray-600/5 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-300 opacity-0 group-hover:opacity-100" />

                <div
                  className={`relative bg-white dark:bg-slate-900/50 backdrop-blur-sm rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 border ${proficiency.borderColor}`}
                  style={{ padding: "32px" }}
                >
                  {/* Header */}
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "16px",
                      marginBottom: "12px",
                    }}
                  >
                    <motion.div
                      whileHover={{ rotate: 15, scale: 1.1 }}
                      transition={{ duration: 0.3 }}
                      className={`w-12 h-12 bg-gradient-to-br ${proficiency.gradient} rounded-xl flex items-center justify-center shadow-md`}
                    >
                      <Icon className="text-white" size={24} />
                    </motion.div>
                    <div>
                      <h3
                        style={{ fontSize: "clamp(1.25rem, 4vw, 1.5rem)", fontWeight: "bold" }}
                        className="text-gray-900 dark:text-white"
                      >
                        {proficiency.level}
                      </h3>
                      <p
                        style={{ fontSize: "clamp(0.8rem, 2vw, 0.875rem)" }}
                        className="text-gray-600 dark:text-gray-400"
                      >
                        {proficiency.description}
                      </p>
                    </div>
                  </div>

                  {/* Skills Tags */}
                  <div
                    style={{
                      display: "flex",
                      flexWrap: "wrap",
                      gap: "12px",
                      marginTop: "24px",
                    }}
                  >
                    {proficiency.skills.map((skill, skillIndex) => (
                      <SkillTag
                        key={skill}
                        skill={skill}
                        delay={index * 0.15 + skillIndex * 0.05}
                      />
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
