
import React, { useEffect } from 'react';

const MobileOptimizations: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  useEffect(() => {
    // Prevent zoom on input focus for iOS
    const viewport = document.querySelector('meta[name=viewport]');
    if (viewport) {
      viewport.setAttribute('content', 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no');
    }

    // Add mobile-specific CSS
    const style = document.createElement('style');
    style.textContent = `
      /* Prevent text selection on mobile */
      .mobile-no-select {
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
        -webkit-touch-callout: none;
      }

      /* Better touch targets */
      button, .btn {
        min-height: 44px;
        min-width: 44px;
      }

      /* Smooth scrolling */
      * {
        -webkit-overflow-scrolling: touch;
      }

      /* Hide scrollbars on mobile */
      @media (max-width: 768px) {
        ::-webkit-scrollbar {
          display: none;
        }
        
        * {
          scrollbar-width: none;
        }
      }
    `;
    document.head.appendChild(style);

    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return <>{children}</>;
};

export default MobileOptimizations;
