import React from 'react';

interface ColorCardProps {
  color: {
    name: string;
    hex: string;
  };
  onClick: () => void;
}

const ColorCard: React.FC<ColorCardProps> = ({ color, onClick }) => {
  return (
    <div
      onClick={onClick}
      style={{
        backgroundColor: color.hex,
        padding: '2rem',
        borderRadius: '1rem',
        cursor: 'pointer',
        transition: 'transform 0.2s ease-in-out',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
      }}
      onMouseOver={(e) => {
        e.currentTarget.style.transform = 'scale(1.05)';
      }}
      onMouseOut={(e) => {
        e.currentTarget.style.transform = 'scale(1)';
      }}
    >
      <h2 style={{
        color: '#000',
        margin: 0,
        fontSize: '1.5rem',
        fontWeight: 'bold',
        textShadow: '0 1px 2px rgba(255, 255, 255, 0.5)'
      }}>
        {color.name}
      </h2>
    </div>
  );
};

export default ColorCard; 