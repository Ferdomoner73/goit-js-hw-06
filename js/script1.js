const categoryEls = document.querySelectorAll(".item");

console.log("Кількість категорій:", categoryEls.length);


categoryEls.forEach((item) => {
    console.log("Category:", item.firstElementChild.textContent);
    console.log("Elements:", item.lastElementChild.children.length);
});