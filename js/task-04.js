
const valueBtn = document.querySelector(`#value`);
const btnDecrement = document.querySelector(`[data-action="decrement"]`);
const btnIncrement = document.querySelector(`[data-action="increment"]`);
let counterValue = 0;
const increment = () => {
    counterValue += 1;
   valueBtn.textContent = counterValue;
    console.log(increment)
}
const decrement = () => {
    counterValue -= 1;
    valueBtn.textContent = counterValue;
};
btnIncrement.addEventListener('click', increment);
btnDecrement.addEventListener('click', decrement);
