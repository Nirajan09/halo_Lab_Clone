import React, { useRef, useEffect, useState } from 'react';

export default function ScrollFadeInSection({ children, onVisible }) {
  const [isVisible, setVisible] = useState(false);
  const domRef = useRef(null);

  useEffect(() => {
    const current = domRef.current;
    if (!current) return;

    const observer = new IntersectionObserver((entries, observerInstance) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setVisible(true);
          observerInstance.unobserve(entry.target);
          if (onVisible) onVisible();
        }
      });
    });

    observer.observe(current);

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
