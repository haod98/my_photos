//Burger menu
const burger_menu = document.querySelector('.j-burger');
const overlay = document.querySelector('.j-overlay');
const nav = document.querySelector('.j-nav');
const close_icon = document.querySelector('.close-hide');
const burger_icon = document.querySelector('.j-burger-icon');
const burger_nav = document.querySelector('.j-burger-nav');
console.log(nav);

//Burger menu close
const close = () => {
    overlay.style.display = "none";
    burger_nav.style.display = "none";
    close_icon.style.display = 'none';
    burger_icon.style.display = 'block';
};

overlay.addEventListener('click', close);

burger_menu.addEventListener('click', () => {
    overlay.style.display = "block";
    close_icon.style.display = 'block';
    burger_nav.style.display = "block";
    burger_icon.style.display = 'none';
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