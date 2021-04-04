//Form 

const form = document.querySelector('.j-form');
const input = document.querySelectorAll('.j-mandatory-input');
const input_name = document.querySelector('.j-mandatory-input[name="name"]')
const char_count = document.querySelector('.j-charcount');
const message = document.querySelector('[name="message"');
const email = document.querySelector('[name="email"');
console.log(email);
const numbers = '0123456789';
form.addEventListener('submit', (e) => {
    let i = null;
    for (const error of input) {
        if (error.tagName === 'INPUT') {
            error.classList.remove('error');
        };
        if (error.tagName === 'INPUT' || error.tagName === 'TEXTAREA') {
            if (error.value.trim() === '') {
                error.classList.add('error');
            };
        };
    };

    //Checks if e-mail starts with @
    if (email.value.charAt(0) === '@' ||
        email.value.charAt(email.value.length - 1) === '@') {
        email.classList.add('error');
    };



//Checks if there are numbers in name
for (i = 0; i < input_name.value.length; i++) {
    const text = input_name.value.trim();
    const char = text.charAt(i);
    if (numbers.indexOf(char) !== -1) {
        input_name.classList.add('error');
    };
};


let start_char = parseInt(char_count.innerHTML);

message.addEventListener('keyup', (e) => {
    current_char = start_char - e.target.value.length;
    char_count.textContent = current_char;
    if (current_char < 0) {
        message.classList.add('error');
    } else {
        message.classList.remove('error');
    }

});
let contains_error = false;

for (const contain_error of input) {
    if (contain_error.classList.contains('error')) {
        contains_error = true;
    };
};

if (contains_error === true) {
    e.preventDefault();
}



});


