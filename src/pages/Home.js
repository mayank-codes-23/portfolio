import React from 'react';

const Home = () => {
  return (
    <section id="home" style={styles.section}>
      <div style={styles.container}>
        <h2 style={styles.heading}>Hi, I'm <span style={styles.name}>Mayank Mahadik</span></h2>
        <p style={styles.subtitle}>Frontend Developer | React Enthusiast</p>
      </div>
    </section>
  );
};

const styles = {
  section: {
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f5f5f5',
    padding: '40px 20px',
  },
  container: {
    textAlign: 'center',
  },
  heading: {
    fontSize: '2.5rem',
    marginBottom: '10px',
    color: '#222',
  },
  name: {
    color: '#007BFF',
  },
  subtitle: {
    fontSize: '1.25rem',
    color: '#555',
  }
};

export default Home;
