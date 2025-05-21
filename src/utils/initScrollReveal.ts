export default function initScrollReveal(): void {
  const els = document.querySelectorAll<HTMLElement>('.reveal');
  const reveal = () => {
    els.forEach(el => {
      if (el.getBoundingClientRect().top < window.innerHeight - 60) {
        el.classList.add('active');
      }
    });
  };
  window.addEventListener('scroll', reveal);
  reveal();
}
