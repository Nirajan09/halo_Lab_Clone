import React, { useRef, useEffect, useState } from 'react';
export default function ScrollFadeInSection({ children, onVisible }) {
  const [isVisible, setVisible] = useState(false);
  const domRef = useRef();

  useEffect(() => {
    const observer = new window.IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(entry.target);
          if (onVisible) onVisible(); // Notify parent!
        }
      });
    });
    observer.observe(domRef.current);
    return () => observer.disconnect();
  }, [onVisible]);

  return (
    <div
      ref={domRef}
      className={`fade-in-section ${isVisible ? 'is-visible' : ''}`}
    >
      {children}
    </div>
  );
}
