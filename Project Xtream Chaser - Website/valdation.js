const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    checkInputs();
});

function checkInputs(){
    const usernameValue = username.value
    const emailValue = email.value
    const passwordValue = password.value
    const password2Value = password2.value
    
    if(usernameValue === ''){
        setErrorFor(username, 'Username cannot be blank');
    }else{
        setSuccessFor(username);
    }

    if(emailValue === ''){
        setErrorFor(email, 'Email cannot be blank')
    }else if(!isEmail(emailValue)){
        setErrorFor(email, 'Email is not valid');
    }
    else{
        setSuccessFor(email)
    }

    if(passwordValue === ''){
        setErrorFor(password, 'Password cannot be blank')
    }
    else{
        setSuccessFor(password)
    }

    if(passwordValue === ''){
        setErrorFor(password, 'Password cannot be blank')
    }
    else if(password2Value != passwordValue){
        setErrorFor(password, 'Password does not match')
    }
    else{
        setSuccessFor(password)
    }
}

function setErrorFor(input, message){
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');

    small.innerText = message;

    formControl.className= 'form-control error'
}

function setSuccessFor(input){
    const formControl = input.parentElement;
    formControl.className= 'form-control success'
}

function isEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}