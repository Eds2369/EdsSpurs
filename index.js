const navBtn = document.getElementById('mobile-nav')
const navLinks = document.getElementById('nav-links')
const mobileCloseBtn = document.getElementById('mobile-close-btn')
const body = document.querySelector('body')

navBtn.addEventListener('click', () => {
    navLinks.classList.toggle('show')
    body.style.overflow = 'hidden'
})

mobileCloseBtn.addEventListener('click', () => {
    navLinks.classList.remove('show')
    body.style.overflow = 'auto'
})