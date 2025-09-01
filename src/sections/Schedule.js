// File: src/sections/Schedule.js
import React from "react";

export default function Schedule() {
  return (
    <section className="py-16 px-6 bg-gray-100">
      <h2 className="text-3xl font-bold mb-4 text-center">Wedding Day Program</h2>
      <ul className="max-w-xl mx-auto space-y-2">
        <li><strong>14:30:</strong> Ceremony: Cebu Metropolitan Church</li>
        <li><strong>17:00:</strong> Reception: Chateau by the Sea mactan</li>
        <li><strong>18:00:</strong> Dinner</li>
        <li><strong>20:00:</strong> Party</li>
      </ul>
    </section>
  );
}