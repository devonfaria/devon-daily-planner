// STORING VARIABLES
var saveButton = document.querySelector('.saveBtn');
var textArea = document.querySelector('.text');
var dayDisplay = document.getElementById('currentDay');

saveButton.addEventListener('click', function () {
  console.log('Hi!');
});

// STORING FUNCTIONS
// Time Call Function
var determineTime = function () {
  var currentTime = moment().format('dddd, MMMM Do');
  dayDisplay.innerHTML = currentTime;
  dayDisplay.style.backgroundColor = 'black';
}

determineTime();