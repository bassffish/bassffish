
function gradeQuiz(){

    let score = 0;

    let results = "";

    let totalQuestions = 5;


    // Question 1

    let q1 = document.getElementById("q1").value.trim().toLowerCase();

    if(
        q1 === "hypertext transfer protocol" ||
        q1 === "hypertext transfer protocol (http)"
    ){

        score++;

        results += `
        <p class="correct">
        Question 1: Correct
        </p>
        <p>
        Answer: Hypertext Transfer Protocol
        </p>
        `;

    }
    else{

        results += `
        <p class="incorrect">
        Question 1: Incorrect
        </p>
        <p>
        Correct Answer: Hypertext Transfer Protocol
        </p>
        `;

    }



    // Question 2

    let q2 = document.querySelector('input[name="q2"]:checked');


    if(q2 && q2.value === "correct"){

        score++;

        results += `
        <p class="correct">
        Question 2: Correct
        </p>
        <p>
        Answer: Transfer information between browsers and servers
        </p>
        `;

    }

    else{

        results += `
        <p class="incorrect">
        Question 2: Incorrect
        </p>
        <p>
        Correct Answer: Transfer information between browsers and servers
        </p>
        `;

    }



    // Question 3

    let q3 = document.querySelector('input[name="q3"]:checked');


    if(q3 && q3.value === "correct"){

        score++;

        results += `
        <p class="correct">
        Question 3: Correct
        </p>
        <p>
        Answer: HTTP/2
        </p>
        `;

    }

    else{

        results += `
        <p class="incorrect">
        Question 3: Incorrect
        </p>
        <p>
        Correct Answer: HTTP/2
        </p>
        `;

    }



    // Question 4

    let q4 = document.querySelector('input[name="q4"]:checked');


    if(q4 && q4.value === "correct"){

        score++;

        results += `
        <p class="correct">
        Question 4: Correct
        </p>
        <p>
        Answer: HTTPS
        </p>
        `;

    }

    else{

        results += `
        <p class="incorrect">
        Question 4: Incorrect
        </p>
        <p>
        Correct Answer: HTTPS
        </p>
        `;

    }



    // Question 5

    let q5 = document.querySelectorAll('input[name="q5"]:checked');

    let q5Correct = true;

    let selected = 0;


    q5.forEach(function(answer){

        selected++;

        if(answer.value !== "correct"){

            q5Correct = false;

        }

    });


    if(selected !== 3){

        q5Correct = false;

    }


    if(q5Correct){

        score++;

        results += `
        <p class="correct">
        Question 5: Correct
        </p>
        <p>
        Answers: Faster data transfer, Improved performance, Better security support
        </p>
        `;

    }

    else{

        results += `
        <p class="incorrect">
        Question 5: Incorrect
        </p>
        <p>
        Correct Answers: Faster data transfer, Improved performance, Better security support
        </p>
        `;

    }



    let percentage = (score / totalQuestions) * 100;


    let finalResult;


    if(score >= 3){

        finalResult = `
        <h2 class="pass">
        PASS
        </h2>
        `;

    }

    else{

        finalResult = `
        <h2 class="fail">
        FAIL
        </h2>
        `;

    }



    document.getElementById("results").innerHTML = `

    ${finalResult}

    <h3>
    Score: ${score}/${totalQuestions}
    (${percentage}%)
    </h3>

    <hr>

    ${results}

    `;

}



function resetQuiz(){

    document.getElementById("results").innerHTML = "";

}
