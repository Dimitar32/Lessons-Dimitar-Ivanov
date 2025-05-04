import styles from './Hero.module.css';
import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.overlay}>
        <h1 className={styles.title}>Уроци по информатика, ИТ и програмиране</h1>
        <p className={styles.subtitle}>
          Подготвям ученици от 5. до 12. клас – индивидуално, групово и практически насочено.
        </p>
        <Link to="/contact" className={styles.cta}>Запиши се за пробен урок</Link>
      </div>
    </section>
  );
}
