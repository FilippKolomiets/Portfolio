import type { FC } from 'react';
import styles from './Portfolio.module.css';
import todoImg    from '../assets/images/todolist.png';
import invImg     from '../assets/images/inventory-demo.png';
import weatherImg from '../assets/images/weather-app.png';
import ExtLink    from '../assets/icons/external-link.svg';
import htmlIcon   from '../assets/icons/html.svg';
import cssIcon    from '../assets/icons/css.svg';
import jsIcon     from '../assets/icons/javascript.svg';
import reactIcon  from '../assets/icons/react.svg';
import tsIcon     from '../assets/icons/typescript.svg';

const Portfolio: FC = () => (
  <section id="portfolio" className={`${styles.section} reveal`}>
    <h2 className={styles.title}>My <span className={styles.accent}>portfolio</span></h2>
    <ul className={styles.list}>
      {[
        {
          img: todoImg,
          title: 'TodoList',
          link: 'https://filippkolomiets.github.io/TODOlist/',
          desc: 'A simple TodoList application built with HTML, CSS, JavaScript and using LocalStorage.',
          tools: [htmlIcon, cssIcon, jsIcon]
        },
        {
          img: invImg,
          title: 'InventoryDemo',
          link: 'https://github.com/FilippKolomiets/Inventory_demo',
          desc: 'inventoryDemo built with React and TypeScript, using React-DnD for drag-and-drop.',
          tools: [reactIcon, tsIcon, jsIcon],
          badge: true
        },
        {
          img: weatherImg,
          title: 'WeatherApp',
          link: 'https://filippkolomiets.github.io/WeatherApp/',
          desc: 'WeatherApp using JavaScript, HTML and CSS with real-time API integration.',
          tools: [htmlIcon, cssIcon, jsIcon]
        }
      ].map(({ img, title, link, desc, tools, badge }) => (
        <li className={styles.card} key={title}>
          <div className={styles.inner}>
            <img src={img} alt={`${title} screenshot`} className={styles.img} />
            <div className={styles.content}>
              <h3 className={styles.projectTitle}>
                <a href={link} target="_blank" rel="noopener">
                  {title}
                  <img src={ExtLink} alt="external link" className={styles.externalIcon} />
                </a>
                {badge && <span className={styles.updateNow}>Update Now!</span>}
              </h3>
              <p className={styles.description}>{desc}</p>
              <ul className={styles.tools}>
                {tools.map((icon, i) => (
                  <li key={i}><img src={icon} alt="" /></li>
                ))}
              </ul>
            </div>
          </div>
        </li>
      ))}
    </ul>
  </section>
);

export default Portfolio;
