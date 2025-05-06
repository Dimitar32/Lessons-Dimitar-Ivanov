import Hero from './Hero';
import Faq from '../components/Faq';
import styles from './Home.module.css';

export default function Home() {
  return (
    <>
      <Hero />

      <section className={styles.section}>
        <h2 className={styles.title}>Защо да избереш мен?</h2>
        <div className={styles.cards}>
          <div className={styles.card}>
            <h3>✔️ Ясно обяснение</h3>
            <p>Обяснявам сложни теми по лесен и разбираем начин.</p>
          </div>
          <div className={styles.card}>
            <h3>✔️ Индивидуален подход</h3>
            <p>Съобразявам се с нуждите и темпото на всеки ученик.</p>
          </div>
          <div className={styles.card}>
            <h3>✔️ Практически опит</h3>
            <p>Споделям реални примери от професионалния си опит.</p>
          </div>
          <div className={styles.card}>
            <h3>✔️ Професионализъм</h3>
            <p>Учиш директно от човек, който се занимава с това професионално.</p>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <h2 className={styles.heading}>Как протичат уроците?</h2>
        <p className={styles.text}>
          Уроците се провеждат онлайн. Използвам споделяне на екран, практически задачи и домашни упражнения. Работим с Google Meet, Zoom, Visual Studio Code и други инструменти.
        </p>
      </section>

      <section className={styles.section}>
        <h2 className={styles.title}>Какво ще научиш?</h2>
        <ul className={styles.bullets}>
          <li>💡 Основи на програмирането – променливи, цикли, функции</li>
          <li>💡 Обектно-ориентирано програмиране (ООП) – класове, обекти, наследяване</li>
          <li>💡 Работа с бази данни – SQL, създаване на таблици, заявки</li>
          <li>💡 Решаване на алгоритмични проблеми – анализ и оптимизация</li>
          <li>💡 Алгоритми и структури от данни – списъци, дървета, графи</li>
          <li>💡 Работа с Microsoft Office – Word, Excel, PowerPoint</li>
        </ul>
      </section>

      <section className={styles.section}>
        <h2 className={styles.title}>За кого са подходящи уроците?</h2>
        <p>
          Уроците са подходящи за ученици от 1-ви до 12-ти клас, студенти и хора на всякаква възраст, които имат желанието да подобрят знанията си, да се подготвят за училище/университет или да започнат с програмиране от нулата.
        </p>
      </section>

      <section className={styles.ctaSection}>
        <a href="/contact" className={styles.cta}>
          Започни още днес!
        </a>
      </section>

      <Faq />
    </>
  );
}
