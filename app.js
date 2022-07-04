let oldValue = 0
let newValue = 0

const navLinks = document.querySelector('.nav-links')
const section = document.querySelectorAll('section')

window.addEventListener('scroll', hideNav);

function hideNav() {
  newValue = window.pageYOffset;
  
  section.forEach(sec => {
    let top = window.scrollY
    let offset = sec.offsetTop - 500
    let height = sec.offsetHeight
    let id = sec.getAttribute('id')

    if (top >= offset && top < offset + height) {
      Array.from(navLinks.children).forEach(link => {
        link.classList.remove('active')
        document.querySelector(`.nav-links a[href*='${id}']`)?.classList?.add('active')
      })
    }
  })

  if (window.innerWidth < 700) {
    if (oldValue < newValue) {
      navLinks.classList.add('hidden-links')
    } else if (oldValue > newValue) {
      navLinks.classList.remove('hidden-links')
    }
  } else {
    navLinks.classList.remove('hidden-links')
  }
  oldValue = newValue;
}

const app = document.querySelector('#root')
const contactHeader = document.querySelector('#contact-header')

const myObserver = new ResizeObserver(entries => {
  entries.forEach(entry => {
    if (entry.contentRect.width > 900) {
      contactHeader.textContent = 'Interested? Let’s get in touch'
    } else {
      contactHeader.textContent = 'Get in touch'
    }
  });
});

myObserver.observe(app)