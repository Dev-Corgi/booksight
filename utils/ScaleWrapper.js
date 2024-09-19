"use client";

import React, { useState, useEffect } from 'react';
import { Suspense } from 'react';

export function ScaleWrapper({ className, children }) {
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const updateScale = () => {
      const vw = window.innerWidth;
      // Example scale calculation
      const newScale = vw / 1440;
      setScale(newScale);
    };

    updateScale();
    window.addEventListener("resize", updateScale);
    return () => window.removeEventListener("resize", updateScale);
  }, []);

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div
        className={className}
        style={{
          transform: `scale(${scale})`,
        }}
      >
        {children}
      </div>
    </Suspense>
  );
}
