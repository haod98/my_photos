//Infinite slider
const prev_btn = document.querySelector('.j-prev');
const next_btn = document.querySelector('.j-next');
const ul = document.querySelector('.j-img-list');
const img_lists = document.querySelectorAll('.j-img-list > li');
const img_list_length = img_lists.length;
const first_img = document.querySelector('.j-img-list > li:first-child img');

ul.style.width = img_list_length + '00' + '%';

const next = () => {
    ul.classList.add('slider-animation');
    ul.style.left = "-100%";
    const move_li = () => {
        const first_li = document.querySelector('.j-img-list > li:first-child');
        ul.insertAdjacentElement('beforeend', first_li);
        ul.classList.remove('slider-animation');
        ul.style.left = "0";
        ul.removeEventListener('transitionend', move_li);
    };
    ul.addEventListener('transitionend', move_li);
};

const prev = () => {
    ul.classList.remove('slider-animation');
    ul.style.left = "-100%";
    const last_li = document.querySelector('.j-img-list > li:last-child');
    ul.insertAdjacentElement('afterbegin', last_li);
    requestAnimationFrame(function () {
        requestAnimationFrame(function () {
            ul.classList.add('slider-animation');
            ul.style.left = "0";
        });
    });
};

const close = () => {
    overlay.style.display = "none";
    burger_nav.style.display = "none";
    close_icon.style.display = 'none';
    burger_icon.style.display = 'block';
}

next_btn.addEventListener('click', next);
prev_btn.addEventListener('click', prev);

//Burger menu
const burger_menu = document.querySelector('.j-burger');
const overlay = document.querySelector('.overlay');
const burger_nav = document.querySelector('.j-burger-nav');
const close_icon = document.querySelector('.close-hide');
const burger_icon = document.querySelector('.j-burger-icon');

//Burger menu close
overlay.addEventListener('click', close);

burger_menu.addEventListener('click', () => {
    overlay.style.display = "block";
    close_icon.style.display = 'block';
    burger_nav.style.display = "block";
    burger_icon.style.display = 'none';
});






//Removes the fadein animation on the initial visit
first_img.addEventListener('animationend', () => {
    first_img.classList.remove('homescreen-fadein');
});