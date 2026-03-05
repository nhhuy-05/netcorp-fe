import React from 'react';
import Hero from '../ui/Hero';
import ReadySection from '../ui/ReadySection';
import VideoSection from '../ui/VideoSection';
import WorkShowcase from '../ui/WorkShowcase';
import { bg_homepage } from '../../assets/images';

const Home: React.FC = () => {
  const backgroundStyle: React.CSSProperties = {
    backgroundColor: '#111827',
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${bg_homepage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    animation: 'fadeIn 0.6s ease-out',
  };

  const sectionStyle: React.CSSProperties = {
    scrollMarginTop: '80px'
  };

  return (
    <main className="min-h-screen pt-20 relative" style={{ backgroundColor: '#111827' }}>
      {/* Fade-in keyframe for smooth background appearance */}
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
      `}</style>
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