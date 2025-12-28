document.addEventListener('DOMContentLoaded', function () {

    // URL থেকে city name নাও
    const params = new URLSearchParams(window.location.search);
    const city = params.get('city');
  
    const gallery = document.getElementById('gallery');
  
    // Safety check
    if (!city) {
      gallery.innerHTML = "<p>No city selected</p>";
      return;
    }
  
    // Auto load images
    for (let i = 1; i <= 6; i++) {
      const img = document.createElement('img');
      img.src ="../public/images/+ city + "/" +".jpg;
      img.loading = 'lazy';
      img.alt = city + " image " + i;
      gallery.appendChild(img);
    }
  
  });
  fetch('http://localhost:5000/api/destinations')
.then(res => res.json())
.then(data => {
  const container = document.getElementById('destinations');

  data.forEach(item => {
    const div = document.createElement('div');
    div.innerHTML = `
      <img src="${item.image}" width="200">
      <h3>${item.name}</h3>
    `;
    container.appendChild(div);
  });
});
fetch('http://localhost:5000/api/destinations')
.then(res => res.json())
.then(data => {
  const container = document.getElementById('destinations');

  data.forEach(item => {
    const card = document.createElement('div');
    card.classList.add('card');

    card.innerHTML = `
      <img src="${item.image}" width="200">
      <h3>${item.name}</h3>
    `;

    card.addEventListener('click', () => {
      window.location.href = `details.html?city=${item.city}&name=${item.name}`;
    });

    container.appendChild(card);
  });
});
