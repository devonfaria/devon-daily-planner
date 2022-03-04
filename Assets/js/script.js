// DEFINING INTERACTABLES
var saveButton = document.querySelector('.saveBtn');
var textArea = document.querySelector('.description');
var dayDisplay = document.getElementById('currentDay');

// STARTING VARIABLES
var totalScheduleArray = ['0','1','2','3','4','5','6','7','8',];
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
// seeing selector in function for 
var test = function () {
  document.querySelector('.hour').innerHTML = '9am';
};
test();

// Time Call Function
var determineTime = function () {
  var currentTime = moment().format('dddd, MMMM Do');
  dayDisplay.innerHTML = currentTime;
};

// BROKEN determines color of text body
var hourColor = function () {
  var timeCheck = moment().format('h a');
  // add variable to check against for header hour time slot on block
  if (timeCheck = 0) {

  }
  console.log(timeCheck);
}

// Captures text from input field
var captureText = function (hour) {  
  // Storing hour and event to local variable, not pushed to array yet
  objectForStorage.event = document.querySelector('.description').value;
  objectForStorage.hour = 9;
  console.log(objectForStorage);
  totalScheduleArray.splice(hour,1,objectForStorage);
  var item = JSON.stringify(totalScheduleArray);
  localStorage.setItem('schedule', item);
};

determineTime();