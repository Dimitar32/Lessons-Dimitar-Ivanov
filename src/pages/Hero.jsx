import styles from './Hero.module.css';
import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.overlay}>
        <h1 className={styles.title}>Уроци по информатика, ИТ и програмиране</h1>
        <p className={styles.subtitle}>
          Подготвям ученици, студенти и хора на всякаква възраст – индивидуално и практически насочено.
        </p>
        <Link to="/contact" className={styles.cta}>Запиши се за урок</Link>
      </div>
    </section>
  );
}
