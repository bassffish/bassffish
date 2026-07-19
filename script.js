function checkQuiz() {

    let score = 0;

    let results = "";


    // Question 1 - Fill in the blank
    let q1 = document.getElementById("q1").value.toLowerCase();

    if (q1 === "transfer") {
        score++;
        results += "<p style='color: green;'>Question 1: Correct</p>";
    } else {
        results += "<p style='color: red;'>Question 1: Incorrect (Answer: Transfer)</p>";
    }



    // Question 2
    let q2 = document.querySelector('input[name="q2"]:checked');

    if (q2 && q2.value === "browser") {
        score++;
        results += "<p style='color: green;'>Question 2: Correct</p>";
    } else {
        results += "<p style='color: red;'>Question 2: Incorrect (Answer: Web Browser)</p>";
    }



    // Question 3
    let q3 = document.querySelector('input[name="q3"]:checked');

    if (q3 && q3.value === "GET") {
        score++;
        results += "<p style='color: green;'>Question 3: Correct</p>";
    } else {
        results += "<p style='color: red;'>Question 3: Incorrect (Answer: GET)</p>";
    }



    // Question 4
    let q4 = document.querySelector('input[name="q4"]:checked');

    if (q4 && q4.value === "HTTP2") {
        score++;
        results += "<p style='color: green;'>Question 4: Correct</p>";
    } else {
        results += "<p style='color: red;'>Question 4: Incorrect (Answer: HTTP/2)</p>";
    }



    // Question 5
    let q5 = document.querySelectorAll('input[name="q5"]:checked');

    let correctAnswers = [
        "encryption",
        "ssl",
        "security"
    ];


    let selectedAnswers = [];

    q5.forEach(function(answer) {
        selectedAnswers.push(answer.value);
    });


    if (
        selectedAnswers.length === correctAnswers.length &&
        correctAnswers.every(answer => selectedAnswers.includes(answer))
    ) {

        score++;
        results += "<p style='color: green;'>Question 5: Correct</p>";

    } else {

        results += "<p style='color: red;'>Question 5: Incorrect (Select Encryption, SSL/TLS Certificates, and Secure Data Transfer)</p>";

    }



    let percentage = (score / 5) * 100;


    let finalMessage = "";


    if (percentage >= 60) {

        finalMessage =
        "<h2 style='color: green;'>Passed!</h2>";

    } else {

        finalMessage =
        "<h2 style='color: red;'>Needs Improvement</h2>";

    }



    document.getElementById("quizResult").innerHTML =
        finalMessage +
        "<h3>Total Score: " + score + "/5 (" + percentage + "%)</h3>" +
        results;

}



function resetQuiz() {

    document.getElementById("quizResult").innerHTML = "";

}
