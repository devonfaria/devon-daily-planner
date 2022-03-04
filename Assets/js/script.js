// DEFINING INTERACTABLES
var textArea = document.querySelector('.description');
var dayDisplay = document.getElementById('currentDay');
var containerBlock = document.querySelector('.container');

// STARTING VARIABLES
var totalScheduleObject = {};

// STORING FUNCTIONS
// Captures text from input field
var saveButton = document.querySelector('.saveBtn');
$(document).on('click', '.saveBtn', function() {
  var position = Number($(this).siblings('textarea').attr('id'));
  var event1 = $(this).siblings('.description').val();
  totalScheduleObject.splice(position,1,event1);
  var item = JSON.stringify(totalScheduleArray);
  localStorage.setItem('schedule', item);
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

// var data = JSON.parse('schedule')

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
  // Button Block Styling
  buttonBlock.classList.add('col-1', 'saveBtn');
  buttonBlock.innerHTML = '<i class="fas fa-save"></i>';

  // Appending children to elements
  timeBlock.append(hourBlock, textBlock, buttonBlock);
  containerBlock.append(timeBlock);
};



