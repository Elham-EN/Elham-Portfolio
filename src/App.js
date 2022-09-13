import Homepage from "./pages/Homepage/Homepage";
import AboutMe from "./pages/AboutMe/AboutMe";
import Project from "./pages/Projects/Project";
import Skill from "./pages/Skills/Skill";
import Contact from "./pages/Contact/Contact";
import Blog from "./pages/Blog/Blog";
import NavbarComponent from "./components/Navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavbarComponent />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/aboutme" element={<AboutMe />} />
          <Route path="/projects" element={<Project />} />
          <Route path="/skills" element={<Skill />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="blogs" element={<Blog />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
