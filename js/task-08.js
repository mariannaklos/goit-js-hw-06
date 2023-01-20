const form = document.querySelector('.login-form');


form.addEventListener(`submit`,formSubmit);
function formSubmit (event) {
    
const formElements = event.currentTarget.elements;
const mail = formElements.email.value;
const password = formElements.password.value;
    
    event.preventDefault(); 

const formData = {
    mail,
    password,
};

    if (mail === '' || password === '') {
        alert('Будь ласка заповніть усі поля!')
    } 
    console.log(formData)
    
    form.reset();
}



