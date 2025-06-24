'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function HideDefaultHeader() {
  const pathname = usePathname();
  const transparentHeaderPages = [
    '/products/ai-lawyers',
    '/services/oracle-ai', // Add Oracle AI page path here
    '/services/services-now-ai', // Add ServiceNow AI page path here
    '/services/cybersecurity', // Add Cybersecurity page path here
    '/services/odc', // Add AI Automation page path here
    '/services/manage-services', // Add Managed Services page path here
    '/services/digital-transformation-services', // Add Digital Transformation page path here
    '/services/generative-ai', // Add Generative AI page path here
    '/services/ecommerce-services', // Add AI Automation page path here
    '/services/adobe-commerce-solution', // Add AI Automation page path here
    '/services/magento-open-source', // Add ODC and Managed Services page path here
    '/services/big-commerce', // Add ODC and Managed Services page path here
    '/services/shopify', // Add ODC Services page path here

    '/products/ai-talent-acquisition',
    '/products/helix-ai-pharma',
    '/products/track-nexus',    
    '/services/oracle-ai' // Add Oracle AI page path here
  ];
  const shouldHideDefaultHeader = transparentHeaderPages.includes(pathname);

  useEffect(() => {
    // Find the default header
    const defaultHeader = document.querySelector('header:not([data-custom="transparent-header"])');
    
    if (defaultHeader && shouldHideDefaultHeader) {
      // Hide the default header on pages that use transparent header
      defaultHeader.style.display = 'none';
    }

    return () => {
      // Show the default header when navigating away
      if (defaultHeader) {
        defaultHeader.style.display = '';
      }
    };
  }, [shouldHideDefaultHeader]);

  // This component doesn't render anything
  return null;
}
