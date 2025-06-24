'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function HideDefaultHeader() {
  const pathname = usePathname();
  const isAllInOneCRMPage = pathname === '/products/all-in-one-crm';

  useEffect(() => {
    // Find the default header
    const defaultHeader = document.querySelector('header:not([data-custom="all-in-one-crm"])');
    
    if (defaultHeader && isAllInOneCRMPage) {
      // Hide the default header on AI Lawyer page
      defaultHeader.style.display = 'none';
    }

    return () => {
      // Show the default header when navigating away
      if (defaultHeader) {
        defaultHeader.style.display = '';
      }
    };
  }, [isAllInOneCRMPage]);

  // This component doesn't render anything
  return null;
}
