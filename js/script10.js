const controlsEl = document.querySelector("#controls");
const numberEl = controlsEl.firstElementChild;
const btnCreateEl = document.querySelector("button[data-create]");
const btnDestroyEl = document.querySelector("button[data-destroy]");
const boxesEls = document.querySelector("#boxes");

// console.dir(numberEl);
// console.log(numberEl.value);
const amount = parseInt(numberEl.value);
// console.log(amount);

const createBoxes = () => {
    const amount = parseInt(numberEl.value);
    const boxes = [];

    for (let i = 0; i < amount; i++) {
        const size = 30 + i * 10;
        const color = getRandomHexColor();

        const box = document.createElement('div');
        box.classList.add('box');
        box.style.width = `${size}px`;
        box.style.height = `${size}px`;
        box.style.backgroundColor = color;

        boxes.push(box);
    }
    // console.log(boxes);
    boxesEls.append(...boxes);
};

const destroyBoxes = () => {
    boxesEls.innerHTML = '';
};

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

btnCreateEl.addEventListener("click", createBoxes);
btnDestroyEl.addEventListener("click", destroyBoxes);

