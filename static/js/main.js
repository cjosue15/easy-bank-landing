const $navItem = document.querySelector('.menu');
const nav = document.querySelector('.header-content nav');
const mq = window.matchMedia('(min-width: 991px)');
$navItem.addEventListener('click', () => {
    if (nav.classList.contains('active')) {
        // hide
        nav.style.opacity = '0';
        setTimeout(() => {
            nav.classList.remove('active');
            nav.style.display = 'none';
        }, 550);
    } else {
        // show
        nav.style.display = 'block';
        setTimeout(() => {
            nav.style.opacity = '1';
        }, 20);
        nav.classList.add('active');
    }
});

const mql = window.matchMedia('(min-width: 991px)');

mql.addEventListener('change', () => {
    if (nav.classList.contains('active')) {
        nav.classList.remove('active');
    }
});
