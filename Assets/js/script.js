// DEFINING INTERACTABLES
var saveButton = document.querySelector('.saveBtn');
var textArea = document.querySelector('.description');
var dayDisplay = document.getElementById('currentDay');

// STARTING VARIABLES
var totalScheduleArray = [];
var objectForStorage = {
  hour: '',
  event: '',
};

// BUTTON FUNCTIONALITY
saveButton.addEventListener('click', function (event) {
  console.log('captured the text!');
  captureText();
});

// STORING FUNCTIONS

// Time Call Function
var determineTime = function () {
  var currentTime = moment().format('dddd, MMMM Do');
  dayDisplay.innerHTML = currentTime;
};

// Captures text from input field
var captureText = function () {  
  objectForStorage.event = document.querySelector('.description').value;
  objectForStorage.hour = 9;
  console.log(objectForStorage);
  totalScheduleArray.push(objectForStorage);
  var item = JSON.stringify(totalScheduleArray);
  localStorage.setItem('schedule', item);
};

determineTime();