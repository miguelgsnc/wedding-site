import React from 'react';
import "./TravelGuide.css";
const TravelGuide = () => {
  return (
    <section
      id="travel"
      className="travel-section flex flex-col justify-center text-center px-6 py-20"
    >
      <div className="content max-w-5xl mx-auto p-8">
        <h2 className="text-4xl md:text-5xl font-calisto mb-10">Recommendations</h2>
      <p className="max-w-2xl mx-auto text-center font-dubai-reg mb-6">
        Here's everything you need to know to make the most of your trip around Cebu City.
      </p>

      <div className="max-w-3xl mx-auto space-y-6">

        

        <div>
          <h3 className="text-2xl font-dubai-reg mb-2">Hotels/Accommodations</h3>
          <p className="max-w-2xl mx-auto text-cente font-dubai-reg mb-6">
            We'd suggest booking somewhere near <strong>Cebu City</strong> or <strong>Mactan Island</strong>. There are plenty of hotels, resorts, and Airbnbs to fit every style and budget.
          </p>
          <ul className="list-disc list-inside font-dubai-reg mt-2">
            <li><strong>Mid-range:</strong> BE Resort Mactan, Bluewater Maribago Beach Resort, Costabella Tropical Beach Hotel, etc.</li>
            <li><strong>Luxury:</strong> Shangri-La Mactan, Crimson Resort, Dusit Thani</li>
            <li><strong>Airbnb:</strong> Tons of cute condos and beach-side units</li>
          </ul>
        </div>

        <div>
          <h3 className="text-2xl font-dubai-reg mb-2">Touristic Activities</h3>
          <ul className="list-disc list-inside font-dubai-reg mt-2">
            <li> Island hopping to <strong>Nalusuan</strong>, <strong>Caohagan</strong>, or <strong>Pandanon</strong></li>
            <li> Go whale shark watching (Oslob), or canyoneering (Moalboal)</li>
            <li> Visit historical sites like Magallanes’ Cross & Fort San Pedro</li>
            <li> Explore local food — try lechon, STK and tuslob buwa!</li>
          </ul>
        </div>

        <div>
          <h3 className="text-2xl font-dubai-reg mb-2">Things to Consider</h3>
            <ul className="list-disc list-inside font-dubai-reg mt-2">
              <li><strong>Transportation.</strong> Download the Grab App or book a rental car via to move around. Traffic can be busy. </li>
              <li><strong>Cash is key in the Philippines.</strong> Make sure to always have cash as some places do not accept card payments.</li>
              <li><strong>Pack mosquito repellant & sun cream.</strong> It will be summer weather in the Philippines when temperature is hot and humid.</li>
              <li><strong>Get an e-sim when you arrive.</strong> We suggest getting one with the GlobeOne App online. </li>
              <li><strong>Book a travel insurance.</strong> We hope that you don't have to use it, but better to be ready. </li>
            </ul>
        </div>

        <div>
          <h3 className="text-2xl font-dubai-reg mb-2">💬 Any Questions?</h3>
          <p className="font-dubai-reg mb-2">Just ask us! We’re happy to help you make the most out of your Philippines adventure.</p>
        </div>
      </div>
      </div>
    </section>
  );
};

export default TravelGuide;


/*
          <ul className="list-disc list-inside font-dubai-reg mt-2">
            <li><strong>Transportation:</strong> Download the Grab App or book a car rental to move around. Traffic can be busy. </li>
            <li><strong>Cash is key in the Philippines.</strong> Make sure to always have cash as some places do not accept card payments.</li>
            <li><strong>Pack mosquito repellant & sun cream.</strong> It will be summer weather in the Philippines when temperature is hot and humid.</li>
            <li><strong>Get an e-sim when you arrive.</strong> We suggest getting one with the GlobeOne App online. </li>
            <li><strong>Book a travel insurance.</strong> We hope that you don't have to use it, but better to be ready. </li>
          </ul>
*/