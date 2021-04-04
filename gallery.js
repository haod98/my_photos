const stage_img = document.querySelectorAll('.j-gallery > li > a');
const stage_overlay = document.querySelector('.j-overlay-container');
const stage = document.querySelector('.j-stage');
const stage_close = document.querySelector('.j-overlay-close');
const stage_tns = document.querySelector('.j-overlay_thumbnails')
const prev_img = document.querySelector('.j-prev');
const next_img = document.querySelector('.j-next');

console.log(stage_tns);

const create_img = function (e) {
    stage.innerHTML = '';
    const create_img = document.createElement('img');
    const href = e.currentTarget.getAttribute('href');
    create_img.setAttribute('src', href);
    stage.appendChild(create_img);
}

const close_overlay = () => {
    stage_overlay.style.display = 'none';
};

const prev_img_click = () => {
    const stage_tns_img = stage_tns.querySelectorAll('img');
    let i;
    let idx = false;
    for (i = 0; i < stage_tns_img.length; i++) {
        if (stage_tns_img[i].classList.contains('selected')) {
            idx = i;
            break;
        };
    };

    idx--;

    if (idx === -1) {
        idx = stage_tns_img.length - 1;
    };

    stage_tns.querySelector(`li:nth-child(${idx + 1}) img`).click();
};

const next_img_click = () => {
    const stage_tns_img = stage_tns.querySelectorAll('img');
    let i;
    let idx = false;
    for (i = 0; i < stage_tns_img.length; i++) {
        if (stage_tns_img[i].classList.contains('selected')) {
            idx = i;
            break;
        };
    };
    idx++;
    if (idx === stage_tns_img.length) {
        idx = 0;
    };
    stage_tns.querySelector(`li:nth-child(${idx + 1}) img`).click();
};

prev_img.addEventListener('click', prev_img_click);
next_img.addEventListener('click', next_img_click);

//Arrow Controls for gallery
window.addEventListener('keyup', (e) => {
    if (e.key === 'ArrowLeft') {
        prev_img_click();
    };
    if (e.key === 'ArrowRight') {
        next_img_click();
    };
    if (e.key === 'Escape') {
        close_overlay();
    };
});


for (const single_img of stage_img) {
    single_img.addEventListener('click', (e) => {
        e.preventDefault();
        create_img(e);
        const tn_list = e.currentTarget.parentNode.parentNode;
        const overlay_tn = document.createElement('ul');
        stage_tns.innerHTML = '';
        overlay_tn.innerHTML = tn_list.innerHTML;
        for (const tn_li of overlay_tn.querySelectorAll('li')) {
            tn_li.classList.remove('flex-item');
        };
        stage_tns.appendChild(overlay_tn);
        for (const tn_img of overlay_tn.querySelectorAll('a')) {
            tn_img.addEventListener('click', (e) => {
                e.preventDefault();
                create_img(e);
                const img_outline = e.currentTarget.parentNode.querySelector('img');
                console.log(img_outline);
                for (const remove_outline of overlay_tn.querySelectorAll('img.selected')) {
                    remove_outline.classList.remove('selected');
                }
                img_outline.classList.add('selected');
            });
        };
        const current_href = e.currentTarget.getAttribute('href');
        stage_tns.querySelector(`a[href="${current_href}"]`).parentNode.querySelector('img').classList.add('selected');

        stage_overlay.style.display = 'flex';
    });
};

stage_close.addEventListener('click', close_overlay);

