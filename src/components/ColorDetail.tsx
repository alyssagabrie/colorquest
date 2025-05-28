import React from 'react';

interface Color {
  name: string;
  hex: string;
  description: string;
}

interface ColorDetailProps {
  color: Color;
  onClose: () => void;
}

const ColorDetail: React.FC<ColorDetailProps> = ({ color, onClose }) => {
  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(0,0,0,0.8)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 1000
    }}>
      <div style={{
        backgroundColor: 'white',
        padding: '2rem',
        borderRadius: '10px',
        maxWidth: '600px',
        width: '90%',
        position: 'relative'
      }}>
        <button
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '1rem',
            right: '1rem',
            background: 'none',
            border: 'none',
            fontSize: '1.5rem',
            cursor: 'pointer',
            color: '#666'
          }}
        >
          ×
        </button>
        
        <div style={{
          backgroundColor: color.hex,
          height: '200px',
          borderRadius: '10px',
          marginBottom: '1.5rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#fff',
          textShadow: '1px 1px 2px rgba(0,0,0,0.3)',
          fontSize: '2rem',
          fontWeight: 'bold'
        }}>
          {color.name}
        </div>

        <h2 style={{ color: '#2c3e50', marginBottom: '1rem' }}>{color.name}</h2>
        <p style={{ color: '#34495e', lineHeight: '1.6' }}>{color.description}</p>
        
        <div style={{ marginTop: '1.5rem', color: '#7f8c8d' }}>
          <p>Hex Code: {color.hex}</p>
        </div>
      </div>
    </div>
  );
};

export default ColorDetail; 