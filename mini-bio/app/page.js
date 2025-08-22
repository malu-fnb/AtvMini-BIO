import Profile from './components/perfil';
import styles from './page.module.css';

export default function Home() {
  return (
    <main className={styles.main}>
      <Profile />
    </main>
  );
}
