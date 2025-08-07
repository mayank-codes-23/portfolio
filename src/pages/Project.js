import React from 'react';

const Projects = () => {
  return (
    <section id="projects" style={styles.section}>
      <div style={styles.container}>
        <h2 style={styles.heading}>Projects</h2>
        <ul style={styles.list}>
          <li style={styles.listItem}>✔️ <strong>Portfolio Website</strong> <span style={styles.detail}>(React)</span></li>
          <li style={styles.listItem}>✔️ <strong>Todo App</strong> <span style={styles.detail}>(React + LocalStorage)</span></li>
          <li style={styles.listItem}>✔️ <strong>Weather App</strong> <span style={styles.detail}>(API Integration)</span></li>
        </ul>
      </div>
    </section>
  );
};

const styles = {
  section: {
    padding: '60px 20px',
    backgroundColor: '#fff',
    textAlign: 'center',
  },
  container: {
    maxWidth: '700px',
    margin: '0 auto',
  },
  heading: {
    fontSize: '2rem',
    marginBottom: '25px',
    color: '#333',
  },
  list: {
    listStyleType: 'none',
    padding: 0,
    margin: 0,
  },
  listItem: {
    fontSize: '1.2rem',
    marginBottom: '15px',
    color: '#444',
  },
  detail: {
    color: '#777',
    marginLeft: '5px',
  },
};

export default Projects;
