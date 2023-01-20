const inputRef = document.querySelector('#validation-input');

inputRef.addEventListener(`blur`, onInputBlur);

function onInputBlur(event) {
    if (event.currentTarget.value.length > (inputRef.dataset.length)) {
     inputRef.classList.remove('invalid');
     inputRef.classList.add('valid');
    } else {
        inputRef.classList.add('invalid');
        inputRef.classList.remove('valid')
    }
}