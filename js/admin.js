document.addEventListener('DOMContentLoaded', () => {

  const form = document.querySelector('.destination-form');
  const list = document.querySelector('.destination-list');

  const API_URL = 'https://travel-explorer-api-4fgr.onrender.com';

  // Load destinations from MongoDB
  async function loadDestinations() {
    list.innerHTML = '';
    const res = await fetch(API_URL);
    const data = await res.json();

    data.forEach(dest => {
      const card = document.createElement('div');
      card.className = 'destination-card';
      card.innerText = dest.name + ' (' + dest.city + ')';
      list.appendChild(card);
    });
  }

  // Add new destination
  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const name = form.querySelectorAll('input')[0].value.trim();
    const city = form.querySelectorAll('input')[1].value.trim().toLowerCase();

    if (!name || !city) {
      alert('Please fill all fields');
      return;
    }

    await fetch(API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ name, city })
    });

    form.reset();
    loadDestinations();
  });

  loadDestinations();
});