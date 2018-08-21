'use strict';

var imageEl = document.getElementById('survey');

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

function showRandomSurvey() {
  var rando = Math.floor(surveyResults.length * Math.random());
  imageEl.src = surveyResults[rando].path;
  imageEl.title = surveyResults[rando].name;
  surveyResults[rando].timesShow++;
  surveyResults[rando].timesClicked++;
  clickCounter++;
  console.log(clickCounter);
  if(clickCounter > 25) {
    imageEl.removeEventListener('click', showRandomSurvey);
  }
}

showRandomSurvey();

imageEl.addEventListener('click', showRandomSurvey);



