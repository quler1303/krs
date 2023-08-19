const questions = [{
        question: "Który smoczy kamień pozwala spełnić jedno życzenie?",
        choices: ["Smoczy Kamień Namekian", " Smoczy Kamień Ziemi", "Smoczy Kamień Porunga"],
        correctIndex: 0
    },
    {
        question: "Które zaklęcie jest używane do stworzenia patronusa?",
        choices: ["Avada Kedavra", "Expelliarmus", "Expecto Patronum"],
        correctIndex: 2
    },
    {
        question: "Gdzie znajduje się stolica Australii?",
        choices: ["Sydney", "Melbourne", "Canberra"],
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
        question: "Który przedmiot był wykładany przez Sybillę Trelawney w Hogwarcie?",
        choices: ["Eliksiry", "Wróżbiarstwo", "Opieka nad Magicznymi Stworzeniami"],
        correctIndex: 1
    }, {
        question: "Które państwo jest znane jako Kraj Kwitnącej Wiśni?",
        choices: ["Japonia", "Chiny", "Korea Południowa"],
        correctIndex: 0
    }, {
        question: "Jaka popularna gra konsolowa została wydana w 1993 roku, przedstawiając dwie postacie, które stają do walki?",
        choices: ["Street Fighter II", "Mortal Kombat", "Tekken"],
        correctIndex: 1
    }, {
        question: "W którym państwie znajduje się Machu Picchu, starożytne miasto Inków?",
        choices: ["Peru", "Kolumbia", "Boliwia"],
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
const rewardLink = 'https://ticket.energylandia.pl/file/Bilety.pdf?type=oa&id=4107719&hash=5d10561a4a2514aababbc8d8113699221e29f0996be84c66fe628e07c4f61235&guid=d502875e-238a-4a5f-8d5e-c08f3294cd4e'; // Zastąp adresem URL swoją właściwą nagrodą

claimRewardButton.addEventListener('click', () => {
    window.location.href = rewardLink;
});

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
    // choicesContainer.childNodes.forEach((choiceButton) => {
    //     choiceButton.disabled = true;
    // });
    const choiceButtons = document.querySelectorAll('.choice-button');

    choiceButtons.forEach(button => {
        button.classList.remove('clicked');
        // button.disabled = true; // Wyłącz przyciski po kliknięciu
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
    choicesContainer.style.display = 'none';
    questionContainer.style.display = 'none';
    resultContainer.style.display = 'block';
    resultContainer.textContent = `Twój wynik: ${score}/${questions.length}.`;

    if (score >= 8) {
        resultContainer.textContent += " Gratulacje, ukończyłeś/łaś quiz!";
        claimRewardButton.style.display = 'block';
    } else {
        resultContainer.textContent += " Przykro mi, wynik jest zbyt niski. Możesz spróbować ponownie, odświeżając okno przeglądarki.";
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