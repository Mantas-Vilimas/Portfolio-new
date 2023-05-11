import About from "../../components/About/About";
import CallToAction from "../../components/CallToAction/CallToAction";
import Hero from "../../components/Hero/Hero";
import Projects from "../../components/Projects/Projects";
import Skills from "../../components/Skills/Skills";

const HomePage = () => {
  return (
    <main>
      <Hero />
      <About/>
      <Skills/>
      <Projects/>
      <CallToAction/>
    </main>
  );
};

export default HomePage;
