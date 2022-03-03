// DEFINING INTERACTABLES
var saveButton = document.querySelector('.saveBtn');
var textArea = document.querySelector('.description');
var dayDisplay = document.getElementById('currentDay');

// STARTING VARIABLES
var totalScheduleArray = [];
var inputForStorage = {
  hour: '',
  event: '',
}

// BUTTON FUNCTIONALITY
saveButton.addEventListener('click', function (event.target) {
  console.log('captured the text!');
  captureText();
});

// STORING FUNCTIONS

// Time Call Function
var determineTime = function () {
  var currentTime = moment().format('dddd, MMMM Do');
  dayDisplay.innerHTML = currentTime;
}

// Captures text from input field
var captureText = function () {  
  document.querySelector('.description').value;
  console.log(inputForStorage);
}

determineTime();
test();