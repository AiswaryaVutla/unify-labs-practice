function startGame() {
  const secretNumber = Math.floor(Math.random() * 100) + 1;
  const maxAttempts = 5;
  let attempts = 0;
  let guessedCorrectly = false;

  while (attempts < maxAttempts) {
    let userGuess = prompt(
      `Attempt ${attempts + 1} of ${maxAttempts}\nGuess a number between 1 and 100:`
    );

    // Convert string input to number
    userGuess = Number(userGuess);

    // Handle invalid input
    if (isNaN(userGuess)) {
      alert("❌ Please enter a valid number!");
      continue;
    }

    attempts++;

    if (userGuess > secretNumber) {
      alert("📈 Too High!");
    } else if (userGuess < secretNumber) {
      alert("📉 Too Low!");
    } else {
      alert(`🎉 Correct! You guessed the number in ${attempts} attempts.`);
      guessedCorrectly = true;
      break;
    }
  }

  if (!guessedCorrectly) {
    alert(`😢 Game Over! The correct number was ${secretNumber}.`);
  }
}
