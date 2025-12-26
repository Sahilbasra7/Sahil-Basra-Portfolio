import sahil from '../assets/sahil.jpg';

function ProfileCard() {
  return (
    <div style={styles.card}>
      <img src={sahil} alt="Sahil" style={styles.image} />

      <div style={styles.content}>
        <h3>Sahil Basra</h3>
        <p>QA Automation Engineer</p>

        <div style={styles.socials}>
          <span>🌐</span>
          <span>🐦</span>
          <span>📸</span>
          <span>▶️</span>
        </div>
      </div>
    </div>
  );
}

const styles = {
  card: {
    width: '340px',
    background: '#fff',
    borderRadius: '20px',
    overflow: 'hidden',
    color: '#000',
  },
  image: {
    width: '100%',
    objectFit: 'cover',
  },
  content: {
    padding: '20px',
    textAlign: 'center',
  },
  socials: {
    display: 'flex',
    justifyContent: 'center',
    gap: '14px',
  },
};

export default ProfileCard;