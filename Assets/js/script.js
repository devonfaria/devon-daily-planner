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
  totalScheduleArray.splice(position,1,event1);
  var item = JSON.stringify(totalScheduleArray);
  localStorage.setItem('schedule', item);
});

// PULLING LOCALSTORAGE
var pullSchedule = function () {
  var data = JSON.parse(localStorage.getItem("schedule"));
  for (var i = 0; i < data.length; i++) {
    console.log($(`#${i}`).val());
    var input;
    input = data[i];
    input = $(`#${i}`).val();
    // console.log(data[i]);
    // console.log(input);
  }
}
// for loops that generates
// var data = JSON.parse('schedule')
for (var i = 9; i < 18; i++) {
  var blockTime = i;
  var checkTime = moment().format('H');
  console.log(checkTime);
  if (blockTime > 12) {
    blockTime = i - 12;
  }
  if (i < 12) {
    blockTime += 'am';
  } else {
    blockTime += 'pm';
  }
  
  // Time Block Div
  
  var timeBlock = document.createElement('div');
  timeBlock.classList.add('row', 'time-block');
  // Hour Block Div
  var hourBlock = document.createElement('div');
  hourBlock.classList.add('col-1', 'hour');
  hourBlock.textContent = blockTime;
// Text Block
  var textBlock = document.createElement('textarea');
  textBlock.classList.add('description', 'col-10');
  // Button Block
  var buttonBlock = document.createElement('button');
  buttonBlock.classList.add('col-1', 'saveBtn');
  buttonBlock.innerHTML = '<i class="fas fa-save"></i>';
  // Appending children to elements
  // if (i = checkTime) {
  //   textBlock.classList.add('present');
  //   console.log('Present');
  // } if (i > checkTime) {
  //   textBlock.classList.add('future');
  //   console.log('Future');
  // } else {
  //   textBlock.classList.add('past');
  //   console.log('Past');
  // }
  timeBlock.append(hourBlock, textBlock, buttonBlock);
  containerBlock.append(timeBlock);
};


