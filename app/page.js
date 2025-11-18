// app/page.js
import Navigation from './components/Navigation';
import Header from './components/Header';
import Skills from './components/Skills';
import Education from './components/Education';
import Experience from './components/Experience';
import SocialLinks from './components/SocialLinks';
import EasterEgg from './components/EasterEgg';
import ClientWrapper from './components/ClientWrapper';

export default function Home() {
  return (
    <main>
      <ClientWrapper>
        <Navigation />
        <EasterEgg />
      </ClientWrapper>
      
      <Header />
      
      <div className="container">
        <div className="main-content">
          <Skills />
          <Education />
          <Experience />
          <SocialLinks />
        </div>
      </div>

      <footer className="footer">
        <div className="container">
          <p>&copy; 2025 Le Tezz Khan. All rights reserved. Built with Next.js and accessibility in mind.</p>
        </div>
      </footer>
    </main>
  );
}