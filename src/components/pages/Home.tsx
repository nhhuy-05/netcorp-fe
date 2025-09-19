import React from 'react';
import Hero from '../ui/Hero';
import ReadySection from '../ui/ReadySection';
import VideoSection from '../ui/VideoSection';
import WorkShowcase from '../ui/WorkShowcase';

const Home: React.FC = () => {
  return (
    <main className="min-h-screen pt-20 relative">
      {/* Dark overlay background */}
      <div 
        className="fixed inset-0 z-0 pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('https://images.unsplash.com/photo-1497215728101-856f4ea42174?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      />

      {/* Content */}
      <div className="relative z-10">
        <Hero />
        <ReadySection />
        <VideoSection />
        <WorkShowcase />
      </div>
    </main>
  );
};

export default Home; 