// DEFINING INTERACTABLES
var saveButton = document.querySelector('.saveBtn');
$(document).on('click', '.saveBtn', function(event) {
  var hour1 = $(this).siblings('.hour').text();
  var event1 = $(this).siblings('.description').val();
  objectForStorage.hour = hour1;
  objectForStorage.event = event1;
  console.log(objectForStorage);
});

var textArea = document.querySelector('.description');
var dayDisplay = document.getElementById('currentDay');

// STARTING VARIABLES
var totalScheduleArray = ['0','1','2','3','4','5','6','7','8',];
var objectForStorage = {
  hour: '',
  event: '',
};

// BUTTON FUNCTIONALITY
saveButton.addEventListener('click', captureText);

// STORING FUNCTIONS
// seeing selector in function for 
var test = function () {
  document.querySelector('.hour').innerHTML = '9am';
};


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


// BUTTON FUNCTIONALITY
// button.addEventListener('click', function () {
//   var parent = saveButton.parentElement
//   var time = parent.querySelector('.hour').textContent;
//   objectForStorage.hour
//   console.log(time);
// });
determineTime();

// console.log(saveButton.parentElement.div.innerHTML);