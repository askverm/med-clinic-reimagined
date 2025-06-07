
import React, { useEffect } from 'react';

const MobileOptimizations: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  useEffect(() => {
    // Prevent zoom on input focus for iOS and ensure responsive design
    const viewport = document.querySelector('meta[name=viewport]');
    if (viewport) {
      viewport.setAttribute('content', 'width=device-width, initial-scale=1.0, maximum-scale=5.0, user-scalable=yes');
    }

    // Add mobile-specific CSS for better auto-adjustable screen size
    const style = document.createElement('style');
    style.textContent = `
      /* Auto-adjustable responsive design */
      * {
        box-sizing: border-box;
      }

      /* Prevent text selection on mobile */
      .mobile-no-select {
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
        -webkit-touch-callout: none;
      }

      /* Better touch targets - minimum 44px */
      button, .btn, a {
        min-height: 44px;
        min-width: 44px;
      }

      /* Smooth scrolling with enhanced performance */
      * {
        -webkit-overflow-scrolling: touch;
      }

      html {
        scroll-behavior: smooth;
      }

      /* Auto-adjustable font sizes */
      @media (max-width: 480px) {
        html {
          font-size: 14px;
        }
      }

      @media (min-width: 481px) and (max-width: 768px) {
        html {
          font-size: 15px;
        }
      }

      @media (min-width: 769px) {
        html {
          font-size: 16px;
        }
      }

      /* Responsive images and videos */
      img, video {
        max-width: 100%;
        height: auto;
      }

      /* Auto-adjustable containers */
      .container {
        width: 100%;
        max-width: 100%;
        padding-left: 1rem;
        padding-right: 1rem;
      }

      @media (min-width: 640px) {
        .container {
          max-width: 640px;
          margin-left: auto;
          margin-right: auto;
        }
      }

      @media (min-width: 768px) {
        .container {
          max-width: 768px;
          padding-left: 1.5rem;
          padding-right: 1.5rem;
        }
      }

      @media (min-width: 1024px) {
        .container {
          max-width: 1024px;
        }
      }

      @media (min-width: 1280px) {
        .container {
          max-width: 1280px;
        }
      }

      /* Enhanced scroll animations */
      .animate-fade-in {
        animation: fadeInUp 0.8s ease-out forwards;
      }

      .animate-slide-in-up {
        animation: slideInUp 0.6s ease-out forwards;
      }

      @keyframes fadeInUp {
        from {
          opacity: 0;
          transform: translateY(30px);
        }
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }

      @keyframes slideInUp {
        from {
          opacity: 0;
          transform: translateY(40px);
        }
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }

      /* Hide scrollbars on mobile while maintaining functionality */
      @media (max-width: 768px) {
        ::-webkit-scrollbar {
          width: 3px;
        }
        
        ::-webkit-scrollbar-track {
          background: transparent;
        }
        
        ::-webkit-scrollbar-thumb {
          background: rgba(0,0,0,0.2);
          border-radius: 3px;
        }
        
        * {
          scrollbar-width: thin;
          scrollbar-color: rgba(0,0,0,0.2) transparent;
        }
      }

      /* Improved touch interactions */
      @media (hover: none) and (pointer: coarse) {
        .hover\\:scale-105:hover {
          transform: scale(1.02);
        }
        
        .hover\\:-translate-y-1:hover {
          transform: translateY(-2px);
        }
        
        .hover\\:-translate-y-2:hover {
          transform: translateY(-4px);
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
