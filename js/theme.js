const toggle = document.getElementById('themeToggle');


toggle.addEventListener('click', () => {
document.body.classList.toggle('dark');
localStorage.setItem('theme', document.body.className);
});
body.dark
 {
background: rgba(17, 17, 17, 1);
color: rgba(255, 255, 255, 1);
}
document.getElementById('themeBtn').addEventListener('click', () => {
  document.body.classList.toggle('dark');
});
gsap.from("h2", {
  opacity: 0,
  y: 40,
  duration: 1
});
