const inputNameEl = document.querySelector("#name-input");
const outputNameEl = document.querySelector("#name-output");

const handleReactionOnInput = (event) => {

   // console.log(event);

   outputNameEl.textContent = event.target.value;
   // console.dir(inputNameEl);

   if (inputNameEl.value === '') {
      outputNameEl.textContent = 'Anonymous';
   }
}

inputNameEl.addEventListener("input", handleReactionOnInput);