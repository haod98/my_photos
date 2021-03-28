const prev_btn = document.querySelector('.j-prev');
const next_btn = document.querySelector('.j-next');
const ul = document.querySelector('.j-img-list');
const img_lists = document.querySelectorAll('.j-img-list > li');
const img_list_length = img_lists.length;

ul.style.width = img_list_length + '00' + '%';

next_btn.addEventListener('click', () => {
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
})
