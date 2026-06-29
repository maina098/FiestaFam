'use client';
import { useEffect, useRef } from 'react';

export default function ScriptLoader() {
  const loaded = useRef(false);

  useEffect(() => {
    if (loaded.current) return;
    loaded.current = true;

    const scripts = [
      "/assets/js/jquery.min.js",
      "/assets/js/bootstrap.min.js",
      "/assets/js/swiper-bundle.min.js",
      "/assets/js/swiper.js",
      "/assets/js/map.min.js",
      "/assets/js/map.js",
      "/assets/js/countto.js",
      "/assets/js/count-down.js",
      "/assets/js/nouislider.min.js",
      "/assets/js/magnific-popup.min.js",
      "/assets/js/wow.min.js",
      "/assets/js/main.js"
    ];

    const loadScript = (index: number) => {
      if (index >= scripts.length) return;
      const script = document.createElement('script');
      script.src = scripts[index];
      script.async = false; // ensure sequential execution just in case
      script.onload = () => loadScript(index + 1);
      document.body.appendChild(script);
    };

    loadScript(0);
  }, []);

  return null;
}
