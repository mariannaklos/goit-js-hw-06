const refs = {
formInput: document.querySelector(`#name-input`),
formOutput: document.querySelector(`#name-output`),
}

refs.formInput.addEventListener(`input`, onInputChange);
function onInputChange(event) {
  if (event.currentTarget.value !== "") {
     refs.formOutput.textContent = event.currentTarget.value;
  } else {
    refs.formOutput.textContent = `Anonymous`;
  }
}
































