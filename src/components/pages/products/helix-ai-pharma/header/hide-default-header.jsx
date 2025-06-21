'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function HideDefaultHeader() {
  const pathname = usePathname();
  const isHelixAiPharmaPage = pathname === '/products/helix-ai-pharma';

  useEffect(() => {
    // Find the default header
    const defaultHeader = document.querySelector('header:not([data-custom="helix-ai-pharma"])');
    
    if (defaultHeader && isHelixAiPharmaPage) {
      // Hide the default header on AI Lawyer page
      defaultHeader.style.display = 'none';
    }

    return () => {
      // Show the default header when navigating away
      if (defaultHeader) {
        defaultHeader.style.display = '';
      }
    };
  }, [isHelixAiPharmaPage]);

  // This component doesn't render anything
  return null;
}
