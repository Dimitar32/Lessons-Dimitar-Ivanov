import styles from './Contact.module.css';

export default function Contact() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Свържи се с мен</h1>
      <p className={styles.text}>
        Ако имаш въпроси или искаш да запишеш час, не се колебай да се свържеш с мен:
      </p>

      <div className={styles.infoBox}>
        <p><strong>📞 Телефон:</strong> <a href="tel:0879330389" className={styles.link}>0879 330 389</a></p>
        <p><strong>📧 Email:</strong> <a href="mailto:dimitar@example.com" className={styles.link}>dimitar@example.com</a></p>
        <p><strong>💬 Viber / Telegram:</strong> Наличен след първи контакт</p>
      </div>

      <a
        href="https://docs.google.com/forms/d/e/1FAIpQLSd1234567890xyz/viewform"
        target="_blank"
        rel="noopener noreferrer"
        className={styles.button}
      >
        Изпрати съобщение чрез форма
      </a>
    </div>
  );
}
