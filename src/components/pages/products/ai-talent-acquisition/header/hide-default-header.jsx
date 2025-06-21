'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function HideDefaultHeader() {
  const pathname = usePathname();
  const isAITalentAcquisition = pathname === '/products/ai-talent-acquisition';

  useEffect(() => {
    // Find the default header
    const defaultHeader = document.querySelector('header:not([data-custom="ai-talent-acquisition"])');
    
    if (defaultHeader && isAITalentAcquisition) {
      // Hide the default header on AI Lawyer page
      defaultHeader.style.display = 'none';
    }

    return () => {
      // Show the default header when navigating away
      if (defaultHeader) {
        defaultHeader.style.display = '';
      }
    };
  }, [isAITalentAcquisition]);

  // This component doesn't render anything
  return null;
}
