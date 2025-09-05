"use client";

import { useRouter, usePathname } from "next/navigation";
import { useEffect, useState, createContext, useContext } from "react";
import NProgress from "nprogress";

// Configure NProgress
NProgress.configure({
  showSpinner: false,
  trickleSpeed: 200,
  minimum: 0.08,
});

// Create loading context
const LoadingContext = createContext({
  isLoading: false,
  setLoading: (loading: boolean) => {},
});

export const useLoading = () => useContext(LoadingContext);

export default function LoadingProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isLoading, setIsLoading] = useState(false);
  const pathname = usePathname();

  const setLoading = (loading: boolean) => {
    setIsLoading(loading);
    if (loading) {
      NProgress.start();
    } else {
      NProgress.done();
    }
  };

  useEffect(() => {
    // Hide loading when route changes
    setLoading(false);
  }, [pathname]);

  return (
    <LoadingContext.Provider value={{ isLoading, setLoading }}>
      {children}

      {/* Custom loading styles */}
      <style jsx global>{`
        /* NProgress styles */
        #nprogress {
          pointer-events: none;
        }

        #nprogress .bar {
          background: #3b82f6;
          position: fixed;
          z-index: 9999;
          top: 0;
          left: 0;
          width: 100%;
          height: 3px;
        }

        #nprogress .peg {
          display: block;
          position: absolute;
          right: 0px;
          width: 100px;
          height: 100%;
          box-shadow: 0 0 10px #3b82f6, 0 0 5px #3b82f6;
          opacity: 1;
          transform: rotate(3deg) translate(0px, -4px);
        }

        /* Page transition overlay */
        .page-transition {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(255, 255, 255, 0.8);
          backdrop-filter: blur(2px);
          z-index: 9998;
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0;
          pointer-events: none;
          transition: opacity 0.2s ease-in-out;
        }

        .page-transition.active {
          opacity: 1;
          pointer-events: all;
        }

        /* Dark mode support */
        @media (prefers-color-scheme: dark) {
          .page-transition {
            background: rgba(0, 0, 0, 0.8);
          }
        }

        /* Spinner animation */
        .loading-spinner {
          width: 24px;
          height: 24px;
          border: 2px solid #e5e7eb;
          border-top: 2px solid #3b82f6;
          border-radius: 50%;
          animation: spin 1s linear infinite;
        }

        @keyframes spin {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
      `}</style>

      {/* Page transition overlay */}
      <div className={`page-transition ${isLoading ? "active" : ""}`}>
        <div className="loading-spinner" />
      </div>
    </LoadingContext.Provider>
  );
}
