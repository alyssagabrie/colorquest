import React from 'react';

interface Color {
  name: string;
  hex: string;
  description: string;
  myth: string;
}

interface ColorCardProps {
  color: Color;
  onClick: () => void;
}

const ColorCard: React.FC<ColorCardProps> = ({ color, onClick }) => {
  return (
    <div
      onClick={onClick}
      style={{
        backgroundColor: color.hex,
        padding: '20px',
        borderRadius: '10px',
        cursor: 'pointer',
        transition: 'transform 0.2s',
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '200px',
        color: '#fff',
        textShadow: '1px 1px 2px rgba(0,0,0,0.3)'
      }}
      onMouseOver={(e) => {
        e.currentTarget.style.transform = 'scale(1.05)';
      }}
      onMouseOut={(e) => {
        e.currentTarget.style.transform = 'scale(1)';
      }}
    >
      <h2 style={{ margin: 0, fontSize: '32px', fontWeight: 'bold' }}>{color.name}</h2>
    </div>
  );
};

// Helper function to determine text color based on background color
function getContrastColor(hexColor: string): string {
  // Convert hex to RGB
  const r = parseInt(hexColor.slice(1, 3), 16);
  const g = parseInt(hexColor.slice(3, 5), 16);
  const b = parseInt(hexColor.slice(5, 7), 16);
  
  // Calculate luminance
  const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
  
  // Return black or white based on luminance
  return luminance > 0.5 ? '#000000' : '#FFFFFF';
}

export default ColorCard; 