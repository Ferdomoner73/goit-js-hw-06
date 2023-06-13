const counterEl = document.querySelector("#counter");
// console.log(counterEl)
;const incrementBtnEl = counterEl.lastElementChild;
// console.log(incrementBtnEl);
const decrementBtnEl = counterEl.firstElementChild;
// console.log(decrementBtnEl);
const counterNumberEl = decrementBtnEl.nextElementSibling;
// console.log(counterNumberEl);

let counterValue = 0;
counterNumberEl.textContent = counterValue;

const decrementOnButtonClick = () => { 
    counterValue -= 1;
    counterNumberEl.textContent = counterValue;
    // console.log(`Decremention correct`);
};
const incrementOnButtonClick = () => {
    counterValue += 1;
    counterNumberEl.textContent = counterValue;
    // console.log(`Incremention correct`);
};

decrementBtnEl.addEventListener("click", decrementOnButtonClick);
incrementBtnEl.addEventListener("click", incrementOnButtonClick);