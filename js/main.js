document.addEventListener('DOMContentLoaded', () => {
  const cards = document.querySelectorAll('.card');

  cards.forEach(card => {
    card.addEventListener('click', () => {
      const city = card.dataset.city;
      window.location.href = window.location.href = "details.html?city=" + city;
    });
  });
});
document.addEventListener('DOMContentLoaded', function () {

  const btn = document.getElementById('suggestBtn');

  if (btn) {
    btn.addEventListener('click', function () {

      const budget = document.getElementById('budget').value;
      const mood = document.getElementById('mood').value;

      if (!budget || !mood) {
        document.getElementById('result').innerText =
          "Please enter budget and select mood";
        return;
      }

      const destination = getTravelSuggestion(budget, mood);

      document.getElementById('result').innerText =
        "Recommended Destination: " + destination;
    });
  }

});
document.addEventListener('DOMContentLoaded', function () {

  // GSAP ScrollTrigger register
  gsap.registerPlugin(ScrollTrigger);

  // Card Scroll Animation
  gsap.from('.card', {
    scrollTrigger: {
      trigger: '.card',
      start: 'top 80%',
    },
    opacity: 0,
    y: 50,
    duration: 1,
    stagger: 0.2
  });

});