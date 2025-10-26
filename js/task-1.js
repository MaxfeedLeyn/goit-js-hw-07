const list = document.querySelector('#categories');
const items = list.querySelectorAll('.item');

console.log(`Number of categories: ${items.length}`);

items.forEach(element => {
  const title = element.querySelector('h2').textContent;
  const elements = element.querySelectorAll('li').length;
  console.log(`Category: ${title}`);
  console.log(`Elements: ${elements}`);
});
