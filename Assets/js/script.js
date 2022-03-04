// DEFINING INTERACTABLES
var textArea = document.querySelector('.description');
var dayDisplay = document.getElementById('currentDay');

// STARTING VARIABLES
var totalScheduleArray = ['0','1','2','3','4','5','6','7','8', '9'];

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

$(document).on('click', '#beer', function() {
  pullSchedule();
  console.log('Hey!');
});

// Time Call Function
var determineTime = function () {
  var currentTime = moment().format('dddd, MMMM Do');
  dayDisplay.innerHTML = currentTime;
};

// BROKEN determines color of text body
var hourColor = function () {
  var timeCheck = moment().format('h');
  if (timeCheck = ($('textarea') {
    // this.style.backgroundColor = yellow;
  }
}

hourColor();
determineTime();
