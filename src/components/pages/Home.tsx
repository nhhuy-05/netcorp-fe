import React, { useState, useEffect } from 'react';
import Hero from '../ui/Hero';
import ReadySection from '../ui/ReadySection';
import VideoSection from '../ui/VideoSection';
import WorkShowcase from '../ui/WorkShowcase';
import { bg_homepage } from '../../assets/images';

const Home: React.FC = () => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [lowQualityUrl, setLowQualityUrl] = useState('');

  // Create a low-quality placeholder by scaling down the original image
  useEffect(() => {
    // Create tiny placeholder version
    const img = new Image();
    img.onload = () => {
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');
      const maxSize = 40; // Small size for LQIP
      
      const ratio = Math.min(maxSize / img.width, maxSize / img.height);
      canvas.width = img.width * ratio;
      canvas.height = img.height * ratio;
      
      if (ctx) {
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
        setLowQualityUrl(canvas.toDataURL('image/jpeg', 0.3));
      }
    };
    img.src = bg_homepage;
  }, []); // Remove bg_homepage from dependency array as it's a static import

  // Preload the main image and update state when loaded
  useEffect(() => {
    const img = new Image();
    img.onload = () => setImageLoaded(true);
    img.src = bg_homepage;
  }, []); // Remove bg_homepage from dependency array as it's a static import

  // Construct background style based on loading state
  const backgroundStyle: React.CSSProperties = {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${imageLoaded ? bg_homepage : lowQualityUrl})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    transition: 'background-image 0.5s ease-in-out',
    filter: imageLoaded ? 'none' : 'blur(10px)'
  };

  const sectionStyle: React.CSSProperties = {
    scrollMarginTop: '80px'
  };

  return (
    <main className="min-h-screen pt-20 relative">
      {/* Dark overlay background */}
      <div
        className="fixed inset-0 z-0 pointer-events-none"
        style={backgroundStyle}
      />

      {/* Content */}
      <div className="relative z-10">
        <Hero />
        <div
          id="ready"
          // only use scrollMarginTop so scrollIntoView positions the section below the fixed navbar
          style={sectionStyle}
        >
          <ReadySection />
        </div>
        <VideoSection />
        <WorkShowcase />
      </div>
    </main>
  );
};

export default Home;