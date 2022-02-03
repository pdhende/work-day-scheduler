
// Fetch elements
var timeValEl = $(".time-block-val");
var timeBlockEl = $(".time-block");
var timeSchedEl = $("#time-sched");
var savedTasks;

// Display current day
var currDay = moment().format('dddd') + ", " + moment().format('MMMM Do');
$('#currentDay').text(currDay);

// Function to display the calendar based on the time of day
function init() {
    var currHour = moment().hour();
    for(var i = 0; i < timeValEl.length; i++) {
        var timeVal = timeValEl[i].id;

        // If the time is in future set background color of time block to shade of green
        if(timeVal > currHour) {
            timeBlockEl.eq(i).addClass("future");
        }
        // If the time is in past set background color of time block to shade of gray
        else if(timeVal < currHour) {
            timeBlockEl.eq(i).addClass("past");
        }
        // If the time is in present hour set background color of time block to shade of red
        else {
            timeBlockEl.eq(i).addClass("present");
        }
    }
    savedTasks = JSON.parse(localStorage.getItem("savedTaskArr")); // Get previously stored tasks from local storage
    if(savedTasks !== null) {
        savedTasks.forEach(function(obj) {
            var timeSlot = obj.taskTime;
            var timeTaskVal = obj.taskVal;
            var textId = "#"+timeSlot;
            $(textId).text(timeTaskVal);
        });
    }
}

function saveTask(event) {

    savedTasks = JSON.parse(localStorage.getItem("savedTaskArr")); // Get previously stored tasks from local storage
    // Get the details of the task to be saved
    var recToSave = $(event.target);
    // console.log(recToSave.parent().siblings('.time-block').val());
    var saveRecord = recToSave.parent().siblings('.time-block').val();
    var saveRecTime = recToSave.parent().siblings('.time-block-val').text();

    if(savedTasks === null) {
        var newTask = [{
            taskTime: saveRecTime,
            taskVal: saveRecord
        }];
        localStorage.setItem("savedTaskArr", JSON.stringify(newTask));
    }
    else {
        var oldTasks = JSON.parse(localStorage.getItem("savedTaskArr")) || [];
        var newTask = {
            taskTime: saveRecTime,
            taskVal: saveRecord
        };
        oldTasks.push(newTask);
        localStorage.setItem("savedTaskArr", JSON.stringify(oldTasks));
    } 
}

// Function called when the page loads
init();

// Event Listener
timeSchedEl.on('click', '.saveBtn', saveTask);


