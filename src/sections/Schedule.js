// File: src/sections/Schedule.js
import React from "react";
import "./Schedule.css"; // new CSS file

export default function Schedule() {
  return (
    <section className="schedule-section flex flex-col justify-center text-center px-6 py-20">
      <div className="content max-w-5xl mx-auto p-8">
        <h2 className="text-4xl md:text-5xl font-calisto mb-6">Wedding Day Program</h2><br/><br/>
        <p className="text-hours text-hours-md font-dubai-reg">
        <strong>— 14:00 —</strong><br/>Church Ceremony<br/><br/>
        </p>
        <p className="text-transport text-transport-md font-dubai-reg">
        * Transportation to Reception Venue will be provided<br/><br/><br/>
        </p>
        <p className="text-hours text-hours-md font-dubai-reg">
        <strong>— 17:00 —</strong> <br/>Cocktail Hour<br/><br/><br/>
        <strong>— 18:00 —</strong> <br/>Dinner<br/><br/><br/>
        <strong>— 20:00 —</strong> <br/>Party
      </p>
      </div>
    </section>
  );
}


/*
export default function Schedule() {
  return (
    <section className="schedule-section flex flex-col items-center justify-center text-center px-6 py-20">
      <div className="bg-overlay max-w-3xl p-8 rounded-xl">
        <h2 className="text-4xl md:text-5xl font-serif mb-6">Wedding Day Program</h2>
        <p className="text-lg md:text-xl leading-relaxed font-serif">
        <li><strong>14:30:</strong> Ceremony: Cebu Metropolitan Church</li>
        <li><strong>17:00:</strong> Reception: Chateau by the Sea mactan</li>
        <li><strong>18:00:</strong> Dinner</li>
        <li><strong>20:00:</strong> Party</li>
      </p>
      </div>
    </section>
  );
}
*/