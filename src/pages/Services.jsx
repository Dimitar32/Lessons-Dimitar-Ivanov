import styles from './Services.module.css';

export default function Services() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Какво преподавам</h1>
      <div className={styles.cards}>
        <div className={styles.card}>
          <h2>🖥️ Информатика</h2>
          <p>Алгоритми, логическо мислене, състезателна подготовка и структури от данни.</p>
        </div>
        <div className={styles.card}>
          <h2>💾 Информационни технологии</h2>
          <p>Работа с Microsoft Office, проекти, презентации и дигитална грамотност.</p>
        </div>
        <div className={styles.card}>
          <h2>💻 Програмиране</h2>
          <p>Python, C++, HTML/CSS, Scratch – за начинаещи и напреднали.</p>
        </div>
        <div className={styles.card}>
          <h2>🎯 Подготовка за изпити</h2>
          <p>НВО, ДЗИ, кандидатстване и олимпиади по ИТ и информатика.</p>
        </div>
      </div>
    </div>
  );
}