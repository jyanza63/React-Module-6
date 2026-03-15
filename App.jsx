import Projects from "./components/Projects";

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Features />
      <Stats />
      <Projects />
      <CTA />
      <Footer />
    </>
  );
}

import CarLoadingPage from "./components/CarLoadingPage";

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Features />
      <Stats />
      <Projects />
      <CarLoadingPage />   {/* ← NEW */}
      <CTA />
      <Footer />
    </>
  );
}


