import React from 'react';

const About: React.FC = () => {
  return (
    <div className="about-container" style={{
      maxWidth: '800px',
      margin: '0 auto',
      padding: '2rem',
      backgroundColor: '#ffffff',
      borderRadius: '10px',
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
    }}>
      <h1 style={{ color: '#2c3e50', marginBottom: '1.5rem' }}>About ColorQuest</h1>
      
      <section style={{ marginBottom: '2rem' }}>
        <h2 style={{ color: '#3498db', marginBottom: '1rem' }}>About the App</h2>
        <p style={{ lineHeight: '1.6', color: '#34495e' }}>
          ColorQuest is an interactive educational application designed to help children learn about colors in a fun and engaging way. 
          Through interactive color cards, quizzes, and reflection prompts, children can explore the world of colors while developing 
          their cognitive and creative skills.
        </p>
        <p style={{ lineHeight: '1.6', color: '#34495e', marginTop: '1rem' }}>
          Recommended for children ages 4-8, ColorQuest helps young learners develop their understanding of colors, 
          challenge common misconceptions, and express their creativity through color exploration.
        </p>
      </section>

      <section style={{ marginBottom: '2rem' }}>
        <h2 style={{ color: '#3498db', marginBottom: '1rem' }}>Author</h2>
        <p style={{ lineHeight: '1.6', color: '#34495e' }}>
          Created by Alyssa Gabrielle
        </p>
      </section>

      <section>
        <h2 style={{ color: '#3498db', marginBottom: '1rem' }}>Project Purpose</h2>
        <p style={{ lineHeight: '1.6', color: '#34495e' }}>
          This project was created as part of the training tool activity for the course "Women, Men & Communication" (16130). 
          The goal is to demonstrate the application of communication principles in educational technology, specifically focusing 
          on creating an engaging and effective learning experience for children.
        </p>
      </section>
    </div>
  );
};

export default About; 