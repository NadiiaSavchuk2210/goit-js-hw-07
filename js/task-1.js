const categories = document.querySelectorAll('.item');
const categoriesCount = categories.length;

console.log(`Number of categories: ${categoriesCount}`);

categories.forEach(category => {
  const categoryTitle = category.querySelector('h2').textContent;
  console.log(`Category: ${categoryTitle}`);
  const categoryItemsCount = category.querySelectorAll('ul li').length;
  console.log(`Elements: ${categoryItemsCount}`);
});
