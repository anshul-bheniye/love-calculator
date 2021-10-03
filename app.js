console.log('This app is built by Anshul Bheniye');

let subHeading = document.querySelector('.sub-heading');

let one = document.querySelector('.one');
let two = document.querySelector('.two');
let three = document.querySelector('.three');
let four = document.querySelector('.four');

let inputs = document.querySelector('.inputs');

let goback = document.querySelector('.go-back');
let result = document.querySelector('.result');

// selecting pairs
function displayOne() {
    show(inputs);
     subHeading.style.display= "none";
     two.style.display="none";
     three.style.display="none";
     four.style.display="none"; 
     goback.style.display="block"; 
     result.style.display="block";
}

one.addEventListener('click', displayOne);

function displayTwo() {
    show(inputs);
    subHeading.style.display= "none";
    one.style.display="none";
    three.style.display="none";
    four.style.display="none";
    goback.style.display="block";
    result.style.display="block";
}

two.addEventListener('click', displayTwo);

function displayThree() {
    show(inputs);
    subHeading.style.display= "none";
    one.style.display="none";
    two.style.display="none";
    four.style.display="none";
    goback.style.display="block";
    result.style.display="block";
}

three.addEventListener('click', displayThree);

function displayFour() {
    show(inputs);
    subHeading.style.display= "none";
   
    one.style.display="none";
    two.style.display="none";
    three.style.display="none";
    goback.style.display="block";
    result.style.display="block";
}

four.addEventListener('click', displayFour);

// helper function
function show(a){
a.style.display = 'block';
}

// go backbutton
function rewind() {
    subHeading.style.display= "block";
    inputs.style.display="none";
   
    one.style.display="block";
    two.style.display="block";
    three.style.display="block";
    four.style.display="block";
    goback.style.display="none";
    result.style.display="none";
    output.style.display = "none";
    firstInput.value = "";
    secondInput.value = "";
}
goback.addEventListener('click', rewind);


let firstInput = document.querySelector('.name-input-one');
let secondInput = document.querySelector('.name-input-two');

let output = document.querySelector('.output');
let nameOutput = document.querySelector('.name-output');
let birdOne = document.querySelector('.love-bird-one');
let birdTwo = document.querySelector('.love-bird-two');
let shipStatus = document.querySelector('.ship-status');
let loveScore = document.querySelector('.love-score');
let quote = document.querySelector('.quote');
let err = document.querySelector('.err');

 
let randomNumber = Math.floor(Math.random()*100)+1;

// check now button
function forDetermine(){
    inputs.style.display="none";
    one.style.display="none";
    two.style.display="none";
    three.style.display="none";
    four.style.display="none";
    goback.style.display="none";
    result.style.display="none";
    output.style.display = "block";
}

function determine(){
    forDetermine();
    
    birdOne.innerHTML = firstInput.value;
    birdTwo.innerHTML = secondInput.value;
    

    if(randomNumber < 25 ){
        shipStatus.innerText = "☹️ Sinking in inevitable ";
        loveScore.innerText = `${randomNumber}/100`;
        quote.innerText = "💔 Forget about this one.";
    } else if (randomNumber <= 50){
        shipStatus.innerText = "☹️ Caught in cyclone ";
        loveScore.innerText = `${randomNumber}/100`;
        quote.innerText = "💔 Better luck next time.";
    } else if (randomNumber <= 75){
        shipStatus.innerText = "🙂 May the winds be with you ";
        loveScore.innerText = `${randomNumber}/100`;
        quote.innerText = "😉 Seeing slight hope for you";
    } else if (randomNumber <= 100){
        shipStatus.innerText = "😍 Waiting for you!";
        loveScore.innerText = `${randomNumber}/100`;
        quote.innerText = "😘 No one can stop you";
    } 

    setTimeout(function greet() {
        err.innerText = 'Thank-You! For Using This Application.'
    }, 3000)
    
}

result.addEventListener('click', determine);

