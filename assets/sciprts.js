// selectors for HTML objects
var Question1Submit = document.querySelector('#Question1Submit')
var Question2Submit = document.querySelector('#Question2Submit')
var Question3Submit = document.querySelector('#Question3Submit')
var Question4Submit = document.querySelector('#Question4Submit')
var Question1Answer3 = document.querySelector('#Question1Answer3')
var Question2Answer2 = document.querySelector('#Question2Answer2')
var Question3Answer4 = document.querySelector('#Question3Answer4')
var Question4Answer1 = document.querySelector('#Question4Answer1')
var question1 = document.querySelector('#question1')
var question2 = document.querySelector('#question2')
var question3 = document.querySelector('#question3')
var question4 = document.querySelector('#question4')
var timer = document.querySelector('#timer')
var result = document.querySelector('#result')
var timeDisplay = document.querySelector('#timeDisplay')
var h1 = document.querySelector('h1')
var userName = document.querySelector('#userName')
var nameSubmit = document.querySelector('#nameSubmit')
var Name = document.querySelector('#Name')
var endPage = document.querySelector('#endPage')
var highScores = document.querySelector('#highScores')
var reset = document.querySelector('#reset')
var highScoresHeading = document.querySelector('#highScoresHeading')

// score count 
var correct = 0

// defining timer variable
var timeLeft = 1000

// defining the score array for high scores and pulling any existing data from local storage 
scores = []
if (JSON.parse(localStorage.getItem('scores') !== null)) { scores = JSON.parse(localStorage.getItem('scores')) }

// function for quiz timer
var myInterval = setInterval(function () {
    if (timeLeft > 0) {
        timer.innerHTML = " " + timeLeft;
        timeLeft--;
    }
    else {
        if (timeLeft === 0) {
            clearInterval(myInterval)
            timer.innerHTML = " " + "0";
            question1.style.display = "none";
            question2.style.display = "none";
            question3.style.display = "none";
            question4.style.display = "none";
            h1.innerHTML = "Times Up";
            result.innerText = correct + " Correct Answers";
            timeDisplay.style.display = 'none';
            userName.style.display = 'block';
        }
    }
}, 100)

// logic for what happens when an answer is submitted
Question1Submit.addEventListener('click', function (x) {
    x.preventDefault();
    question1.style.display = "none";
    question2.style.display = "block";
    if (Question1Answer3.checked) {
        correct++;
    }
})

Question2Submit.addEventListener('click', function (x) {
    x.preventDefault();
    question2.style.display = "none";
    question3.style.display = "block";
    if (Question2Answer2.checked) {
        correct++;
    }
})

Question3Submit.addEventListener('click', function (x) {
    x.preventDefault();
    question3.style.display = "none";
    question4.style.display = "block";
    if (Question3Answer4.checked) {
        correct++;
    }
})

Question4Submit.addEventListener('click', function (x) {
    x.preventDefault();
    question4.style.display = "none";
    if (Question4Answer1.checked) {
        correct++;
    };
    result.innerText = correct + " Correct Answers";
    clearInterval(myInterval);
    timeDisplay.style.display = 'none';
    userName.style.display = 'block'
})

// funciton for what happens when user submits their names, including high scores, play 
// again button, hiding the irrelevant objects and updating local storage
nameSubmit.addEventListener('click', function () {
    endPage.setAttribute('style', 'display: flex; border: none');
    highScoresHeading.setAttribute('style', 'display: flex; border: none');
    reset.setAttribute('style', 'display: flex; border: none');
    h1.style.display = "none";
    result.style.display = "none";
    userName.style.display = "none";
    var newScore = [Name.value, correct];
    scores.push(newScore);
    localStorage.setItem('scores', JSON.stringify(scores));
    var newOl = document.createElement('ol')
    for (var i = 0; i < scores.length; i++) {
        var newLi = document.createElement('li');
        newLi.innerHTML = scores[i];
        newOl.append(newLi);
        highScores.append(newOl);
    }
})

