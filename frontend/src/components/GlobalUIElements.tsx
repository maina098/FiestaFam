"use client";
import React from 'react';
import { usePathname } from 'next/navigation';

export default function GlobalUIElements() {
  const pathname = usePathname();
  
  if (pathname?.startsWith('/admin') || pathname?.startsWith('/staff') || pathname?.startsWith('/customer') || pathname?.startsWith('/client')) {
    return null;
  }

  return (
    <>
      {/* cursor */}
      <div className="tf-mouse tf-mouse-outer"></div>
      <div className="tf-mouse tf-mouse-inner"></div>

      {/* go top button */}
      <div className="progress-wrap active-progress">
          <svg className="progress-circle svg-content" width="100%" height="100%" viewBox="-1 -1 102 102">
          <path d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98" style={{ transition: 'stroke-dashoffset 10ms linear 0s', strokeDasharray: '307.919, 307.919', strokeDashoffset: '286.138' }}></path>
          </svg>
      </div>
    </>
  );
}
