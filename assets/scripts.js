// selectors for HTML objects
var img = document.querySelector('img')
var Start = document.querySelector('#Start')
var title = document.querySelector('#title')
var intro = document.querySelector('#intro')
var DrEvil = document.querySelector('#DrEvil')
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
var audio = document.querySelector('#audio')
var explosion = document.querySelector('#explosion')
var sadNoise = document.querySelector('#sadNoise')
var cheer = document.querySelector('#cheer')
var wrongPic = document.querySelector('#wrongPic')
var victoryImg = document.querySelector('#victoryImg')
var lossImg = document.querySelector('#lossImg')

// wrong answer subtraction value 
var wrongAnswerSubtract = 25

// wrong answer count
var wrongAnswer = 0

// score count 
var correct = 0

// defining timer variable
var timeLeft = 100

// defining the score array for high scores and pulling any existing data from local storage 
scores = []
if (JSON.parse(localStorage.getItem('scores') !== null)) { scores = JSON.parse(localStorage.getItem('scores')) }

// creating function for losing scenario, naming it so it can be called twice
var losingFunction = () => {
    timer.innerHTML = " " + "0";
    question1.remove();
    question2.remove();
    question3.remove();
    question4.remove();
    wrongPic.remove()
    lossImg.style.display = "block";
    h1.innerHTML = "Times Up";
    result.innerText = correct + " Correct Answers";
    timeDisplay.remove();
    userName.style.display = 'block';
    audio.remove();
    sadNoise.play();
}

// creating function for winning scenario
var winningFunction = () => {
    result.innerText = correct + " Correct Answers";
    timeDisplay.remove();
    wrongPic.remove();
    userName.style.display = 'block'
    victoryImg.style.display = 'block';
    audio.remove()
    cheer.play();
}

// function for quiz timer
var myInterval = () => {
    var interval =
        setInterval(function () {
            if (timeLeft > 0) {
                timer.innerHTML = " " + timeLeft;
                timeLeft--;
            }
            else {
                if (timeLeft < 1) {
                    losingFunction();
                    clearInterval(interval);
                }
            }
            if (wrongAnswer + correct === 4) { setInterval(function () { clearInterval(interval) }, 500) }
        }, 1000)
}

// quiz start button
Start.addEventListener('click', function () {
    Start.remove();
    intro.remove();
    DrEvil.remove();
    question1.style.display = "block"
    timeDisplay.style.display = "flex"
    title.style.display = "flex"
    audio.play();
    myInterval()
})

// logic for what happens when an answer is submitted
Question1Submit.addEventListener('click', function (x) {
    x.preventDefault();
    question1.remove();
    question2.style.display = "block";
    if (Question1Answer3.checked) {
        correct++;
        img.style.display = 'none'
    }
    else {
        timeLeft = timeLeft - wrongAnswerSubtract;
        wrongAnswer++;
        wrongImg()

    }
})

Question2Submit.addEventListener('click', function (x) {
    x.preventDefault();
    question2.remove();
    question3.style.display = "block";
    if (Question2Answer2.checked) {
        correct++;
        img.style.display = 'none'
    }
    else {
        timeLeft = timeLeft - wrongAnswerSubtract;
        wrongAnswer++;
        wrongImg()
    }
})

Question3Submit.addEventListener('click', function (x) {
    x.preventDefault();
    question3.remove();
    question4.style.display = "block";
    if (Question3Answer4.checked) {
        correct++;
        img.style.display = 'none'
    }
    else {
        timeLeft = timeLeft - wrongAnswerSubtract
            ; wrongAnswer++;
        wrongImg()
    }
})

Question4Submit.addEventListener('click', function (x) {
    x.preventDefault();
    question4.remove();
    if (Question4Answer1.checked) {
        correct++;
        img.style.display = 'none';
        winningFunction()
    }
    else if (timeLeft - wrongAnswerSubtract < 1) { losingFunction(); clearInterval(interval); }
    else { winningFunction() }

})

// funciton for what happens when user submits their names, including high scores, play 
// again button, hiding the irrelevant objects and updating local storage
nameSubmit.addEventListener('click', function () {
    endPage.setAttribute('style', 'display: flex; border: none');
    highScoresHeading.setAttribute('style', 'display: flex; border: none');
    reset.setAttribute('style', 'display: flex; border: none');
    h1.remove();
    result.remove();
    userName.remove();
    var newScore = [correct, Name.value];
    scores.push(newScore);
    scores = scores.sort().reverse()
    localStorage.setItem('scores', JSON.stringify(scores));
    var newOl = document.createElement('ol')
    for (var i = 0; i < scores.length; i++) {
        var newLi = document.createElement('li');
        newLi.innerHTML = scores[i][1] + ', Correct answers: ' + scores[i][0]
        newOl.append(newLi);
        highScores.append(newOl);
    }
})

// Image for wrong answer rotation and wrong answer sound
function wrongImg() {
    if (wrongAnswer === 1) { wrongPic.setAttribute('style', 'display: block'); wrongPic.setAttribute('class', 'img1') }
    else if (wrongAnswer === 2) {
        wrongPic.setAttribute('src', 'assets/images/DBZ2.png');
        wrongPic.setAttribute('class', 'img2')
        wrongPic.setAttribute('style', 'display: block')
    }
    else {
        wrongPic.setAttribute('src', 'assets/images/DBZ3.png');
        wrongPic.setAttribute('class', 'img3')
        wrongPic.setAttribute('style', 'display: block')
    }
    explosion.play();
}

