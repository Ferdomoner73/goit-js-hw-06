const ingredients = [
    "Potatoes",
    "Mushrooms",
    "Garlic",
    "Tomatos",
    "Herbs",
    "Condiments",
];

const ingredientsEl = document.querySelector("#ingredients");

console.log(ingredientsEl);

const itemsArray = ingredients.map(el => {
    const El = document.createElement("li");
    El.textContent = el;
    El.classList.add("item");
    return El;
});

ingredientsEl.append(...itemsArray);