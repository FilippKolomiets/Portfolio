import initThemeSwitcher from './initThemeSwitcher';
import startTyping       from './startTyping';
import initScrollReveal  from './initScrollReveal';
import initFloatingLabels from './initFloatingLabels';

const initApp = (): void => {
  document.addEventListener('DOMContentLoaded', () => {
    initThemeSwitcher();

    document.querySelectorAll<HTMLAnchorElement>('a[href^="#"]').forEach(link => {
      link.addEventListener('click', e => {
        const targetId = link.getAttribute('href')!.slice(1);
        const targetEl = document.getElementById(targetId);
        if (targetEl) {
          e.preventDefault();
          targetEl.scrollIntoView({ behavior: 'smooth' });
        }
      });
    });

    setTimeout(() => {
      document.getElementById('preloader')?.classList.add('loaded');
    initFloatingLabels();
    startTyping();
    initScrollReveal();
    }, 2000);
  });
};

export default initApp;
