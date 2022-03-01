import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import Projects from "./components/Projects/Projects";
import "./app.css";
import Skills from "./components/Skills/Skills";
import Contact from "./components/Contact/Contact";
import AboutMe from "./components/AboutMe/Aboutme";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Projects />
      <Skills />
      <AboutMe />
      <Contact />
    </div>
  );
}

export default App;
