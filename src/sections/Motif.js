import React from 'react';
import sampleMaleColors from '../images/sample_male_suit.jpg';
import sampleFemaleColors from '../images/sample_women_dress.jpg';
import './Motif.css';

const Motif = () => {
  const swatchStyle = (color) => ({
    backgroundColor: color,
    width: '40px',
    height: '40px',
    borderRadius: '50%',
    margin: '0 10px',
    border: '1px solid #ccc',
  });

  const swatchContainer = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap: 'wrap',
    marginBottom: '1.5rem',
  };

  const labelStyle = {
    textAlign: 'center',
    fontSize: '0.8rem',
    marginTop: '4px',
  };

  const sectionStyle = {
    maxWidth: '800px',
    margin: '0 auto',
    padding: '2rem',
    textAlign: 'center',
  };

  const attireStyle = {
    display: 'flex',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
    gap: '2rem',
    font: 'dubai',
  };

  const attireBox = {
    flex: '1 1 300px',
    padding: '1rem',
    border: '1px solid #eee',
    borderRadius: '8px',
    backgroundColor: '#f9f9f9',
  };

  const imageStyle = {
    marginTop: '1rem',
    display: 'block',
    width: 'auto',//'100%',
    maxWidth: '300px',
    borderRadius: '8px',
  };

  const colors = [
    { name: 'Light Brown', code: '#D2B48C' },
    { name: 'Gold', code: '#b4975a' },
    { name: 'Brown', code: '#9f5736ff' },
    { name: 'Dark Brown', code: '#5C4033' },
    { name: 'Green', code: '#9CAF88' },
  ];

  return (
    <section id="motif" className="motif-section"> 
      <div className="content" style={sectionStyle}> 
        {/* Motif Title: font-calisto */}
        <h2 className="text-4xl md:text-5xl font-calisto mb-4 text-center">Dress Code</h2>

        {/* Motif Colors Subtitle: font-dubai-reg */}
        <h3 className="text-xl font-dubai-reg mb-2">Motif Colors</h3>
        <div style={swatchContainer}>
          {colors.map((color) => (
            <div key={color.name} style={{ textAlign: 'center', margin: '0 8px'}}>
              <div style={swatchStyle(color.code)} title={color.name}></div>
              {/* Color Names: font-dubai (example) */}
              <div style={labelStyle} className="font-dubai">{color.name}</div>
            </div>
          ))}
        </div>

        <div style={attireStyle}>
          <div style={attireBox}>
            {/* Gentleman Title: font-dubai-reg (example) */}
            <h3 className="font-dubai"><strong>For the Gentlemen</strong></h3>
            {/* Description: font-dubai (example) */}
            <p className="font-dubai">
              Come in dark suits and formal shoes. Ties are optional.
            </p>
            <img src={sampleMaleColors} alt="Sample male attire colors" style={imageStyle}  />
          </div>

          <div style={attireBox}>
            {/* Ladies Title: font-dubai-reg (example) */}
            <h3 className="font-dubai"><strong>For the Ladies</strong></h3>
            {/* Description: font-dubai (example) */}
            <p className="font-dubai">
              Wear your finest long dresses in shades of brown, gold, or green. 

Heels are great, but consider block or wedge instead of stilletos for the reception.            </p>
            <img src={sampleFemaleColors} alt="Sample women attire colors" style={imageStyle}  />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Motif;
