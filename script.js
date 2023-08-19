const questions = [{
        question: "W 1993 roku miała miejsce kontrowersyjna decyzja dotycząca zakazu pewnej działalności w Internecie. O co dokładnie chodziło?",
        choices: ["Zakaz kryptografii", "Zakaz handlu online", "Zakaz reklam na stronach internetowych"],
        correctIndex: 0
    },
    {
        question: "Które wielkie przedsiębiorstwo zostało założone przez Jeffa Bezosa?",
        choices: ["Apple", "Microsoft", "Amazon"],
        correctIndex: 2
    },
    {
        question: "Które wydarzenie w 1993 roku przyczyniło się do podpisania Porozumienia z Oslo, które otworzyło drogę do procesu pokojowego między Izraelem a Palestyną",
        choices: ["Spotkanie w Camp David", "Zamach na World Trade Center", "Tzw. Handshake on the Lawn"],
        correctIndex: 2
    }, {
        question: "Który klub zdobył Ligę Mistrzów UEFA w sezonie 1992/1993?",
        choices: ["AC Milan", "Manchester United", "Olympique de Marseille"],
        correctIndex: 2
    }, {
        question: "Które miasto było gospodarzem igrzysk olimpijskich zimowych w 1993 roku?",
        choices: ["Calgary, Kanada", "Albertville, Francja", "Lillehammer, Norwegia"],
        correctIndex: 2
    }, {
        question: "Które z tych znaczeń jest często przypisywane imieniu 'Krystian'?",
        choices: ["Silny w wierzeniach", "Pokojowy", "Miłość do natury"],
        correctIndex: 0
    }, {
        question: "Który znany dokument znaleziono w 1993 roku w jednym z budynków kościoła w Polsce, zawierający opis legendy o Bolesławie Chrobrym i pięciu aniołach?",
        choices: ["Akt Czarnobylski", "Papirus Grodziski", "Rocznik Turoszowski"],
        correctIndex: 2
    }, {
        question: "Kto został prezydentem Południowej Afryki, stając się pierwszym prezydentem kraju wybranym w drodze powszechnych wyborów?",
        choices: ["Nelson Mandela", "Desmond Tutu", "F.W. de Klerk"],
        correctIndex: 0
    }, {
        question: "Jaka popularna gra konsolowa została wydana w 1993 roku, przedstawiając dwie postacie, które stają do walki?",
        choices: ["Street Fighter II", "Mortal Kombat", "Tekken"],
        correctIndex: 1
    }, {
        question: "Jakie jest pochodzenie imienia 'Krystian'?",
        choices: ["Polskie", "Angielskie", "Niemieckie"],
        correctIndex: 0
    }, {
        question: "Który zawodnik zdobył Złotą Piłkę FIFA w 1993 roku?",
        choices: ["Diego Maradona", "Zinedine Zidane", "Roberto Baggio"],
        correctIndex: 2
    },
    // Dodaj pozostałe pytania w podobnym formacie
];

const startScreen = document.getElementById('start-screen');
const startButton = document.getElementById('start-button');
const questionContainer = document.getElementById('question');
const choicesContainer = document.getElementById('choices');
const resultContainer = document.getElementById('result');
const nextButton = document.getElementById('next-button');
const restartButton = document.getElementById('restart-button');
const claimRewardButton = document.getElementById('claimRewardButton');

let currentQuestion = 0; // -1 oznacza ekran startowy
let score = 0;

function showStartScreen() {
    startScreen.style.display = 'block';
    questionContainer.style.display = 'none';
    nextButton.style.display = 'none';
    restartButton.style.display = 'none';
    claimRewardButton.style.display = 'none';
    resultContainer.style.display = 'none';
}

function startQuiz() {
    currentQuestion = 0;
    score = 0;
    startScreen.style.display = 'none';
    questionContainer.style.display = 'block';
    showQuestion(); // Dodaj to wywołanie
}

function showQuestion() {
    const questionObj = questions[currentQuestion];
    questionContainer.textContent = questionObj.question;

    choicesContainer.innerHTML = '';
    questionObj.choices.forEach((choice, index) => {
        const button = document.createElement('button');
        button.textContent = choice;
        button.addEventListener('click', () => checkAnswer(index));
        choicesContainer.appendChild(button);
    });

    nextButton.style.display = 'none';
    claimRewardButton.style.display = 'none';
}

function checkAnswer(selectedIndex) {
    const correctIndex = questions[currentQuestion].correctIndex;

    if (selectedIndex === correctIndex) {
        score++;
    }

    nextButton.style.display = 'block';
    choicesContainer.childNodes.forEach((choiceButton) => {
        choiceButton.disabled = true;
    });
    const choiceButtons = document.querySelectorAll('.choice-button');

    choiceButtons.forEach(button => {
        button.classList.remove('clicked');
        button.disabled = true; // Wyłącz przyciski po kliknięciu
    });

    const selectedButton = choiceButtons[selectedIndex];
    selectedButton.classList.add('clicked');
}

function showNextQuestion() {
    currentQuestion++;
    if (currentQuestion < questions.length) {
        showQuestion();
    } else {
        showResult();
    }
}

function showResult() {
    questionContainer.style.display = 'none';
    resultContainer.style.display = 'block';
    resultContainer.textContent = `Twój wynik: ${score}/${questions.length}`;

    if (score >= 8) {
        resultContainer.textContent += " Gratulacje, ukończyłeś/łaś quiz!";
        claimRewardButton.style.display = 'block';
    } else {
        resultContainer.textContent += " Przykro mi, wynik jest zbyt niski. Możesz spróbować ponownie, odswiezajac okno przegladarki.";
    }
    nextButton.style.display = 'none';
}

function restartQuiz() {
    currentQuestion = 0;
    score = 0;
    restartButton.style.display = 'none';
    claimRewardButton.style.display = 'none';
    resultContainer.style.display = 'none';
    nextButton.style.display = 'block'; // Pokaż przycisk "Następne pytanie"
    showQuestion();
}

startButton.addEventListener('click', startQuiz);
nextButton.addEventListener('click', showNextQuestion);


showStartScreen();