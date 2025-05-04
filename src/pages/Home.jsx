import Hero from './Hero';
import Faq from '../components/Faq';
import styles from './Home.module.css';

export default function Home() {
  return (
    <>
      <Hero />

      <section className={styles.section}>
        <h2>Защо да избереш мен?</h2>
        <ul className={styles.bullets}>
          <li>✔️ Ясно обяснение на сложни теми</li>
          <li>✔️ Индивидуален подход към всеки ученик</li>
          <li>✔️ Богат практически опит и примери от реалния свят</li>
          <li>✔️ Учиш директно и практически от човек, който се занимава с това професионално</li>
        </ul>
      </section>

      <section className={styles.section}>
        <h2>Как протичат уроците?</h2>
        <p>
          Уроците се провеждат онлайн. Използвам споделяне на екран, практически задачи и домашни упражнения. Работим с Google Meet, Zoom, Visual Studio Code и други инструменти.
        </p>
      </section>

      <section className={styles.section}>
        <h2>Какво ще научиш?</h2>
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
        <h2>За кого са подходящи уроците?</h2>
        <p>Уроците са подходящи за ученици от 1-ви до 12-ти клас, студенти и хора на всякаква възраст, които имат желанието да подобрят знанията си, да се подготвят за училище/университет или да започнат с програмиране от нулата.</p>
      </section>

      {/* <section className={styles.section} style={{ textAlign: 'center' }}>
        <a href="/contact" className={styles.cta}>Свържи се с мен и започни още днес!</a>
      </section> */}
     
      <Faq/>
    </>
  );
}
