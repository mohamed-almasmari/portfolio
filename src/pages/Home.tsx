import About from "../components/About/About";
import Contact from "../components/Contact/Contact";
import Education from "../components/Education/Education";
import Experience from "../components/Experience/Experience";
import Footer from "../components/Footer/Footer";
import Hero from "../components/Hero/Hero";
import Navbar from "../components/Navbar/Navbar";
import Projects from "../components/Projects/Projects";
import Skills from "../components/Skills/Skills";
import ScrollToHash from "../components/ScrollToHash/ScrollToHash";

function Home() {
  return (
    <div className="min-h-screen bg-slate-950">
      <ScrollToHash />
      <Navbar />

      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Education />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default Home;
