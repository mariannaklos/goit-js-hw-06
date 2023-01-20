function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const changeBtn = document.querySelector('.change-color')
console.log(changeBtn)
const spanColor = document.querySelector('.color')

changeBtn.addEventListener('click', onClickBtn)

function onClickBtn(event) {
  event.preventDefault();
  let color = getRandomHexColor()
  document.body.style.backgroundColor = color
  spanColor.textContent = color
}
