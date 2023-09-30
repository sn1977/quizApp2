let questions = [
    {
        "html": [
            {
                "question": "Wer hat HTML erfunden?",
                "answer_1": "Robbie William's",
                "answer_2": "Lady Gaga",
                "answer_3": "Tim Bernes-Lee",
                "answer_4": "Justin Bieber",
                "right_answer": 3
            },
            {
                "question": "Was bedeutet das HTML Tag &lt;a&gt;?",
                "answer_1": "Text fett",
                "answer_2": "Container",
                "answer_3": "Ein Link",
                "answer_4": "Kursiv",
                "right_answer": 3
            },
            {
                "question": "Wie bindet man eine Website in eine Website ein?",
                "answer_1": "&lt;iframe&gt;, &lt;frame&gt;, and &lt;frameset&gt",
                "answer_2": "&lt;iframe&gt;",
                "answer_3": "&lt;frame&gt;",
                "answer_4": "&lt;frameset&gt",
                "right_answer": 2
            },
            {
                "question": "Wie definiert man in Javascript eine Variable?",
                "answer_1": "let 100 = rate;",
                "answer_2": "100 = let rate;",
                "answer_3": "rate = 100",
                "answer_4": "let rate = 100;",
                "right_answer": 4
            },
        ],

        "css": [
            {
                "question": "Was ist CSS?",
                "answer_1": "Cascading Style Sheets",
                "answer_2": "Context Style Sheets",
                "answer_3": "Creative Style Sheets",
                "answer_4": "Coded Style Sheets",
                "right_answer": 1
            },
            {
                "question": "Welches ist das Schlüsselelement des CSS-Layouts?",
                "answer_1": "HTML-Tags",
                "answer_2": "Gruppierung",
                "answer_3": "Box-Modell",
                "answer_4": "Seitenlayout",
                "right_answer": 3
            },
            {
                "question": "Welches ist keine Eigenschaft, die in CSS definiert werden kann?",
                "answer_1": "Größe",
                "answer_2": "Form",
                "answer_3": "Farbe",
                "answer_4": "Name",
                "right_answer": 4
            },
            {
                "question": "Wie wird ein <div>-Container in einer Flex-Box horizontal zentriert?",
                "answer_1": "align-text: center;",
                "answer_2": "align-items: center;",
                "answer_3": "justifiy-content: center;",
                "answer_4": "position: center;",
                "right_answer": 3
            },

        ],

        "js": [
            {
                "question": "Was ist eine Funktion in JavaScript?",
                "answer_1": "Eine Funktion ist ein Abschnitt des Codes, den man mehrmals verwenden kann.",
                "answer_2": "Eine Funktion ist ein weiteres Element einer Beschreibungssprache.",
                "answer_3": "Eine Funktion ist ein Abschnitt des Codes, der den Style eines Objektes bestimmt.",
                "answer_4": "Eine Funktion ist ein Grundbaustein in JavaScript",
                "right_answer": 1
            },
            {
                "question": "Was ist JavaScript?",
                "answer_1": "JavaScript ist eine Skriptsprache, die speziell für die Astrophysik entwickelt wurde.",
                "answer_2": "JavaScript ist nur eine objektorientierte Programmiersprache.",
                "answer_3": "JavaScript ist keine sehr benutzerfreundliche Programmiersprache.",
                "answer_4": "JavaScript dient dem Hinterlegen von Logik und dynamischem Verhalten von Webseiten und Anwendungen.",
                "right_answer": 4
            },
            {
                "question": "Wie bindet man eine Website in eine Website ein?",
                "answer_1": "&lt;iframe&gt;, &lt;frame&gt;, and &lt;frameset&gt",
                "answer_2": "&lt;iframe&gt;",
                "answer_3": "&lt;frame&gt;",
                "answer_4": "&lt;frameset&gt",
                "right_answer": 2
            },
            {
                "question": "Wie definitiert man in Javascript eine Variable?",
                "answer_1": "let 100 = rate;",
                "answer_2": "100 = let rate;",
                "answer_3": "rate = 100",
                "answer_4": "let rate = 100;",
                "right_answer": 4
            },
        ],


        "java": [
            {
                "question": "Welche Version von Java wird zurzeit am häufigsten verwendet?",
                "answer_1": "Java 1.4",
                "answer_2": "Java 2",
                "answer_3": "Java 8",
                "answer_4": "Java 12",
                "right_answer": 3
            },
            {
                "question": "Was sind die grundlegenden Merkmale der Programmiersprache Java?",
                "answer_1": "Objektorientierung, dynamisches Typing und Referenztypen",
                "answer_2": "Objektorientierung, statisches Typing und Referenztypen",
                "answer_3": "Komposition, dynamisches Typing und Referenztypen",
                "answer_4": "Komposition, statisches Typing und Referenztypen",
                "right_answer": 1
            },
            {
                "question": "Welche Arten von Anwendungen können mit Java erstellt werden?",
                "answer_1": "Webanwendungen",
                "answer_2": "Anwendungen für Smartphones",
                "answer_3": " Desktop-Anwendungen",
                "answer_4": "Alle oben genannten",
                "right_answer": 4
            },
            {
                "question": "Was sind die Vorteile, die Java zu anderen Programmiersprachen bietet?",
                "answer_1": "Portabiltät und Robustheit",
                "answer_2": "Portabilität und Langlebigkeit",
                "answer_3": "Flexibilität und Robustheit",
                "answer_4": "Flexibilität und Langlebigkeit",
                "right_answer": 1
            }

        ]
    }
];

let currentQuestion = 0;
let currentTopic = null;  // Hält den aktuellen ausgewählten Wert
let questionCount = 0;
let rightQuestions = 0;
let AUDIO_SUCCESS = new Audio('audio/correct-answer.mp3');
let AUDIO_FAIL = new Audio('audio/false-answer.mp3');
let selectedAnswer = '';

let topicSelected = false; // Globale Variable, um zu verfolgen, ob getTopic(i) aufgerufen wurde
let answerClicked = false; // Globale Variable, um den Status der ausgewählten Antwort zu verfolgen

function getTopic(i) {
    if (currentTopic !== null) {
        // Wenn bereits ein Thema ausgewählt wurde, rückgängig machen
        document.getElementById(`marker-${currentTopic}`).classList.add('d-none');
    }
    currentTopic = i;  // Überschreibt den aktuellen Wert von currentTopic
    let topicUppercase = currentTopic.toUpperCase();

    document.getElementById('getTopic').innerHTML = `
        Welcome to <br>The Awesome <b> ${topicUppercase} </b> Quiz
    `;
    document.getElementById(`marker-${i}`).classList.remove('d-none');
    topicSelected = true;
}

function showQuestion() {
    let question = questions[currentQuestion];
    document.getElementById('countQuestions').innerHTML = questionCount + 1; // Zeigt die aktuelle Fragenummer an
    document.getElementById('questionText').innerHTML = question[currentTopic][questionCount]['question'];
    document.getElementById('answer_1').innerHTML = question[currentTopic][questionCount]['answer_1'];
    document.getElementById('answer_2').innerHTML = question[currentTopic][questionCount]['answer_2'];
    document.getElementById('answer_3').innerHTML = question[currentTopic][questionCount]['answer_3'];
    document.getElementById('answer_4').innerHTML = question[currentTopic][questionCount]['answer_4'];
}

function showCountQuestions() {
    const questionCountInTopic = questions[0][currentTopic].length; // Anzahl der Fragen zum aktuellen Thema
    document.getElementById('allQuestions').innerHTML = questionCountInTopic;
    document.getElementById('allQuestionsTopic').innerHTML = questionCountInTopic;
    document.getElementById('rightCountQuestions').innerHTML = rightQuestions;
}

function showQuestions() {
    if (!topicSelected) {
        alert("Bitte wählen Sie zuerst ein Thema aus.");
        return; // Die Funktion wird nicht weiter ausgeführt
    }
    document.getElementById('cardBody').innerHTML = `
        <div class="question-box" id="endScreen" style="display: none">
            <img src="Quizapp/brain%20result.png" alt="brainResult" class="img-result">
            <h2 class="h2-endScreen">COMPLETE <br> ${currentTopic.toUpperCase()} Quiz</h2>
            <div class="score-endScreen">
                <h2 class="color-score">YOUR SCORE</h2>
                <h2 class="score-result"> <b id="rightCountQuestions"></b> / <b id="allQuestionsTopic"></b></h2>
            </div>
            <div class="btn-position-endScreen">
                <button type="button" class=" btn-endScreen">SHARE</button>
                <button type="button" class="btn-endScreen btn-distance" onClick="replayGame()">REPLAY</button>
            </div>
            <img src="Quizapp/tropy.png" class="img-trophy">
        </div>
        <h2 id="questionText"></h2>
        <div class="question-box" id="questionBody">
            <div class="card mb-2 quiz-answer-card" onclick="answer('answer_1')">
                <div class="card-body question-selection">
                <div class="card-selection">A</div>
                    <span id="answer_1" class="span-width"></span>
                </div>
            </div>
            <div class="card mb-2 quiz-answer-card" onclick="answer('answer_2')">
                <div class="card-body question-selection">
                <div class="card-selection">B</div>
                    <span id="answer_2" class="span-width"></span>
                </div>
            </div>
             <div class="card mb-2 quiz-answer-card" onclick="answer('answer_3')">
                <div class="card-body question-selection">
                <div class="card-selection">C</div>
                    <span id="answer_3" class="span-width"></span>
                </div>
            </div>
             <div class="card mb-2 quiz-answer-card" onclick="answer('answer_4')">
                <div class="card-body question-selection">
                <div class="card-selection">D</div>
                    <span id="answer_4" class="span-width"></span>
                </div>
            </div>
            <div class="question-footer">
<!--                <button class="arrow-icon" onclick="previousQuestion()">-->
<!--                    <img alt="left" class="navigation-arrow" src="./img/back-arrow.png">-->
<!--                </button>-->
                <span>
                    <b id="countQuestions">xxx</b> von <b id="allQuestions">yyy</b> Fragen
                </span>
                <button class="arrow-icon" onclick="nextQuestion()" id="nextButton" disabled>
                    <img alt="right" class="navigation-arrow" src="./img/right-arrow.png">
                </button>
            </div>`;
    showQuestion();
    showCountQuestions();
}

function nextQuestion() {
    questionCount++;
    document.getElementById('nextButton').disabled = true;
    resetAnswerButtons();
    if (questionCount < 4) {
        showQuestion();
    } else {
        showEndScreen();
    }
    answerClicked = false;
}

// function previousQuestion() {
//     let correctAnswer = questions[currentQuestion][currentTopic][questionCount]['right_answer']; // Zeigt die Anzahl der richtigen Antworten an
//     let selectedQuestionNumber = selectedAnswer.slice(-1); // Zeigt das letzte Zeichen des Funktionsparameters an
//     questionCount--;
//     resetAnswerButtons();
//     if (questionCount < 0) {
//         alert('Du bist bei der ersten Frage!');
//         questionCount = 0;
//     } else if (selectedQuestionNumber == correctAnswer) {
//         rightQuestions--;
//     }
//     showQuestion()
// }

function answer(selection) {
    if (answerClicked) {
        return; // Wenn bereits eine Antwort ausgewählt wurde, beende die Funktion
    }

    answerClicked = true; // Markiere die Antwort als ausgewählt, um weitere Klicks zu verhindern
    selectedAnswer = selection; // Speichern Sie die ausgewählte Antwort
    let correctAnswer = questions[currentQuestion][currentTopic][questionCount]['right_answer']; // Zeigt die Anzahl der richtigen Antworten an
    let selectedQuestionNumber = selection.slice(-1); // Zeigt das letzte Zeichen des Funktionsparameters an
    let idOfRightAnswer = `answer_${correctAnswer}`; // nimmt Bezug auf die ID von right_answer

    if (selectedQuestionNumber == correctAnswer) { // richtige Frage wurde beantwortet
        document.getElementById(selection).parentNode.classList.add('bg-success');
        AUDIO_SUCCESS.play();
        rightQuestions++;
    } else { // falsche Antwort
        document.getElementById(selection).parentNode.classList.add('bg-danger');
        document.getElementById(idOfRightAnswer).parentNode.classList.add('bg-success');
        AUDIO_FAIL.play();
    }
    adjustmentProgressBar()
    showCountQuestions(); // Aktualisiert die Anzahl der Fragen
    document.getElementById('nextButton').disabled = false;
}

function resetAnswerButtons() {
    document.getElementById('answer_1').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_1').parentNode.classList.remove('bg-success');
    document.getElementById('answer_2').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_2').parentNode.classList.remove('bg-success');
    document.getElementById('answer_3').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_3').parentNode.classList.remove('bg-success');
    document.getElementById('answer_4').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_4').parentNode.classList.remove('bg-success');
}

function replayGame() {
    location.reload(); // Seite erneut laden
}

function showEndScreen() {
    document.getElementById('endScreen').style = '';
    document.getElementById('questionBody').style = 'display: none';
    document.getElementById('questionText').style = 'display: none';
}

function adjustmentProgressBar() {
    let percent = (questionCount + 1) / questions[0][currentTopic].length;
    percent = Math.round(percent * 100);
    document.getElementById('progressBar').innerHTML = `${percent}%`;
    document.getElementById('progressBar').style.width = `${percent}%`; // Aktualisierung der Breite der ProgressBar
}
