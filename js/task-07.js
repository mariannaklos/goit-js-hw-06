const inputFont = document.querySelector('#font-size-control');
const frontText = document.querySelector('#text');

inputFont.addEventListener(`input`, onInputText);
function onInputText(event) {
   frontText.style.fontSize = event.currentTarget.value + `px`;
}