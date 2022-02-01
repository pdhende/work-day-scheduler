
// Fetch elements
var timeValEl = $(".time-block-val");
var timeBlockEl = $(".time-block");

// Display current day
var currDay = moment().format('dddd') + ", " + moment().format('MMMM Do');
$('#currentDay').text(currDay);

// Function to display the calendar based on the time of day
function init() {
    console.log(timeValEl);
    console.log(timeValEl.length);
    var currHour = moment().hour();
    console.log("Current Hour: "+currHour);
    for(var i = 0; i < timeValEl.length; i++) {
        var timeVal = timeValEl[i].id;
        console.log("Past Time: " +timeVal);

        // If the time is in future set background color of time block to green
        if(timeVal > currHour) {
            timeBlockEl.eq(i).addClass("future");
        }
    }
}

// Function called when the page loads
init();