'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function HideDefaultHeader() {
  const pathname = usePathname();
  const isOutlookAICopilotPage = pathname === '/products/outlook-ai-copilot';

  useEffect(() => {
    // Find the default header
    const defaultHeader = document.querySelector('header:not([data-custom="outlook-ai-copilot"])');
    
    if (defaultHeader && isOutlookAICopilotPage) {
      // Hide the default header on AI Lawyer page
      defaultHeader.style.display = 'none';
    }

    return () => {
      // Show the default header when navigating away
      if (defaultHeader) {
        defaultHeader.style.display = '';
      }
    };
  }, [isOutlookAICopilotPage]);

  // This component doesn't render anything
  return null;
}
