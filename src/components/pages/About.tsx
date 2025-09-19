import React from 'react';

const About: React.FC = () => {
  return (
    <div className="min-h-screen p-8">
      <h1 className="text-4xl font-bold text-center mb-8">About Us</h1>
      <div className="max-w-2xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="p-6">
          <p className="text-gray-700 mb-4">
            We are a dedicated team focused on creating amazing web applications using 
            the latest technologies like React, Vite, and Tailwind CSS.
          </p>
          <p className="text-gray-700 mb-4">
            Our mission is to deliver high-quality, performant, and user-friendly
            applications that solve real-world problems.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About; 