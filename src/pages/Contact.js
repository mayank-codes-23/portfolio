import React from 'react';

const Contact = () => {
  return (
    <section id="contact" style={styles.section}>
      <div style={styles.container}>
        <h2 style={styles.heading}>Contact</h2>
        <p style={styles.info}>
          <strong>Email:</strong>{' '}
          <a href="mailto:your.email@example.com" style={styles.link}>
            your.email@example.com
          </a>
        </p>
        <p style={styles.info}>
          <strong>LinkedIn:</strong>{' '}
          <a
            href="https://www.linkedin.com/in/mayank-mahadik-b39643310?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
            target="_blank"
            rel="noopener noreferrer"
            style={styles.link}
          >
            View Profile
          </a>
        </p>
      </div>
    </section>
  );
};

const styles = {
  section: {
    padding: '60px 20px',
    backgroundColor: '#f9f9f9',
    textAlign: 'center',
  },
  container: {
    maxWidth: '600px',
    margin: '0 auto',
  },
  heading: {
    fontSize: '2rem',
    marginBottom: '20px',
    color: '#333',
  },
  info: {
    fontSize: '1.1rem',
    marginBottom: '10px',
    color: '#555',
  },
  link: {
    color: '#007BFF',
    textDecoration: 'none',
  },
};

export default Contact;
