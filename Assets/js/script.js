// Display current day
var currDay = moment().format('dddd') + ", " + moment().format('MMMM Do');
$('#currentDay').text(currDay);
