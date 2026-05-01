import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Education from "@/components/Education";
import Contact from "@/components/Contact";
import Projects from "@/components/Projects";
import BackToTop from "@/components/BackToTop";
import PageLoader from "@/components/PageLoader";
import Navigation from "@/components/Navigation";

export default function Home() {
  return (
    <>
      <PageLoader />
      <Navigation />
      <main className="min-h-screen">
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Education />
        <Contact />
        <BackToTop />
      </main>
    </>
  );
}
