import styles from './Services.module.css';

export default function Services() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Какво преподавам</h1>
      <div className={styles.cards}>
        <div className={styles.card}>
          <h2>🖥️ Информатика</h2>
          <p>Алгоритми, логическо мислене, училищна подготовка и структури от данни.</p>
        </div>
        <div className={styles.card}>
          <h2>💻 Програмиране</h2>
          <p>C#, .NET, SQL – за начинаещи и напреднали.</p>
        </div>
        <div className={styles.card}>
          <h2>💾 Информационни технологии</h2>
          <p>Работа с Microsoft Office, проекти, презентации и дигитална грамотност.</p>
        </div>
        <div className={styles.card}>
          <h2>🎯 Помощ и решаване на курсови работи и домашни</h2>
          <p>Решаване, помощ и подготовка за изпити, курсови работи и домашни</p>
        </div>
      </div>
    </div>
  );
}