// DEFINING INTERACTABLES
var textArea = document.querySelector('.description');
var dayDisplay = document.getElementById('currentDay');
var containerBlock = document.querySelector('.container');

// STARTING VARIABLES
var totalScheduleObject = [];

// POSTING DATE TO TOP OF PAGE
var postedTime = moment().format('dddd, MMMM Do')
document.getElementById('currentDay').textContent = postedTime;

// STORING FUNCTIONS

// SAVE BUTTON: Captures text from input field and stores it to localStorage
var saveButton = document.querySelector('.saveBtn');
$(document).on('click', '.saveBtn', function() {
  var hourEvent = $(this).siblings('.description').val();
  var position = Number($(this).attr('name'));
  totalScheduleObject[position] = hourEvent;
  // console.log(totalScheduleObject);
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
  console.log(object);
}

// LOOP THAT GENERATES THE BODY DIV ELEMENTS
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
  // NEED TO STYLE the text for input field
  // textBlock.textContent = data[i].event;
  // Button Block Styling
  buttonBlock.classList.add('col-1', 'saveBtn');
  buttonBlock.innerHTML = '<i class="fas fa-save"></i>';
  buttonBlock.name = (i - 9);

  // Appending children to elements
  timeBlock.append(hourBlock, textBlock, buttonBlock);
  containerBlock.append(timeBlock);
};



