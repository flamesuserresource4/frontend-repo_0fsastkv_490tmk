import { useEffect } from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Showcase from './components/Showcase';
import ContactFooter from './components/ContactFooter';

export default function App() {
  // Smooth scroll behavior
  useEffect(() => {
    if ('scrollBehavior' in document.documentElement.style) return;
    // fallback for old browsers
    const handleLink = (e) => {
      const anchor = e.target.closest('a[href^="#"]');
      if (!anchor) return;
      e.preventDefault();
      const id = anchor.getAttribute('href').slice(1);
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    };
    document.addEventListener('click', handleLink);
    return () => document.removeEventListener('click', handleLink);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white font-sans">
      <Hero />
      <About />
      <Showcase />
      <ContactFooter />
    </div>
  );
}
