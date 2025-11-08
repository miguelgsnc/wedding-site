// File: src/sections/WelcomeSection.js
import React from "react";
import "./WelcomeSection.css";

export default function WelcomeSection() {
  return (
    // 'items-center' (vertical centering) will be overridden by CSS
    <section className="welcome-section flex items-center justify-center text-center px-6">
      <div className="welcome-content"> 
        {/* Replace text-6xl md:text-7xl with custom classes */}
        <h1 className="text-couple-name text-couple-name-md font-serif tracking-wide">
          Miguel
        </h1>
        <h1 className="text-couple-name-and text-couple-name-and-md font-serif tracking-wide">
          &
        </h1>
        <h1 className="text-couple-name text-couple-name-md font-serif mb-1 tracking-wide">
          Tiza
        </h1>
        
        {/* Replace text-xl md:text-2xl with custom classes */}
        <p className="text-tagline text-tagline-md mb-1 font-calisto">We are getting married!</p>
        
        {/* Replace text-base md:text-lg with custom classes */}
        <p className="text-details text-details-md font-dubai">1 May 2026</p>
        <p className="text-details text-details-md font-dubai">Cebu City, Philippines</p>
      </div>
    </section>
  );
}
/*
import React from "react";
import "./WelcomeSection.css"; // we'll create this file for styling

export default function WelcomeSection() {
  return (
    <section className="welcome-section flex items-center justify-center text-center px-6">
      <div className="bg-overlay p-8 rounded-xl">
        <h1 className="text-5xl md:text-6xl font-serif mb-4 tracking-wide">
          Miguel & Tiza
        </h1>
        <p className="text-xl md:text-2xl mb-1">¡Nos casamos!</p>
        <p className="text-lg md:text-xl">1 May 2026</p>
        <p className="text-lg md:text-xl">Cebu City, Filipinas</p>
      </div>
    </section>
  );
}
*/