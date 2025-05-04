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
          <li>✔️ Подготовка за НВО, матура и олимпиади</li>
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
          <li>💡 Решаване на задачи и изграждане на алгоритми</li>
          <li>💡 Работа с Office пакета (Word, Excel, PowerPoint)</li>
          {/* <li>💡 Уеб основи: HTML, CSS, JavaScript</li> */}
        </ul>
      </section>

      <section className={styles.section}>
        <h2>За кого са подходящи уроците?</h2>
        <p>Уроците са подходящи за ученици от 1-ви до 12-ти клас, студенти и хора на всякаква възраст, които имат да подобрят знанията си, да се подготвят за училище/университет или да започнат с програмиране от нулата.</p>
      </section>

      {/* <section className={styles.section} style={{ textAlign: 'center' }}>
        <a href="/contact" className={styles.cta}>Свържи се с мен и започни още днес!</a>
      </section> */}
     
      <Faq/>
    </>
  );
}
