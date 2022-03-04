// DEFINING INTERACTABLES
var textArea = document.querySelector('.description');
var dayDisplay = document.getElementById('currentDay');
var containerBlock = document.querySelector('.container');

// STARTING VARIABLES
// array to collect input from textareas and store to localStorage
var totalScheduleObject = [];
// Variable containing the array from localStorage
var data = [];
data = JSON.parse(localStorage.getItem('schedule'));

// POSTING DATE TO TOP OF PAGE
var postedDay = moment().format('dddd, MMMM Do')
document.getElementById('currentDay').textContent = postedDay;

// SAVE BUTTON FUNCTIONALITY
var saveButton = document.querySelector('.saveBtn');
$(document).on('click', '.saveBtn', function() {
  // captures neighboring textarea's input in a variable
  var hourEvent = $(this).siblings('.description').val();
  // Determines which position in the array to fill using name attribute
  var position = Number($(this).attr('name'));
  // replaces position in array with input from textarea
  totalScheduleObject[position] = hourEvent;
  // 
  localStorage.setItem('schedule', totalScheduleObject);
  storeSchedule();
});

// STORES DATA FUNCTION - inserts into an array
var storeSchedule = function () {
  var test = JSON.stringify(totalScheduleObject);
  console.log(test);
  localStorage.setItem('schedule', test);
  var data = localStorage.getItem('schedule');
  var object = JSON.parse(data);
}

// FOR LOOP THAT GENERATES THE TIME BLOCKS (divs inside the container div)
for (var i = 9; i < 18; i++) {
  // Determines the element variables to style and append
  var blockTime = i;
  var checkTime = moment().format('H');
  var timeBlock = document.createElement('div');
  var textBlock = document.createElement('textarea')
  var hourBlock = document.createElement('div');
  var buttonBlock = document.createElement('button');

  // Color changing conditional
  if (checkTime > blockTime) {
    textBlock.classList.add('past');
  }
  if (checkTime < blockTime) {
    textBlock.classList.add('future');
  } 
  if (checkTime == blockTime) {
    textBlock.classList.add('present');
  };

  // AM/PM Conditional
  if (blockTime > 12) {
    blockTime = i - 12;
  }
  if (i < 12) {
    blockTime += 'am';
  } else {
    blockTime += 'pm';
  }

  // STYLING DIV ELEMENTS

  // Time Block Div
  timeBlock.classList.add('row', 'time-block');

  // Hour Block Styling
  hourBlock.classList.add('col-1', 'hour');
  hourBlock.textContent = blockTime;

  // Textarea Block Styling
  textBlock.classList.add('description', 'col-10');
  textBlock.textContent = data[i - 9];

  // Button Block Styling
  buttonBlock.classList.add('col-1', 'saveBtn');
  buttonBlock.innerHTML = '<i class="fas fa-save"></i>';
  buttonBlock.name = (i - 9);

  // Appending dynamically created children to elements
  timeBlock.append(hourBlock, textBlock, buttonBlock);
  containerBlock.append(timeBlock);
};



