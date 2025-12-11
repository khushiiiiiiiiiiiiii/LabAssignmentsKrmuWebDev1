const quizQuestions = [
    { question: "2 + 2 = ?", answer: "4" },
    { question: "Capital of India?", answer: "delhi" },
    { question: "JS stands for (short): ?", answer: "javascript" },
    { question: "HTML stands for?", answer: "hypertext markup language" },
    { question: "Square root of 81?", answer: "9" }
];

function runQuiz() {
    let score = 0;

    for (let i = 0; i < quizQuestions.length; i++) {
        const user = prompt(quizQuestions[i].question);

        if (!user) {
            alert("No answer given.");
            continue;
        }

        if (user.trim().toLowerCase() === quizQuestions[i].answer.toLowerCase()) {
            alert("Correct!");
            score += 1;
        } else {
            alert("Wrong! Correct answer: " + quizQuestions[i].answer);
        }
    }

    alert("Quiz over! You scored " + score + " / " + quizQuestions.length);
}

runQuiz();