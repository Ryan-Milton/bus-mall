'use strict';

var imageElOne = document.getElementById('picture-one');
var imageElTwo = document.getElementById('picture-two');
var imageElThree = document.getElementById('picture-three');

var surveyResults = [];
var clickCounter = 0;

function Survey(name) {
  this.name = name;
  this.timesShow = 0;
  this.timesClicked = 0;
  this.path = `img/${name}`;
  surveyResults.push(this);
}

var surveyPictures = ['bag.jpg', 'banana.jpg', 'bathroom.jpg', 'boots.jpg', 'breakfast.jpg', 'bubblegum.jpg', 'chair.jpg', 'cthulhu.jpg', 'dog-duck.jpg', 'dragon.jpg', 'pen.jpg', 'pet-sweep.jpg', 'scissors.jpg', 'shark.jpg', 'sweep.png', 'tauntaun.jpg', 'unicorn.jpg', 'usb.gif', 'water-can.jpg', 'wine-glass.jpg'];

surveyPictures.forEach(function(surveyResults) {
  new Survey(surveyResults);
});

function showRandomSurveyOne() {
  var rando = Math.floor(surveyResults.length * Math.random());
  imageElOne.src = surveyResults[rando].path;
  imageElOne.title = surveyResults[rando].name;
  var random = Math.floor(surveyResults.length * Math.random());
  imageElTwo.src = surveyResults[random].path;
  imageElTwo.title = surveyResults[random].name;
  var randoma = Math.floor(surveyResults.length * Math.random());
  imageElThree.src = surveyResults[randoma].path;
  imageElThree.title = surveyResults[randoma].name;
  surveyResults[rando].timesShow++;
  surveyResults[rando].timesClicked++;
  surveyResults[random].timesShow++;
  surveyResults[random].timesClicked++;
  surveyResults[randoma].timesShow++;
  surveyResults[randoma].timesClicked++;
  clickCounter++;
  console.log(clickCounter);
  if(clickCounter > 25) {
    imageElOne.removeEventListener('click', showRandomSurveyOne);
    imageElTwo.removeEventListener('click', showRandomSurveyOne);
    imageElThree.removeEventListener('click', showRandomSurveyOne);
  }
}

showRandomSurveyOne();

if(imageElOne.addEventListener('click', showRandomSurveyOne) || imageElTwo.addEventListener('click', showRandomSurveyOne) || imageElThree.addEventListener('click', showRandomSurveyOne)) {
  showRandomSurveyOne();
}

// can't quite figure out how to not repeat the pictures or not have them show up in the next cycle

