// app/components/Navigation.js
'use client';
import { useState, useEffect } from 'react';

export default function Navigation() {
  const [activeSection, setActiveSection] = useState('skills');
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    
    const handleScroll = () => {
      const sections = ['skills', 'education', 'experience'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const height = element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  };

  if (!isClient) {
    return (
      <nav className="navbar">
        <div className="nav-container">
          <div className="nav-links">
            {['skills', 'education', 'experience'].map(section => (
              <button
                key={section}
                className="nav-link"
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </button>
            ))}
          </div>
        </div>
      </nav>
    );
  }

  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="nav-links">
          {['skills', 'education', 'experience'].map(section => (
            <button
              key={section}
              className={`nav-link ${activeSection === section ? 'active' : ''}`}
              onClick={() => scrollToSection(section)}
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
}