import React from 'react';

const TravelGuide = () => {
  return (
    <section id="travel" className="page-section py-8 px-4">
      <h2 className="text-3xl font-bold mb-4 text-center">What to Do & Where to Stay</h2>
      <p className="max-w-2xl mx-auto text-center mb-6">
        ✈️ Coming from Spain? You're in for a tropical adventure! Here's everything you need to know to make the most of your trip to the Philippines — especially around the wedding in Cebu City on <strong>May 1st, 2026</strong>.
      </p>

      <div className="max-w-3xl mx-auto space-y-6">

        <div>
          <h3 className="text-xl font-semibold mb-2">📍 When to Arrive</h3>
          <p>We recommend flying in by <strong>April 27 or 28</strong> so you have time to rest, enjoy the sun, and maybe explore before the big day!</p>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-2">🛫 How to Get Here</h3>
          <p>
            The most direct way from Spain is to fly to <strong>Manila (MNL)</strong> or <strong>Singapore (SIN)</strong>, then catch a connecting flight to <strong>Cebu (CEB – Mactan-Cebu International Airport)</strong>.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-2">🏨 Where to Stay</h3>
          <p>
            We'd suggest booking somewhere near <strong>Cebu City</strong> or <strong>Mactan Island</strong>. There are plenty of hotels, resorts, and Airbnbs to fit every style and budget.
          </p>
          <ul className="list-disc list-inside mt-2">
            <li><strong>Mid-range:</strong> Seda Ayala Center, Bai Hotel, Citadines</li>
            <li><strong>Luxury:</strong> Shangri-La Mactan, Crimson Resort, Radisson Blu</li>
            <li><strong>Airbnb:</strong> Tons of cute condos and beach-side units</li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-2">🌴 Things to Do (Before or After)</h3>
          <ul className="list-disc list-inside mt-2">
            <li>🏖️ Island hopping to <strong>Nalusuan</strong>, <strong>Caohagan</strong>, or <strong>Pandanon</strong></li>
            <li>🧗‍♂️ Go whale shark watching (Oslob), or canyoneering (Moalboal)</li>
            <li>⛪ Visit historical sites like Magellan’s Cross & Fort San Pedro</li>
            <li>🍜 Explore local food — try lechon, halo-halo, mango float!</li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-2">📅 Sample Itinerary</h3>
          <ul className="list-disc list-inside mt-2">
            <li><strong>April 27–29:</strong> Chill, explore Cebu City, eat local</li>
            <li><strong>April 30:</strong> Pre-wedding dinner (if we organize one 😉)</li>
            <li><strong>May 1:</strong> 💒 Wedding Day!</li>
            <li><strong>May 2–3:</strong> Beach trip, souvenir hunting, or do nothing at all</li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-2">💬 Any Questions?</h3>
          <p>Just ask us! We’re happy to help you make the most out of your Philippines adventure.</p>
        </div>
      </div>
    </section>
  );
};

export default TravelGuide;
