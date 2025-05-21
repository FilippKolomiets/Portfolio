const initThemeSwitcher = (): void => {
  const toggle = document.getElementById('theme-toggle') as HTMLInputElement | null;
  if (!toggle) return;

  toggle.checked = document.body.classList.contains('light');

  toggle.addEventListener('change', () => {
    document.body.classList.toggle('light', toggle.checked);
  });
};

export default initThemeSwitcher;
