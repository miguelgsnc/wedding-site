// File: src/sections/WelcomeSection.js
import React from "react";

export default function WelcomeSection() {
  return (
    <section className="min-h-screen bg-pink-100 flex items-center justify-center text-center px-6">
      <div>
        <h1 className="text-5xl font-serif mb-4">Miguel & Tiza</h1>
        <p className="text-lg">We are getting married!</p>
        <p className="text-lg">You are invited!</p>
      </div>
    </section>
  );
}