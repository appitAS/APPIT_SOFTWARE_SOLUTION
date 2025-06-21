'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function HideDefaultHeader() {
  const pathname = usePathname();
  const isTrackNexusPage = pathname === '/products/track-nexus';

  useEffect(() => {
    // Find the default header
    const defaultHeader = document.querySelector('header:not([data-custom="track-nexus"])');
    
    if (defaultHeader && isTrackNexusPage) {
      // Hide the default header on AI Lawyer page
      defaultHeader.style.display = 'none';
    }

    return () => {
      // Show the default header when navigating away
      if (defaultHeader) {
        defaultHeader.style.display = '';
      }
    };
  }, [isTrackNexusPage]);

  // This component doesn't render anything
  return null;
}
