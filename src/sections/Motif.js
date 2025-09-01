import React from 'react';

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
  };

  const attireBox = {
    flex: '1 1 300px',
    padding: '1rem',
    border: '1px solid #eee',
    borderRadius: '8px',
    backgroundColor: '#f9f9f9',
  };

  const colors = [
    { name: 'Light Brown', code: '#D2B48C' },
    { name: 'Medium Brown', code: '#A0522D' },
    { name: 'Dark Brown', code: '#5C4033' },
    { name: 'Green', code: '#3E885B' },
    { name: 'Gold', code: '#b4975a' },
  ];

  return (
    <section id="motif" className="page-section">
      <div style={sectionStyle}>
        <h2 className="text-3xl font-bold mb-4 text-center">Motif</h2>

        <h3 className="text-xl font-semibold mb-2">Motif Colors</h3>
        <div style={swatchContainer}>
          {colors.map((color) => (
            <div key={color.name} style={{ textAlign: 'center', margin: '0 8px' }}>
              <div style={swatchStyle(color.code)} title={color.name}></div>
              <div style={labelStyle}>{color.name}</div>
            </div>
          ))}
        </div>

        <div style={attireStyle}>
          <div style={attireBox}>
            <h3>For the Gentlemen</h3>
            <p>
              Think barong, dark suits, earth tones. Brown shades? Perfect. Green accents? Cool. Gold details? Sure, if you’re feeling fancy. Just no neon, please 😅.
            </p>
          </div>

          <div style={attireBox}>
            <h3>For the Ladies</h3>
            <p>
              Flowing dresses in brown, gold, or forest green. Go soft and elegant — no pressure to match exactly, just stay in the vibe 🌿✨.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Motif;
