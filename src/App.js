import { About } from "./components/About";
import { Contact } from "./components/Contact";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import { Projects } from "./components/Projects";
import { Skills } from "./components/Skills";
import { Helmet } from "react-helmet";

function App() {
  return (
    <div className="App">
      <Helmet>
        <title>Heshan Sanjaya</title>
      </Helmet>
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
