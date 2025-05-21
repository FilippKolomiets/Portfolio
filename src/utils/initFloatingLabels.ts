
import styles from '../components/Hero.module.css';

const labels = [
  'TS','React','PostCSS','JS','{ }','< />',
  'HTML','CSS','SCSS','Node','Git','Figma',
  'JSON','API','Redux','GraphQL','Docker'
];

export default function initFloatingLabels(): void {
  const container = document.querySelector(`.${styles.jsFloatingTools}`) as HTMLElement | null;
  if (!container) return;
  const width = container.clientWidth;
  const height = container.clientHeight;

  labels.forEach(tag => {
    const el = document.createElement('div');
    el.className = styles.codeSignSign;
    el.textContent = tag;

    const x = Math.random() * (width - 100);
    const y = Math.random() * (height - 30);
    el.style.left = `${x}px`;
    el.style.top  = `${y}px`;

    const deg = (Math.random() * 60 - 30).toFixed(1) + 'deg';
    const dur = (Math.random() * 4 + 6).toFixed(2) + 's';
    const del = (Math.random() * 5).toFixed(2) + 's';

    el.style.setProperty('--fs-rotate',   deg);
    el.style.setProperty('--fs-duration', dur);
    el.style.setProperty('--fs-delay',    del);
    el.style.animationDuration = `${dur}, 1s`;
    el.style.animationDelay    = `${del}, 0s`;

    container.appendChild(el);
  });
}
