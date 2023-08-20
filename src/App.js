import './App.css';
import { HashRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import Projects from './pages/Projects';
import ProjectDisplay from './pages/ProjectDisplay';
import Experience from './pages/Experience';
import Education from './pages/Education';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ExperienceDisplay from './pages/ExperienceDisplay';
import EducationDisplay from './pages/EducationDisplay';

function App() {
  return (
  <div className="App">
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/:id" element={<ProjectDisplay />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/experience/:id" element={<ExperienceDisplay />} />
        <Route path="/education" element={<Education />} />
        <Route path="/education/:id" element={<EducationDisplay />} />
      </Routes>
      <Footer />
    </Router>
  </div>
  );
}

export default App;
