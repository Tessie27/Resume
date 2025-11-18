// app/components/EasterEgg.js
'use client';
import { useState } from 'react';

export default function EasterEgg() {
  const [showMessage, setShowMessage] = useState(false);

  const toggleEasterEgg = () => {
    setShowMessage(!showMessage);
    if (!showMessage) {
      setTimeout(() => setShowMessage(false), 5000);
    }
  };

  return (
    <>
      <div className="easter-egg" onClick={toggleEasterEgg}>
        <i className="fas fa-hearing-aid"></i>
      </div>

      {showMessage && (
        <div className="easter-egg-message show">
          My hearing aids stream calls and Spotify straight to my ears. Accessibility has never sounded this good.
        </div>
      )}
    </>
  );
}