// ✅ About.jsx
import styles from './About.module.css';
import profilePhoto from '../Учител Информатика.png'; // Постави своя снимка в папка public или src/assets

export default function About() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>За мен</h1>

      <div className={styles.photoWrapper}>
        <img src={profilePhoto} alt="Моята снимка" className={styles.photo} />
      </div>

      <section className={styles.section}>
        <h2>🎓 Образование</h2>
        <ul>
          <li>🎓 Бакалавър - Информатика – Пловдивски университет "Паисий Хилендарски"</li>
          <li>🏫 Средно образование - Информатика – ППМГ "Гео Милев", Стара Загора</li>
        </ul>
      </section>

      <section className={styles.section}>
        <h2>💼 Професионален Опит</h2>
        <ul>
          <li>✅ 2+ години Database Developer - eDynamix Bulgaria Ltd</li>
          <li>✅ 6 месеца Intern Java Developer - Infinno LLC</li>
        </ul>
        <p>
          Помагам на ученици с подготовка за:
        </p>
        <ul>
          <li>✅ Учебните часове по информатика</li>
          <li>✅ Национално външно оценяване (НВО)</li>
          <li>✅ Държавни зрелостни изпити (ДЗИ)</li>
          <li>✅ Домашни и практически проекти</li>
        </ul>
      </section>

      <section className={styles.section}>
        <h2>🧑‍🏫 Мисия</h2>
        <p>Вярвам, че всеки ученик може да разбере и обикне информатиката, стига да му бъде поднесена с разбиране, търпение и добър подход. Обучението ми е съобразено с темпото и нуждите на всеки ученик.</p>
      </section>
    </div>
  );
}
