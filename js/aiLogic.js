// Simple AI Travel Suggestion Logic (No API)
function getTravelSuggestion(budget, mood) {

    budget = Number(budget);
  
    if (budget < 20000 && mood === 'romantic') {
      return 'Paris';
    }
  
    if (budget > 50000 && mood === 'adventure') {
      return 'Bali';
    }
  
    return 'London';
  }