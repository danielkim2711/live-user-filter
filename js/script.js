const result = document.querySelector('#result');
const filter = document.querySelector('#filter');
const listItems = [];

async function fetchData() {
  const response = await fetch('https://randomuser.me/api?results=50');
  const { results } = await response.json();

  // Clear result
  result.textContent = '';

  results.forEach((user) => {
    const li = document.createElement('li');

    listItems.push(li);

    li.innerHTML = `
    <img src="${user.picture.large}" alt="${user.name.first}">
    <div class="user-info">
        <h4>${user.name.first} ${user.name.last}</h4>
        <p>${user.email}</p>
        <p>${user.location.city}, ${user.location.country}</p>
    </div>
    `;

    result.appendChild(li);
  });
}

function filterData(searchTerm) {
  listItems.forEach((item) => {
    if (item.textContent.toLowerCase().includes(searchTerm.toLowerCase())) {
      item.classList.remove('hide');
    } else {
      item.classList.add('hide');
    }
  });
}

fetchData();
filter.addEventListener('input', (e) => filterData(e.target.value));
