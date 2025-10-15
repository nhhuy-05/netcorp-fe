import React from 'react';
import Hero from '../ui/Hero';
import ReadySection from '../ui/ReadySection';
import VideoSection from '../ui/VideoSection';
import WorkShowcase from '../ui/WorkShowcase';
import { bg_homepage } from '../../assets/images';

const Home: React.FC = () => {
  return (
    <main className="min-h-screen pt-20 relative">
      {/* Dark overlay background */}
      <div
        className="fixed inset-0 z-0 pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${bg_homepage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      />

      {/* Content */}
      <div className="relative z-10">
        <Hero />
        <div
          id="ready"
          // only use scrollMarginTop so scrollIntoView positions the section below the fixed navbar
          style={{
            scrollMarginTop: '80px' // adjust this to match your navbar height if needed
          }}
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