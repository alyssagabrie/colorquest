import React from 'react';

interface ColorCardProps {
  name: string;
  color: string;
  onClick: () => void;
}

const ColorCard: React.FC<ColorCardProps> = ({ name, color, onClick }) => {
  return (
    <div
      onClick={onClick}
      style={{
        backgroundColor: color,
        padding: '20px',
        borderRadius: '15px',
        cursor: 'pointer',
        boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
        transition: 'transform 0.2s',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '150px',
        color: getContrastColor(color),
        fontSize: '24px',
        fontWeight: 'bold',
        textAlign: 'center',
      }}
      onMouseOver={(e) => {
        e.currentTarget.style.transform = 'scale(1.05)';
      }}
      onMouseOut={(e) => {
        e.currentTarget.style.transform = 'scale(1)';
      }}
    >
      {name}
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