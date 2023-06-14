const validationInputEl = document.querySelector("#validation-input");

validationInputEl.addEventListener('focus', (e) => {
    validationInputEl.classList.remove("invalid");
    validationInputEl.classList.remove("valid");
});

validationInputEl.addEventListener('blur', (e) => {
    // console.dir(validationInputEl);

    if (e.target.value.length == validationInputEl.dataset.length) {
        validationInputEl.classList.add("valid");
        validationInputEl.classList.remove("#validation-input");
    } else { validationInputEl.classList.add("invalid") };

    // console.log(e.target.value.length);
});