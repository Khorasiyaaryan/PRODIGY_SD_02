let randomNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

function checkGuess() {
    let userGuess = document.getElementById('userGuess').value;
    let feedback = document.getElementById('feedback');
    let attemptsDisplay = document.getElementById('attempts');
    
    attempts++;
    
    if (userGuess == randomNumber) {
        feedback.textContent = `Congratulations! You guessed it right! 🎉`;
        feedback.style.color = 'green';
        attemptsDisplay.textContent = `Attempts: ${attempts}`;
    } else if (userGuess > randomNumber) {
        feedback.textContent = 'Too high! Try again.';
        feedback.style.color = 'red';
    } else {
        feedback.textContent = 'Too low! Try again.';
        feedback.style.color = 'red';
    }
}
