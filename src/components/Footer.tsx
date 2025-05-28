import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer style={{
      backgroundColor: '#2c3e50',
      color: 'white',
      padding: '1rem',
      textAlign: 'center',
      marginTop: '2rem',
      position: 'relative',
      bottom: 0,
      width: '100%'
    }}>
      <p style={{ margin: 0, fontSize: '0.9rem' }}>
        Created by Alyssa Herrera - Training Tool Assignment
      </p>
    </footer>
  );
};

export default Footer; 