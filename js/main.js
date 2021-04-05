//Infinite slider
const prev_btn = document.querySelectorAll('.j-prev');
const next_btn = document.querySelectorAll('.j-next');
const ul = document.querySelector('.j-img-list');
const img_lists = document.querySelectorAll('.j-img-list > li');
const img_list_length = img_lists.length;
const first_img = document.querySelector('.j-img-list > li:first-child img');
const left_auto = document.querySelector('.j-left-auto');
const off_auto = document.querySelector('.j-off-auto');
const right_auto = document.querySelector('.j-right-auto');
const all_auto = document.querySelectorAll('.sliders-off');
console.log(all_auto);


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

const off_slider = () => {
    clearInterval(interval)
    remove_slider_class();
    left_auto.textContent = 'Left Auto Off';
    right_auto.textContent = 'Right Auto Off';
    off_auto.textContent = 'No sliding';
    off_auto.classList.add('slider-on');
};

const next_auto_off = () => {
    next();
    off_slider();
};

const prev_auto_off = () => {
    prev();
    off_slider();
};


for (const next_img of next_btn) {
    next_img.addEventListener('click', next_auto_off);
};
for (const prev_img of prev_btn) {
    prev_img.addEventListener('click', prev_auto_off);
};

const remove_slider_class = () => {
    for (const slider_on of all_auto) {
        if (slider_on.classList.contains('slider-on')) {
            slider_on.classList.remove('slider-on');
        };
    };
};


let interval = null;
left_auto.addEventListener('click', () => {
    clearInterval(interval);
    remove_slider_class();
    left_auto.textContent = 'Left Auto On';
    right_auto.textContent = 'Right Auto Off';
    off_auto.textContent = 'No sliding';
    left_auto.classList.add('slider-on');
    interval = setInterval(prev, 7000);
});

off_auto.addEventListener('click', () => {
    off_slider();
});

right_auto.addEventListener('click', () => {
    clearInterval(interval);
    remove_slider_class();
    left_auto.textContent = 'Left Auto Off';
    right_auto.textContent = 'Right Auto On';
    off_auto.textContent = 'No sliding';
    right_auto.classList.add('slider-on');
    interval = setInterval(next, 7000)
});

right_auto.click();

//Removes the fadein animation on the initial visit
first_img.addEventListener('animationend', () => {
    first_img.classList.remove('homescreen-fadein');
});

