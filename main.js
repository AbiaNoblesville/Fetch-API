document.addEventListener('DOMContentLoaded', fetchData);

function fetchData() {
  const apiUrl = 'https://jsonplaceholder.typicode.com/posts';

  fetch(apiUrl)
    .then(response => {
      if (!response.ok) {
        throw new Error(`Network response was not ok: ${response.status}`);
      }
      return response.json();
    })
    .then(data => {
      displayData(data);
    })
    .catch(error => {
      console.error('Error fetching data:', error);
    });
}

function displayData(data) {
  const dataContainer = document.getElementById('data-container');
  data.forEach(post => {
    const postElement = document.createElement('div');
    postElement.innerHTML = `<h3>${post.title}</h3><p>${post.body}</p><hr>`;
    dataContainer.appendChild(postElement);
  });
}
