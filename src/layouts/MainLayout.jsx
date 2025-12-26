import ProfileCard from '../components/ProfileCard';

function MainLayout({ children }) {
  return (
    <div style={styles.page}>
      <div style={styles.wrapper}>
        <aside style={styles.left}>
          <ProfileCard />
        </aside>

        <main style={styles.right}>
          {children}
        </main>
      </div>
    </div>
  );
}

const styles = {
  page: {
    display: 'flex',
    justifyContent: 'center',
    width: '100%',
  },

  wrapper: {
    width: '100%',
    maxWidth: '1200px',
    display: 'flex',
    gap: '80px',
    padding: '0 40px',
    alignItems: 'flex-start',
  },

  left: {
    position: 'sticky',
    top: '50vh',
    transform: 'translateY(-50%)',
    flexShrink: 0,
  },

  right: {
    flex: 1,
    minWidth: 0,
  },
};

export default MainLayout;