import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Team from "./components/Team";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import LoadingScreen from "./components/LoadingScreen";

function App() {
  const [loading, setLoading] = useState(true);

  return (
    <>
      {loading && <LoadingScreen onFinish={() => setLoading(false)} />}
      {!loading && <Hero />}

      <Navbar />
      <Hero />
      <About />
      <Team />
      <Projects />
      <Footer />
    </>
  );
}

export default App;
