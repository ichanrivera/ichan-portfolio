import AboutSection from "./components/About";
import ContactSection from "./components/Contact";
import ExperienceSection from "./components/Experience";
import Header from "./components/Header";
import Hero from "./components/Hero";
import ProjectsSection from "./components/Projects";
import TechStackSection from "./components/Tech";

export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <TechStackSection />
      <ProjectsSection />
      <ExperienceSection />
      <AboutSection />
      <ContactSection />
    </div>
  )
}
