// app/components/SocialLinks.js
'use client';

export default function SocialLinks() {
  const handleResumeDownload = () => {
    // This would typically download your actual resume file
    const link = document.createElement('a');
    link.href = '/resume.pdf';
    link.download = 'Le Tezz_Khan_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="social-section">
      <div className="resume-section">
        <button className="btn resume-btn" onClick={handleResumeDownload}>
          Download Resume
        </button>
      </div>
      
      <div className="social-links">
        <a href="https://www.linkedin.com/in/letezz-khan-722397159/" className="social-icon" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-linkedin"></i>
        </a>
        <a href="https://github.com/Tessie27" className="social-icon" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-github"></i>
        </a>
      </div>
    </div>
  );
}