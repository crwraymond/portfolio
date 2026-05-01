"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { ExternalLink, Code, X, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

const GithubIcon = ({ size = 16 }: { size?: number }) => (
  <svg width={size} height={size} fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
  </svg>
);

const projects = [
  {
    title: "Shopee Analytics Chrome Extension",
    description: "A Chrome extension for tracking Shopee.co.id product metrics with historical analytics. Features include sales trends tracking, price history monitoring, rating analysis, stock alerts, and interactive visualizations.",
    technologies: ["TypeScript", "React", "Vite", "Chrome Manifest V3", "Recharts", "IndexedDB"],
    images: ["/shopeeExtention/popup.png", "/shopeeExtention/product_badge.png"],
    github: null,
    demo: null,
    color: "from-orange-600 to-red-600",
  },
  {
    title: "Nusantara Motor Company Profile",
    description: "A comprehensive company profile website for a motorcycle dealership featuring product catalogs, promotion details, company information, and interactive user interface with modern design.",
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    images: [
      "/nusantara/Home.png",
      "/nusantara/MotorDetail.png",
      "/nusantara/PromoDetail.png",
      "/nusantara/TentangKami.png"
    ],
    github: null,
    demo: null,
    color: "from-blue-600 to-cyan-600",
  },
  {
    title: "Cakra Group Indonesia Website",
    description: "A corporate website for Cakra Group Indonesia, showcasing their industrial machinery and fabrication services. Features include product galleries, machinery catalog, client portfolio, and company information.",
    technologies: ["HTML", "CSS", "JavaScript", "Bootstrap"],
    images: ["/projects/cakra_home.png"],
    github: null,
    demo: "https://cakraperkasa.com",
    color: "from-teal-600 to-emerald-600",
  },
];

function ProjectCard({
  project,
  index,
}: {
  project: (typeof projects)[0];
  index: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsModalOpen(false);
    };
    
    if (isModalOpen) {
      window.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }
    
    return () => {
      window.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isModalOpen]);

  const nextImage = () => {
    if (project.images && project.images.length > 0) {
      setCurrentImageIndex((prev) => (prev + 1) % project.images.length);
    }
  };

  const prevImage = () => {
    if (project.images && project.images.length > 0) {
      setCurrentImageIndex((prev) => (prev - 1 + project.images.length) % project.images.length);
    }
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className="group relative"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-gray-400/10 via-gray-500/10 to-gray-600/10 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-300" />
      
      <div className="relative bg-white dark:bg-slate-900 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-slate-800 overflow-hidden group-hover:scale-[1.02]">
        {/* Project Image */}
        <div className="relative h-64 bg-gray-100 dark:bg-slate-800 flex items-center justify-center p-4">
          {project.images && project.images.length > 0 && project.images[0] ? (
            <>
              <div className="relative w-full h-full rounded-xl shadow-2xl cursor-pointer" onClick={() => setIsModalOpen(true)}>
                <div className="relative w-full h-full overflow-hidden rounded-md">
                  <Image
                    src={project.images[currentImageIndex]}
                    alt={`${project.title} - Image ${currentImageIndex + 1}`}
                    fill
                    className="object-contain p-2 transition-transform duration-300"
                  />
                </div>
              </div>
              {/* Navigation dots for multiple images */}
              {project.images.length > 1 && (
                <div style={{
                  position: 'absolute',
                  bottom: '16px',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  display: 'flex',
                  gap: '8px',
                  zIndex: 10
                }}>
                  {project.images.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentImageIndex(idx)}
                      style={{
                        width: idx === currentImageIndex ? '24px' : '8px',
                        height: '8px',
                        borderRadius: '9999px',
                        backgroundColor: 'white',
                        border: '1px solid #9ca3af',
                        cursor: 'pointer',
                        transition: 'all 0.3s',
                        boxShadow: '10px 4px 10px -1px rgba(0, 0, 0, 0.7)'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.boxShadow = '0 6px 10px -1px rgba(0, 0, 0, 0.4)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.3)';
                      }}
                      aria-label={`View image ${idx + 1}`}
                    />
                  ))}
                </div>
              )}
            </>
          ) : (
            <Code size={64} className="text-gray-400 dark:text-gray-600" />
          )}
        </div>

        {/* Project Content */}
        <div style={{ padding: "clamp(20px, 5vw, 32px)" }}>
          <h3 style={{ fontSize: "clamp(1.25rem, 4vw, 1.5rem)", fontWeight: "bold", marginBottom: "12px" }} className="text-gray-900 dark:text-white">
            {project.title}
          </h3>
          
          <p style={{ fontSize: "clamp(0.875rem, 2.5vw, 0.95rem)", lineHeight: "1.625rem", marginBottom: "20px" }} className="text-gray-600 dark:text-gray-400">
            {project.description}
          </p>

          {/* Technologies */}
          <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", marginBottom: "24px" }}>
            {project.technologies.map((tech, idx) => (
              <span
                key={idx}
                style={{ padding: "6px 12px", fontSize: "0.75rem", fontWeight: "600", borderRadius: "6px" }}
                className="bg-gray-100 dark:bg-slate-800 text-gray-700 dark:text-gray-300"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Links */}
          <div style={{ display: "flex", gap: "12px" }}>
            {project.github && (
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                style={{ 
                  padding: "10px 20px",
                  borderRadius: "12px",
                  fontSize: "0.875rem",
                  fontWeight: "600",
                  display: "flex",
                  alignItems: "center",
                  gap: "8px"
                }}
                className="bg-gray-900 dark:bg-white text-white dark:text-gray-900 hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors"
              >
                <GithubIcon size={16} />
                Code
              </motion.a>
            )}
            {project.demo && (
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                style={{ 
                  padding: "10px 20px",
                  borderRadius: "12px",
                  fontSize: "0.875rem",
                  fontWeight: "600",
                  display: "flex",
                  alignItems: "center",
                  gap: "8px"
                }}
                className="border-2 border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:border-gray-400 dark:hover:border-gray-600 transition-colors"
              >
                <ExternalLink size={16} />
                Demo
              </motion.a>
            )}
          </div>
        </div>
      </div>

      {/* Modal for full screen image view */}
      {isModalOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setIsModalOpen(false)}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.95)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 9999,
            padding: '20px'
          }}
        >
          {/* Close button */}
          <button
            onClick={() => setIsModalOpen(false)}
            style={{
              position: 'absolute',
              top: 'clamp(10px, 3vw, 20px)',
              right: 'clamp(10px, 3vw, 20px)',
              padding: 'clamp(8px, 2vw, 12px)',
              borderRadius: '50%',
              backgroundColor: 'rgba(255, 255, 255, 0.1)',
              border: 'none',
              cursor: 'pointer',
              color: 'white',
              transition: 'background-color 0.2s',
              zIndex: 10001
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.2)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
            }}
            aria-label="Close modal"
          >
            <X size={24} />
          </button>

          {/* Previous button */}
          {project.images && project.images.length > 1 && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                prevImage();
              }}
              style={{
                position: 'absolute',
                left: 'clamp(10px, 3vw, 20px)',
                padding: 'clamp(8px, 2vw, 12px)',
                borderRadius: '50%',
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                border: 'none',
                cursor: 'pointer',
                color: 'white',
                transition: 'background-color 0.2s',
                zIndex: 10001
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.2)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
              }}
              aria-label="Previous image"
            >
              <ChevronLeft size={32} />
            </button>
          )}

          {/* Image container */}
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              position: 'relative',
              maxWidth: '90vw',
              maxHeight: '90vh',
              width: '100%',
              height: '100%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <Image
              src={project.images ? project.images[currentImageIndex] : ''}
              alt={`${project.title} - Full view ${currentImageIndex + 1}`}
              fill
              className="object-contain"
              quality={100}
            />
          </div>

          {/* Next button */}
          {project.images && project.images.length > 1 && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                nextImage();
              }}
              style={{
                position: 'absolute',
                right: 'clamp(10px, 3vw, 20px)',
                padding: 'clamp(8px, 2vw, 12px)',
                borderRadius: '50%',
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                border: 'none',
                cursor: 'pointer',
                color: 'white',
                transition: 'background-color 0.2s',
                zIndex: 10001
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.2)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
              }}
              aria-label="Next image"
            >
              <ChevronRight size={32} />
            </button>
          )}

          {/* Image counter */}
          {project.images && project.images.length > 1 && (
            <div
              style={{
                position: 'absolute',
                bottom: 'clamp(10px, 3vw, 20px)',
                left: '50%',
                transform: 'translateX(-50%)',
                padding: 'clamp(6px 12px, 2vw, 8px 16px)',
                borderRadius: '20px',
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                color: 'white',
                fontSize: 'clamp(12px, 2.5vw, 14px)',
                fontWeight: '500'
              }}
            >
              {currentImageIndex + 1} / {project.images.length}
            </div>
          )}
        </motion.div>
      )}
    </motion.div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="bg-gradient-to-b from-white to-gray-50 dark:from-slate-950 dark:to-slate-900" style={{ padding: "96px 24px" }}>
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
            style={{
              display: "inline-block",
              padding: "8px 16px",
              borderRadius: "9999px",
              fontSize: "0.875rem",
              fontWeight: "600",
              marginBottom: "16px"
            }}
            className="bg-transparent border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300"
          >
            FEATURED WORK
          </motion.span>
          <h2 style={{
            fontSize: "3rem",
            fontWeight: "900",
            marginBottom: "24px",
            padding: "0 16px"
          }} className="text-gray-900 dark:text-white">
            Projects
          </h2>
          <p style={{ fontSize: "1.25rem", maxWidth: "672px", margin: "0 auto" }} className="text-gray-600 dark:text-gray-400">
            A selection of projects I&apos;ve built and contributed to
          </p>
        </motion.div>

        <div style={{ 
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))",
          gap: "32px",
          maxWidth: "1200px",
          margin: "0 auto"
        }}>
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
