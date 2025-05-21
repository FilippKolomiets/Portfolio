interface AccentLine {
  accent: true
  idAccent: string
  idRest: string
  accentText: string
  restText: string
}
interface TextLine {
  accent: false
  id: string
  text: string
}
type Line = AccentLine | TextLine

export default function startTyping(): void {
  const isMobile = window.innerWidth <= 768
  const cursor   = document.getElementById('typing-cursor')!
  const cta      = document.querySelector('.cta')!

  const TYPING_DELAY    = 100  
  const ERASING_DELAY   = 60   
  const PAUSE_AFTER     = 400  
  const PAUSE_BEFORE_ERASE = 600 

  const lines: Line[] = [
    {
      accent:     true,
      idAccent:   'typed1-accent',
      idRest:     'typed1-rest',
      accentText: 'Hello!',
      restText:   ' My name is',
    },
    { accent: false, id: 'typed2',  text: 'Filipp Kolomiets.' },
    ...(isMobile
      ? [
          { accent: false, id: 'typed3',  text: 'I am frontend ' },
          { accent: false, id: 'typed3b', text: 'developer.'    },
        ]
      : [
          { accent: false, id: 'typed3',  text: 'I am frontend developer.' },
        ]
    ),
    { accent: false, id: 'typed4',  text: 'I can do some great' },
    { accent: false, id: 'typed5',  text: 'things for you.' },
  ]

  const idx3 = lines.findIndex(l => !l.accent && l.id === 'typed3')

  let lineIndex   = 0
  let charIndex   = 0
  let erasing     = false
  let mobileStage = 0

  function moveCursor() {
    const L = lines[lineIndex]
    const parent = L.accent
      ? document.getElementById(L.idRest)!.parentElement!
      : document.getElementById(L.id)!.parentElement!
    if (cursor.parentElement !== parent) {
      parent.appendChild(cursor)
    }
  }

  function tick() {
    if (lineIndex >= lines.length) {
      cursor.remove()
      cta.classList.add('show')
      return
    }

    const L = lines[lineIndex]
    moveCursor()

    if (L.accent) {
      if (charIndex < L.accentText.length) {
        document.getElementById(L.idAccent)!.textContent! += L.accentText[charIndex++]
        setTimeout(tick, TYPING_DELAY)
      } else if (charIndex < L.accentText.length + L.restText.length) {
        document.getElementById(L.idRest)!.textContent! +=
          L.restText[charIndex++ - L.accentText.length]
        setTimeout(tick, TYPING_DELAY)
      } else {
        lineIndex++; charIndex = 0
        setTimeout(tick, PAUSE_AFTER)
      }

    } else {
      if (!erasing) {
        if (charIndex < L.text.length) {
          document.getElementById(L.id)!.textContent! += L.text[charIndex++]
          setTimeout(tick, TYPING_DELAY)
        } else {
          const lastId = isMobile ? 'typed3b' : 'typed3'
          if (L.id === lastId) {
            erasing     = true
            mobileStage = 0
            charIndex   = L.text.length
            setTimeout(tick, PAUSE_BEFORE_ERASE)
          } else {
            lineIndex++; charIndex = 0
            setTimeout(tick, PAUSE_AFTER)
          }
        }

      } else {
        if (charIndex > 0) {
          document.getElementById(L.id)!.textContent = L.text.slice(0, --charIndex)
          setTimeout(tick, ERASING_DELAY)
        } else {
          if (isMobile && mobileStage === 0) {
            mobileStage = 1
            lineIndex   = idx3
            charIndex   = (lines[idx3] as TextLine).text.length
            setTimeout(tick, PAUSE_AFTER)
          } else {
            erasing   = false
            lineIndex = isMobile ? idx3 + 2 : idx3 + 1
            charIndex = 0
            setTimeout(tick, PAUSE_AFTER)
          }
        }
      }
    }
  }

  tick()
}
