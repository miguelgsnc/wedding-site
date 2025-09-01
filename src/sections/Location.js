import React from 'react';

const Location = () => {
  const wrapperStyle = {
    maxWidth: '1000px',
    margin: '0 auto',
    textAlign: 'center',
  };

  const locationItemStyle = {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: '2rem',
    marginBottom: '3rem',
    alignItems: 'center',
    justifyContent: 'center',
  };

  const mapStyle = {
    flex: '2',
    minWidth: '280px',
    maxWidth: '500px',
  };

  const infoStyle = {
    flex: '1',
    minWidth: '200px',
  };

  return (
    <section id="location" className="page-section" style={{ padding: '2rem' }}>
      <div style={wrapperStyle}>
        <h2 className="text-3xl font-bold mb-4 text-center">Location</h2>

        {/* Ceremony */}
        <div style={locationItemStyle}>
          <div style={mapStyle}>
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
          <div style={infoStyle}>
            <h3>Ceremony</h3>
            <p><strong>Cebu Metropolitan Cathedral</strong></p>
          </div>
        </div>

        {/* Reception */}
        <div style={locationItemStyle}>
          <div style={mapStyle}>
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
          <div style={infoStyle}>
            <h3>Reception</h3>
            <p><strong>Chateau By The Sea</strong></p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;
