// app/components/ClientWrapper.js
'use client';
import { useState, useEffect } from 'react';

export default function ClientWrapper({ children }) {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return <div style={{ visibility: 'hidden' }}>{children}</div>;
  }

  return <>{children}</>;
}