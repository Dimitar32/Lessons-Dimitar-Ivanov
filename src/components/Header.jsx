import { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.css';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(prev => !prev);
  };

  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <Link to="/" className={styles.logo}>УЧИТЕЛ ИНФОРМАТИКА</Link>
        <button className={styles.hamburger} onClick={toggleMenu}>
          ☰
        </button>
        <nav className={`${styles.nav} ${menuOpen ? styles.open : ''}`}>
          <ul className={styles.navLinks}>
            <li><Link to="/" className={styles.link} onClick={toggleMenu}>Начало</Link></li>
            <li><Link to="/services" className={styles.link} onClick={toggleMenu}>Услуги</Link></li>
            <li><Link to="/about" className={styles.link} onClick={toggleMenu}>За мен</Link></li>
            <li><Link to="/contact" className={styles.link} onClick={toggleMenu}>Контакт</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}