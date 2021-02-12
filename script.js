const form = document.getElementById('form');
const password1El = document.getElementById('password1');
const password2El = document.getElementById('password2');
const messageContainer = document.querySelector('.message-container');
const message = document.getElementById('message');

let isValid = false;
let passwordMatch = false;

function validateForm() {
    // using constraint api
    isValid = form.checkValidity();
    // style main message for an error
    if (!isValid) {
        message.textContent = 'Please fill out all fields !';
        message.style.color = 'red';
        messageContainer.style.borderColor = 'red';
        return;
    }
    //   check to see if password match
    if (password1El.value === password2El.value) {
        passwordMatch = true;
        password1El.style.borderColor = 'green';
        password2El.style.borderColor = 'green';


    } else {
        passwordMatch = false;
        message.textContent = 'Make sure password match.';
        message.style.color = 'red';
        messageContainer.style.borderColor = 'red';
        password1El.style.color = 'red';
        password2El.style.color = 'red';
        return;
    }
    // }if form is valid and password match
    if (isValid && passwordMatch) {
        message.textContent = 'Successfuly Registered!';
        message.style.color = 'green';
        messageContainer.style.borderColor = 'green';
    }

}

function storeFormData() {
    const user = {
        name: form.name.value,
        phone: form.phone.value,
        email: form.email.value,
        website: form.website.vaue,
        password: form.password.value
    };
    // do something with user data
    console.log(user);
}

function processFormData(e) {
    e.preventDefault();
    // validate form
    validateForm();
    // submit data if valid
    if (isValid && passwordMatch) {
        storeFormData();
    }
}

// Event listener
form.addEventListener('submit', processFormData);