const fontSizeControlEl = document.querySelector("#font-size-control");
const textEl = document.querySelector("#text");

fontSizeControlEl.addEventListener("input", (e) => {
    // console.dir(e);
    textEl.style.fontSize = `${e.target.value}px`;
    // console.log(e.target.value);
});