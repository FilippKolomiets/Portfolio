
const themeToggle = document.getElementById('theme-toggle');
themeToggle.addEventListener('change', () => {
  document.body.classList.toggle('light', themeToggle.checked);
});

window.addEventListener('DOMContentLoaded', () => {
  setTimeout(() => {
    document.getElementById('preloader').classList.add('loaded');
    startTyping();
    initScrollReveal();
  }, 2000);
});

function startTyping() {
  const lines = [
    { accent: true,  idAccent: 'typed1-accent', idRest: 'typed1-rest', accentText: 'Hello!', restText: ' My name is' },
    { accent: false, id: 'typed2', text: 'Filipp Kolomiets.' },
    { accent: false, id: 'typed3', text: 'I am frontend developer.' },
    { accent: false, id: 'typed4', text: 'I can do some great' },
    { accent: false, id: 'typed5', text: 'things for you.' }
  ];
  const cursor = document.getElementById('typing-cursor');
  const cta    = document.querySelector('.cta');
  let lineIndex = 0, charIndex = 0, erasing = false;

  function moveCursor() {
    const L = lines[lineIndex];
    let container = L.accent
      ? document.getElementById(L.idRest).parentNode
      : document.getElementById(L.id).parentNode;
    container.appendChild(cursor);
  }

  function tick() {
    if (lineIndex >= lines.length) {
      cursor.remove();
      cta.classList.add('show');
      return;
    }
    const L = lines[lineIndex];
    moveCursor();

    if (!erasing) {
      if (L.accent) {
        if (charIndex < L.accentText.length) {
          document.getElementById(L.idAccent).textContent += L.accentText[charIndex++];
        } else if (charIndex < L.accentText.length + L.restText.length) {
          document.getElementById(L.idRest).textContent += L.restText[charIndex++ - L.accentText.length];
        } else {
          lineIndex++; charIndex = 0;
          return setTimeout(tick, 400);
        }
        return setTimeout(tick, 80);
      } else {
        if (charIndex < L.text.length) {
          document.getElementById(L.id).textContent += L.text[charIndex++];
          return setTimeout(tick, 80);
        } else {
          if (lineIndex === 2) {
            erasing = true;
            charIndex = L.text.length;
            return setTimeout(tick, 600);
          } else {
            lineIndex++; charIndex = 0;
            return setTimeout(tick, 400);
          }
        }
      }
    } else {
      if (charIndex > 0) {
        document.getElementById('typed3').textContent = L.text.slice(0, --charIndex);
        return setTimeout(tick, 50);
      } else {
        erasing = false;
        lineIndex = 3; charIndex = 0;
        return setTimeout(tick, 400);
      }
    }
  }

  tick();
}

// === FLOATING SIGNS ===
document.addEventListener('DOMContentLoaded', () => {
  const tags = [
    'TS','React','PostCSS','JS','{ }','< />',
    'HTML','CSS','SCSS','Node','Git','Figma',
    'JSON','API','Redux','GraphQL','Docker'
  ];
  const container = document.querySelector('.js-floating-tools');
  const width  = container.clientWidth;
  const height = container.clientHeight;

  tags.forEach(tag => {
    const el = document.createElement('div');
    el.className = 'code-signs__sign';
    el.textContent = tag;

    const x = Math.random() * (width - 100);   
    const y = Math.random() * (height - 30);   
    el.style.left = `${x}px`;
    el.style.top  = `${y}px`;

    const deg  = (Math.random() * 60 - 30).toFixed(1) + 'deg';     
    const dur  = (Math.random() * 4 + 6).toFixed(2) + 's';         
    const del  = (Math.random() * 5).toFixed(2) + 's';             
    el.style.setProperty('--fs-rotate',   deg);
    el.style.setProperty('--fs-duration', dur);
    el.style.setProperty('--fs-delay',    del);
    el.style.animationDuration = `${dur}, 1s`;   
    el.style.animationDelay    = `${del}, 0s`;   

    container.appendChild(el);
  });
});



function initScrollReveal() {
  const els = document.querySelectorAll('.reveal');
  function reveal() {
    els.forEach(el => {
      if (el.getBoundingClientRect().top < window.innerHeight - 60) {
        el.classList.add('active');
      }
    });
  }
  window.addEventListener('scroll', reveal);
  reveal();
}

document.body.addEventListener('click', e => {
  const btn = e.target.closest('.cta');
  if (!btn) return;
  e.preventDefault();
  document.querySelector('#skills').scrollIntoView({ behavior:'smooth' });
});

document.querySelectorAll('.nav__item a').forEach(link => {
  link.addEventListener('click', function(e) {
    const targetId = this.getAttribute('href').slice(1);
    const targetEl = document.getElementById(targetId);
    if (targetEl) {
      e.preventDefault();
      targetEl.scrollIntoView({ behavior: 'smooth' });
    }
  });
});
