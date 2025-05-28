import React from 'react';

const About: React.FC = () => {
  return (
    <div style={{
      padding: '2rem',
      maxWidth: '800px',
      margin: '0 auto',
      backgroundColor: '#fff',
      borderRadius: '1rem',
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
    }}>
      <h1 style={{ color: '#2c3e50', marginBottom: '1rem' }}>About ColorQuest</h1>
      <p style={{ color: '#34495e', lineHeight: '1.6', marginBottom: '1rem' }}>
        ColorQuest is an interactive learning tool designed to help children explore and understand colors in a fun and engaging way. Through interactive color cards, quizzes, and reflection prompts, children can learn about different colors, their meanings, and how they affect our emotions and daily lives.
      </p>
      <p style={{ color: '#34495e', lineHeight: '1.6', marginBottom: '1rem' }}>
        This app is recommended for children ages 4-8, helping young learners understand colors and express their creativity through interactive play.
      </p>
      <p style={{ color: '#34495e', lineHeight: '1.6', marginBottom: '1rem' }}>
        <strong>Test Deployment:</strong> If you can see this message, the GitHub Pages deployment is working correctly! 🎉
      </p>
    </div>
  );
};

export default About; 