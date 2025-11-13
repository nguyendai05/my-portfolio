import Header from "../src/components/layout/Header";
import Footer from "../src/components/layout/Footer";
import Hero from "../src/components/sections/Hero";
import About from "../src/components/sections/About";
import Services from "../src/components/sections/Services";
import Contact from "../src/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Contact />
      </main>
      <Footer />
    </>
  );
}