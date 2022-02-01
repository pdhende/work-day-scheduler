var timeBlockEl = $(".time-block-val");

// Display current day
var currDay = moment().format('dddd') + ", " + moment().format('MMMM Do');
$('#currentDay').text(currDay);

// Function to display the calendar based on the time of day
function init() {
    console.log(timeBlockEl);
    console.log(timeBlockEl.length);
    var currHour = moment().hour();
    // console.log(currHour);
    for(var i = 0; i < timeBlockEl.length; i++) {
        console.log(timeBlockEl[i].id);
    }
}


init();