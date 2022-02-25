// config variables
var currentDay = $("#currentDay"),
    saveBtn = $(".saveBtn"),
    timeSlot = $(".time-block"),
    hour = $(".hour");

// add click event listener for save btn
saveBtn.click(function() {
    var $this = $(this),
        text = $this.siblings(".description").val(),
        time = $this.parent().attr("id");
    console.log(text, time);

    // save into local storage
    // localStorage.setItem(time, text);
});

function checkHour() {

    // get current hour
    var currentHour = moment().hour();

    // loop through the time blocks and return time
    timeSlot.each(function() {
    // change classes accordingly
    });
}

// load time slots from local storage

// get today's date for the top of the page
setInterval(() => {
    var currentDate = moment()
    .format("dddd, MMMM Do YYYY, h:mm:ss a");
    currentDay.text(currentDate);
}, 1000);