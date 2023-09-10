const hamburger = document.querySelector('.hamburger'),
      menu = document.querySelector('.menu'),
      closeElem = document.querySelector('.menu__close');
      menuElems = document.querySelectorAll('.menu__link')

hamburger.addEventListener('click', () => {
    menu.classList.add('active');
});

closeElem.addEventListener('click', () => {
    menu.classList.remove('active');
});

menuElems.forEach((menuLink) => {
    menuLink.addEventListener('click', () => {
        menu.classList.remove('active');
    });
});

const counters = document.querySelectorAll('.skills__percent'),
      lines = document.querySelectorAll('.skills__line span');

counters.forEach( (item, i) => {
    lines[i].style.width = item.innerHTML;
});