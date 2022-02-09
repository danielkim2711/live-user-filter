const result = document.querySelector('#result');
const filter = document.querySelector('#filter');
const listItems = [];

fetchData();

async function fetchData() {
  const response = await fetch('https://randomuser.me/api?results=50');
  const data = await response.json();
  console.log(data);
}
