'use strict';

var imageElOne = document.getElementById('picture-one');
var imageElTwo = document.getElementById('picture-two');
var imageElThree = document.getElementById('picture-three');
var container = document.getElementById('conatiner');
var list = document.getElementById('list');

var surveyResults = [];
var clickCounter = 0;

var previous1 = -1;
var previous2 = -1;
var previous3 = -1;

function Survey(name) {
  this.name = name;
  this.timesShow = 0;
  this.imagesClicked = 0;
  this.path = `img/${name}`;
  surveyResults.push(this);
}

var surveyPictures = ['bag.jpg', 'banana.jpg', 'bathroom.jpg', 'boots.jpg', 'breakfast.jpg', 'bubblegum.jpg', 'chair.jpg', 'cthulhu.jpg', 'dog-duck.jpg', 'dragon.jpg', 'pen.jpg', 'pet-sweep.jpg', 'scissors.jpg', 'shark.jpg', 'sweep.png', 'tauntaun.jpg', 'unicorn.jpg', 'usb.gif', 'water-can.jpg', 'wine-glass.jpg'];

surveyPictures.forEach(function(surveyResults) {
  new Survey(surveyResults);
});
// console.log(surveyResults);
//generate random number

function randomNumber() {
  return Math.floor(surveyResults.length * Math.random());
}

//render the images

function showRandomSurveyOne(event) {
  // console.log('previous',previous1, previous2, previous3);

  var rando = randomNumber();
  while(rando === previous1 || rando === previous2 || rando === previous3) {
    rando = randomNumber();
  }
  imageElOne.src = surveyResults[rando].path;
  imageElOne.title = surveyResults[rando].name;

  var random = randomNumber();
  while(random === previous1 || random === previous2 || random === previous3 || random === rando) {
    random = randomNumber();
  }
  imageElTwo.src = surveyResults[random].path;
  imageElTwo.title = surveyResults[random].name;

  var randoma = randomNumber();
  while(randoma === previous1 || randoma === previous2 || randoma === previous3 || randoma === rando || randoma === random) {
    randoma = randomNumber();
  }
  imageElThree.src = surveyResults[randoma].path;
  imageElThree.title = surveyResults[randoma].name;

  previous1 = rando;
  previous2 = random;
  previous3 = randoma;

  // console.log('current', rando, random, randoma);
  // console.log('===========');

  surveyResults[rando].timesShow++;

  surveyResults[random].timesShow++;

  surveyResults[randoma].timesShow++;
  clickCounter++;

  if(event) {
    for(let i = 0; i < surveyPictures.length; i++ ) {
      if(surveyResults[i].name === event.target.title){
        surveyResults[i].imagesClicked++;
        console.log(surveyResults[i].imagesClicked);
      } else {
        continue;
      }
    }
  }

  // console.log(clickCounter);
  if(clickCounter > 25) {
    imageElOne.removeEventListener('click', showRandomSurveyOne);
    imageElTwo.removeEventListener('click', showRandomSurveyOne);
    imageElThree.removeEventListener('click', showRandomSurveyOne);
  }
  if(clickCounter > 25 ) {
    for(let i = 0; i < surveyPictures.length; i++) {
      if(surveyResults[i].name === event.target.title) {
        var liEl = document.createElement('li');
        liEl.textContent = surveyResults[i].imagesClicked;
        list.appendChild(liEl);
        console.log(liEl);
      }
    }
  }
}

showRandomSurveyOne();
// console.log(event.title);

imageElOne.addEventListener('click', showRandomSurveyOne);
imageElTwo.addEventListener('click', showRandomSurveyOne);
imageElThree.addEventListener('click', showRandomSurveyOne);

//I haven't figured out how to populate the li elements