import React, { useEffect, useState } from 'react';
import { THEME } from '../theme.js';
import { StatusBar } from './StatusBar.jsx';
import { BottomNav } from './BottomNav.jsx';

function useIsMobileViewport() {
  const [isMobile, setIsMobile] = useState(() =>
    typeof window !== 'undefined' ? window.innerWidth <= 500 : false
  );
  useEffect(() => {
    const onResize = () => setIsMobile(window.innerWidth <= 500);
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);
  return isMobile;
}

export function Phone({ children, showNav = true, active, onNav, bg = THEME.bg }) {
  const isMobile = useIsMobileViewport();

  // Full-screen mode for real mobile devices
  if (isMobile) {
    return (
      <div
        style={{
          position: 'relative',
          minHeight: '100vh',
          width: '100%',
          background: bg,
          color: THEME.text,
          fontFamily: THEME.display,
        }}
      >
        <div
          style={{
            minHeight: '100vh',
            paddingTop: 'env(safe-area-inset-top)',
            paddingBottom: showNav
              ? 'calc(96px + env(safe-area-inset-bottom))'
              : 'env(safe-area-inset-bottom)',
          }}
        >
          {children}
        </div>
        {showNav && <BottomNav active={active} onNav={onNav} fixed />}
      </div>
    );
  }

  // Desktop: phone mockup with bezel
  return (
    <div
      style={{
        width: 390,
        height: 844,
        borderRadius: 48,
        overflow: 'hidden',
        position: 'relative',
        background: bg,
        boxShadow:
          '0 40px 100px rgba(139,111,212,0.18), 0 20px 60px rgba(0,0,0,0.35), 0 0 0 10px #0b0b0b, 0 0 0 11px #1f1f1f',
        fontFamily: THEME.display,
        maxWidth: '100vw',
        maxHeight: '100vh',
      }}
    >
      {/* dynamic island */}
      <div
        style={{
          position: 'absolute',
          top: 11,
          left: '50%',
          transform: 'translateX(-50%)',
          width: 118,
          height: 34,
          borderRadius: 20,
          background: '#000',
          zIndex: 50,
        }}
      />
      <StatusBar />
      <div
        style={{
          position: 'absolute',
          inset: 0,
          paddingTop: 54,
          paddingBottom: showNav ? 96 : 0,
          overflow: 'auto',
          scrollbarWidth: 'none',
        }}
      >
        {children}
      </div>
      {showNav && <BottomNav active={active} onNav={onNav} />}
    </div>
  );
}
