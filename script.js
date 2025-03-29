// Function to get a random score between 0 and 10
function getRandomScore() {
    return Math.floor(Math.random() * 11); // Generates a number from 0 to 10
}

// Generate a random score
const score = getRandomScore();

// Display the score
document.getElementById('score').innerText = score;

// Generate a message based on the score
const messageElement = document.getElementById('message');
if (score >= 8) {
    messageElement.innerText = "Amazing! You're a quiz wizard! 🎉";
    triggerConfetti(); // Start confetti when score is above 8
} else if (score >= 5) {
    messageElement.innerText = "Good job! Keep practicing. 👍";
} else {
    messageElement.innerText = "Don't worry, try again! 💪";
}

// Confetti effect for 5 seconds covering the entire page
function triggerConfetti() {
    let duration = 5 * 1000; // 5 seconds
    let end = Date.now() + duration;

    (function frame() {
        confetti({
            particleCount: 10,
            spread: 160,
            startVelocity: 30,
            origin: { x: Math.random(), y: Math.random() } // Random points on the screen
        });

        if (Date.now() < end) {
            requestAnimationFrame(frame);
        }
    })();
}

// Retake Quiz Function
function retakeQuiz() {
    window.location.href = "quiz.html"; // Change to your quiz page URL
}
