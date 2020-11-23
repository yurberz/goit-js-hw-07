const ingredients = [
  "Картошка",
  "Грибы",
  "Чеснок",
  "Помидоры",
  "Зелень",
  "Приправы",
];

const createIngredient = ingredients.map((ingredient) => {
  const ingredientRef = document.createElement("li");
  ingredientRef.classList.add("ingredients__item");
  ingredientRef.textContent = `${ingredient}`;

  return ingredientRef;
});

const ingredientsRef = document.querySelector("#ingredients");
ingredientsRef.append(...createIngredient);
