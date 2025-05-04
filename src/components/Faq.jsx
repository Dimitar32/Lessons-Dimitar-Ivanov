import { useState } from 'react';
import styles from './Faq.module.css';

const faqData = [
  {
    question: 'Трябва ли да имам предварителни знания?',
    answer: 'Не! Уроците са подходящи и за напълно начинаещи. Започваме от основите и напредваме постепенно.'
  },
  {
    question: 'Уроците онлайн ли са?',
    answer: 'Да – уроците могат да бъдат онлайн (в Zoom/Google Meet) или присъствено, ако си от Стара Загора.'
  },
  {
    question: 'Колко време трае един урок?',
    answer: 'Обикновено между 60 и 90 минути, в зависимост от нуждите и темата.'
  },
  {
    question: 'Какво е необходимо за участие?',
    answer: 'Компютър, интернет връзка и желание да учиш. Не е нужно специално оборудване.'
  }
];

export default function Faq() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className={styles.faqSection}>
      <h2 className={styles.title}>Често задавани въпроси</h2>
      <div className={styles.list}>
        {faqData.map((item, index) => (
          <div key={index} className={styles.item}>
            <button className={styles.question} onClick={() => toggle(index)}>
              {item.question}
              <span className={styles.icon}>{openIndex === index ? '▲' : '▼'}</span>
            </button>
            {openIndex === index && <p className={styles.answer}>{item.answer}</p>}
          </div>
        ))}
      </div>
    </section>
  );
}
