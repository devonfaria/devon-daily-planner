// DEFINING INTERACTABLES
var textArea = document.querySelector('.description');
var dayDisplay = document.getElementById('currentDay');
var containerBlock = document.querySelector('.container');

// STARTING VARIABLES
var totalScheduleObject = {
  hour: '9am',
  event: 'frgrger',
};

// STORING FUNCTIONS
// Captures text from input field
var saveButton = document.querySelector('.saveBtn');
$(document).on('click', '.saveBtn', function() {
  var hourEvent = $(this).siblings('.description').val();
  console.log(hourEvent);
  localStorage.setItem('schedule', hourEvent);
  // storeSchedule;
});

// // PULLING LOCALSTORAGE
// var pullSchedule = function () {
//   var data = JSON.parse(localStorage.getItem("schedule"));
//   for (var i = 0; i < data.length; i++) {
//     console.log($(`#${i}`).val());
//     var input;
//     input = data[i];
//     input = $(`#${i}`).val();
//     // console.log(data[i]);
//     // console.log(input);
//   }
// }

// BROKEN STORAGE FUNCTION
// var position = Number($(this).siblings('textarea').attr('id'));
// var event1 = $(this).siblings('.description').val();
// totalScheduleObject.splice(position,1,event1);

// SETS AND RETRIEVES LOCAL STORAGE DATA
var test = JSON.stringify(totalScheduleObject);
console.log(test);
localStorage.setItem('schedule', test);
var data = localStorage.getItem('schedule');
JSON.parse(data);
console.log(data);

// POSTING DATE TO TOP OF PAGE
var postedTime = moment().format('dddd, MMMM Do')
document.getElementById('currentDay').textContent = postedTime;

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
  textBlock.textContent = 
  // Button Block Styling
  buttonBlock.classList.add('col-1', 'saveBtn');
  buttonBlock.innerHTML = '<i class="fas fa-save"></i>';

  // Appending children to elements
  timeBlock.append(hourBlock, textBlock, buttonBlock);
  containerBlock.append(timeBlock);
};

var storeSchedule = function () {
  var item = JSON.stringify(totalScheduleObject)
  localStorage.setItem("schedule", item)
}


