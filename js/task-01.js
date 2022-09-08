// Number of categories
const itemsCategoriesRef = document.querySelectorAll("#categories>li");
console.log(`Number of categories: ${itemsCategoriesRef.length}`);

itemsCategoriesRef.forEach((item) => {
  console.log(`Category: ${item.firstElementChild.textContent}`);
  console.log(`Elements: ${item.lastElementChild.children.length}`);
});

// // First
// console.log(`Category: ${itemsCategoriesRef[0].firstElementChild.textContent}`);
// console.log(
//   `Elements: ${itemsCategoriesRef[0].lastElementChild.children.length}`
// );
// // Second
// console.log(`Category: ${itemsCategoriesRef[1].firstElementChild.textContent}`);
// console.log(
//   `Elements: ${itemsCategoriesRef[1].lastElementChild.children.length}`
// );
// // Third
// console.log(`Category: ${itemsCategoriesRef[2].firstElementChild.textContent}`);
// console.log(
//   `Elements: ${itemsCategoriesRef[2].lastElementChild.children.length}`
// );
