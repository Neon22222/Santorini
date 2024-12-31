// List of 365 quotes
var quotes = [
    "Believe you can and you're halfway there.",
    "In the middle of every difficulty lies opportunity.",
    "You are never too old to set another goal or to dream a new dream.",
    "The future belongs to those who believe in the beauty of their dreams.",
    "Start where you are. Use what you have. Do what you can.",
    "The only way to do great work is to love what you do.",
    "Believe in yourself, take on your challenges, dig deep within yourself to conquer fears. Never let anyone bring you down. You got this.",
    "Success is not final, failure is not fatal: It is the courage to continue that counts.",
    "The only limit to our realization of tomorrow will be our doubts of today.",
    "You are never too old to set another goal or to dream a new dream.",
    "The only person you should try to be better than is the person you were yesterday.",
    "Don't watch the clock; do what it does. Keep going.",
    "Difficulties in life are intended to make us better, not bitter.",
    "The greatest glory in living lies not in never falling, but in rising every time we fall.",
    "It does not matter how slowly you go as long as you do not stop.",
    "You don't have to be perfect to be amazing.",
    "The future depends on what you do today.",
    "You are enough just as you are.",
    "Don't be pushed around by the fears in your mind. Be led by the dreams in your heart.",
    "Believe in yourself, and the rest will fall into place. Have faith in your own abilities, work hard, and there is nothing you cannot accomplish.",
    "The only thing that stands between you and your dream is the will to try and the belief that it is actually possible.",
    // Add the remaining quotes here
];

// Function to generate a random quote
  function generateQuote() {
    var randomIndex = Math.floor(Math.random() * quotes.length);
    var randomQuote = quotes[randomIndex];
  
    document.getElementById("quote").textContent = randomQuote;
  }
  
  // Function to react to the quote
  function react(reaction) {
    // Perform actions based on the selected reaction
    if (reaction === "flower") {
      // Add your flower reaction logic here
      console.log("Flower reaction");
    } else if (reaction === "emoji") {
      // Add your emoji reaction logic here
      console.log("Emoji reaction");
    }
  }
  
  // Initial quote generation on page load
  generateQuote();
  