import { useEffect } from 'react';

interface BannerAdProps {
  className?: string;
}

const BannerAd = ({ className = '' }: BannerAdProps) => {
  useEffect(() => {
    // Banner Ad Configuration
    (window as any).atOptions = {
      'key': '434ce64f269e1eb13bd566a25bf782a5',
      'format': 'iframe',
      'height': 90,
      'width': 728,
      'params': {}
    };

    // Banner Ad Script
    const script = document.createElement('script');
    script.src = 'https://www.highperformanceformat.com/434ce64f269e1eb13bd566a25bf782a5/invoke.js';
    script.async = true;

    const container = document.getElementById('banner-ad-container');
    if (container) {
      container.appendChild(script);
    }

    return () => {
      // Cleanup
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
  }, []);

  return (
    <div className={`my-6 flex justify-center overflow-x-auto ${className}`}>
      <div id="banner-ad-container" className="min-w-[728px] h-[90px]">
        {/* Banner ad loads here */}
      </div>
    </div>
  );
};

export default BannerAd;
