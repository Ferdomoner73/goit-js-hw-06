const widgetEl = document.querySelector(".widget");
const colorValueEl = document.querySelector(".color");
const changeColorEl = widgetEl.lastElementChild;
const backgroundColorEl = widgetEl.parentElement;

changeColorEl.addEventListener("click", (e) => {
    
    colorValueEl.textContent = getRandomHexColor();

    backgroundColorEl.style.backgroundColor = `${colorValueEl.textContent}`;

    console.log(colorValueEl.textContent);
});



function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
