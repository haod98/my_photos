const burger_menu = document.querySelector('.j-burger');
const overlay = document.querySelector('.overlay');
const burger_nav = document.querySelector('.j-burger-nav');
const close_icon = document.querySelector('.close-hide');
const burger_icon = document.querySelector('.j-burger-icon');

const close = () => {
    overlay.style.display = "none";
    burger_nav.style.display = "none";
    close_icon.style.display = 'none';
    burger_icon.style.display = 'block';
}

//Burger menu close
overlay.addEventListener('click', close);


burger_menu.addEventListener('click', () => {
    overlay.style.display = "block";
    close_icon.style.display = 'block';
    burger_nav.style.display = "block";
    burger_icon.style.display = 'none';
});
