fetch('http://localhost:5000/api/bookings')
.then(res => res.json())
.then(data => {
  const table = document.getElementById('bookingTable');

  data.forEach(item => {
    const row = document.createElement('tr');

    row.innerHTML = `
      <td>${item.destination}</td>
      <td>${item.name}</td>
      <td>${item.email}</td>
      <td>${item.date}</td>
      <td>${item.persons}</td>
    `;

    table.appendChild(row);
  });
});
