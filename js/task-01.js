const categoriesRef = document.querySelectorAll(".item");
console.log(`В списке ${categoriesRef.length} категории.`);

categoriesRef.forEach((item) =>
  console.log(
    `Категория: ${item.firstElementChild.textContent}\nКоличество элементов: ${item.lastElementChild.children.length}`
  )
);
