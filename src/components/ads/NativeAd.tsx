import { useEffect } from 'react';

const NativeAd = () => {
  useEffect(() => {
    // Native Ad Script
    const script = document.createElement('script');
    script.src = 'https://pl28680604.effectivegatecpm.com/c1a690d6abda3d5eec6a20f85fb32f6e/invoke.js';
    script.async = true;
    script.setAttribute('data-cfasync', 'false');
    document.body.appendChild(script);

    return () => {
      // Cleanup
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
  }, []);

  return (
    <div className="my-6 flex justify-center">
      <div id="container-c1a690d6abda3d5eec6a20f85fb32f6e" className="w-full max-w-4xl"></div>
    </div>
  );
};

export default NativeAd;
