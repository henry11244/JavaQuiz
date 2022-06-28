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
var nameValue = ''
var correct = 0
var timeLeft = 10

var myInterval = setInterval(function () {
    if (timeLeft > 0) {
        timer.innerHTML = ' ' + timeLeft;
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

Name.addEventListener('change', function () {
    nameValue = Name.value

})

nameSubmit.addEventListener('click', function () {
    localStorage.setItem(nameValue, correct);
    endPage.style.display = "flex";
    h1.style.display = "none";
    result.style.display = "none";
    userName.style.display = "none";

})
