document.getElementById('loginBtn').addEventListener('click', () => {
  const data = {
    username: document.getElementById('username').value,
    password: document.getElementById('password').value
  };

  fetch('http://localhost:5000/api/auth/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  })
  .then(res => {
    if (!res.ok) throw new Error();
    return res.json();
  })
  .then(() => {
    window.location.href = 'admin-dashboard.html';
  })
  .catch(() => alert('Login failed'));
});
localStorage.setItem('admin', true);
