//Burger menu
const burger_menu = document.querySelector('.j-burger');
const overlay = document.querySelector('.j-overlay');
const nav = document.querySelector('.j-nav');
const close_icon = document.querySelector('.close-hide');
const burger_icon = document.querySelector('.j-burger-icon');
const burger_nav = document.querySelector('.j-burger-nav');

console.log(burger_menu)
//Burger menu close
const close = () => {
    overlay.style.display = "none";
    burger_nav.style.display = "none";
    close_icon.style.display = 'none';
    burger_icon.style.display = 'block';
    //Temporary fix for not closing bug
    burger_menu.style.pointerEvents = 'all';
};

overlay.addEventListener('click', close);
close_icon.addEventListener('click', close);


burger_menu.classList.contains
burger_menu.addEventListener('click', () => {
    overlay.style.display = "block";
    close_icon.style.display = 'block';
    burger_nav.style.display = "block";
    burger_icon.style.display = 'none';
    //Temporary fix for not closing bug
    burger_menu.style.pointerEvents = 'none';
});


//Fixed nav 

let current_height = window.pageYOffset;
window.addEventListener('scroll', () => {
    if (window.pageYOffset > current_height) {
        nav.classList.add('nav--fade');
    } else {
        nav.classList.remove('nav--fade');
    }
    current_height = window.pageYOffset;
});