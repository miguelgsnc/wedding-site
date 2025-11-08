// File: src/sections/Location.js
import React from "react";
import "./Location.css";

export default function Location() {
  return (
    <section
      id="location"
      className="location-section flex flex-col justify-center text-center px-6 py-20"
    >
      <div className="content max-w-5xl mx-auto p-8">
        <h2 className="text-4xl md:text-5xl font-calisto mb-10">Locations</h2>

        {/* Ceremony */}
        <div className="location-item mb-12">
          <div className="map-container">
            <iframe
              title="Cebu Metropolitan Cathedral"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.723178465512!2d123.9004149!3d10.2955818!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33a99be1f30d6595%3A0x8f77289aca9e9b7a!2sCebu%20Metropolitan%20Cathedral!5e0!3m2!1sen!2sph!4v1723059501472!5m2!1sen!2sph"
              width="100%"
              height="220"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
          <div className="location-info">
            <h3 className="text-2xl font-dubai-reg mb-1">Church Ceremony</h3>
            <p className="text-lg font-dubai">
              Cebu Metropolitan Cathedral <br/>Cebu City
            </p>
          </div>
        </div>

        {/* Reception */}
        <div className="location-item">
          <div className="map-container">
            <iframe
              title="Chateau By The Sea"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.4075285804896!2d124.0241142!3d10.3149645!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33a996fbc439eacf%3A0x50139eb7406ef6c6!2sChateau%20By%20The%20Sea!5e0!3m2!1sen!2sph!4v1723056934450!5m2!1sen!2sph"
              width="100%"
              height="220"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
          <div className="location-info">
            <h3 className="text-2xl font-dubai-reg mb-1">Reception</h3>
            <p className="text-lg font-dubai">
              Chateau By The Sea,<br/>Mactan Island
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
