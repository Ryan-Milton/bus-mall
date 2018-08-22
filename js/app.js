'use strict';

var imageElOne = document.getElementById('picture-one');
var imageElTwo = document.getElementById('picture-two');
var imageElThree = document.getElementById('picture-three');

var surveyResults = [];
var clickCounter = 0;
var clicksArray = [];

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

function randomNumber() {
  return Math.floor(surveyResults.length * Math.random());
}

////////////render the images

function showRandomSurveyOne(event) {

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

  surveyResults[rando].timesShow++;
  surveyResults[random].timesShow++;
  surveyResults[randoma].timesShow++;
  clickCounter++;

  if(event) {
    for(let i = 0; i < surveyPictures.length; i++ ) {
      if(surveyResults[i].name === event.target.title){
        surveyResults[i].imagesClicked++;
        clicksArray.push(surveyResults[i].imagesClicked);
        console.log(surveyResults[i].imagesClicked);
      } else {
        continue;
      }
    }
  }

  if(clickCounter > 25) {
    imageElOne.removeEventListener('click', showRandomSurveyOne);
    imageElTwo.removeEventListener('click', showRandomSurveyOne);
    imageElThree.removeEventListener('click', showRandomSurveyOne);
    drawChart();
  }
}

showRandomSurveyOne();

imageElOne.addEventListener('click', showRandomSurveyOne);
imageElTwo.addEventListener('click', showRandomSurveyOne);
imageElThree.addEventListener('click', showRandomSurveyOne);

///////////chart stuff

function drawChart() {
  var ctx = document.getElementById('results-chart').getContext('2d');
  var resultsChart = new Chart(ctx, { //eslint-disable-line
    type: 'bar',
    data: {
      labels: surveyPictures,
      datasets: [{
        label: 'Number of Votes',
        data: clicksArray,
        backgroundColor: [
          '#B0171F',
          '#DC143C',
          '#FFB6C1',
          '#CD2990',
          '#DA70D6',
          '#FF00FF',
          '#800080',
          '#0000FF',
          '#4169E1',
          '#00BFFF',
          '#00F5FF',
          '#00FA9A',
          '#008000',
          '#698B22',
          '#FFFF00',
          '#FFA500',
          '#7171C6',
          '#C67171',
          '#800000',
          '#8E388E'
        ],
        hoverBackgroundColor: [
          '#00FF00',
          '#00FF00',
          '#00FF00',
          '#00FF00',
          '#00FF00',
          '#00FF00',
          '#00FF00',
          '#00FF00',
          '#00FF00',
          '#00FF00',
          '#00FF00',
          '#00FF00',
          '#00FF00',
          '#00FF00',
          '#00FF00',
          '#00FF00',
          '#00FF00',
          '#00FF00',
          '#00FF00',
          '#00FF00'
        ],
        borderColor: 'black',
        borderWidth: 1,
      }]
    },
    options: {
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero:true
          }
        }]
      }
    }
  });
}