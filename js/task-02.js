const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

// Reffering to ul with id
const ingredientsRef = document.querySelector("#ingredients");

// creating li with a name and a class
const elements = ingredients.map((ingredient) => {
  const itemEl = document.createElement("li");

  itemEl.textContent = ingredient;
  itemEl.classList.add("item");

  return itemEl;
});

// inserting into HTML
ingredientsRef.append(...elements);
