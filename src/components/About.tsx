import React from 'react';

const About: React.FC = () => {
  return (
    <div style={{ maxWidth: 600, margin: '2rem auto', padding: '2rem', background: '#fff', borderRadius: 12, boxShadow: '0 2px 8px rgba(0,0,0,0.08)' }}>
      <h2>About ColorQuest</h2>
      <section style={{ marginBottom: '1.5rem' }}>
        <h3>Description</h3>
        <p>
          ColorQuest is an interactive web app designed to help children learn about colors through fun activities, color cards, and myth-busting facts. The app is visually engaging and easy to use, making color learning enjoyable for young users.
        </p>
      </section>
      <section style={{ marginBottom: '1.5rem' }}>
        <h3>Author</h3>
        <p>Alyssa Herrera</p>
      </section>
      <section>
        <h3>Purpose</h3>
        <p>
          The purpose of ColorQuest is to provide an educational tool for children to explore, understand, and reflect on colors, while also addressing common misconceptions in a fun and interactive way.
        </p>
      </section>
    </div>
  );
};

export default About; 