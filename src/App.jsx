import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Tools from './components/Tools';
import Thoughts from './components/Thoughts';
import Contact from './components/Contact';
import Footer from './components/Footer';

import Blog1 from './pages/blogs/Blog1';
import Blog2 from './pages/blogs/Blog2';
import Blog3 from './pages/blogs/Blog3';
import Blog4 from './pages/blogs/Blog4';

import MainLayout from './layouts/MainLayout';
import ProfileCard from './components/ProfileCard';

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        {/* ✅ HOME PAGE (ONLY ONCE) */}
        <Route
          path="/"
          element={
            <MainLayout>
              <Hero />
              <About />
              <Skills />
              <Experience />
              <Projects />
              <Tools />
              <Thoughts />
              <Contact />
              <Footer />
            </MainLayout>
          }
        />
        {/* ✅ BLOG PAGES */}
        <Route path="/blogs/automation-mindset" element={<Blog1 />} />
        <Route path="/blogs/flaky-tests" element={<Blog2 />} />
        <Route path="/blogs/team-responsibility" element={<Blog3 />} />
        <Route path="/blogs/api-testing" element={<Blog4 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;