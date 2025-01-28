const menu = document.querySelector('.header__nav');
const button = document.querySelector('.header__toggle');
const body = document.querySelector('.page-body');
const header = document.querySelector('.header');

function interactiveMenu() {
    button.addEventListener('click', openMenu);
}

function openMenu() {
    if (button.className === 'header__toggle header__toggle-closed') {
        button.classList.remove('header__toggle-closed');
        button.classList.add('header__toggle-opened');
        menu.classList.add('header__nav-opened');
    } else {
        button.classList.remove('header__toggle-opened');
        button.classList.add('header__toggle-closed');
        menu.classList.remove('header__nav-opened');
    }
}

function animationHeader() {
    window.addEventListener('scroll', () => {
        header.classList.add('header-scroll');
        const scrollPosition = document.documentElement.scrollTop;
        if (scrollPosition === 0) {
            header.classList.remove('header-scroll');
        }
    });      
}

animationHeader();
interactiveMenu();