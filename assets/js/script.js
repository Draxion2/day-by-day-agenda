// config variables
var currentDay = $("#currentDay"),
    workHours = $("#workHours"),
    saveBtn = $(".saveBtn"),
    clearTasks = $("#clearSlots"),
    timeSlot = $(".time-block"),
    hour = $(".hour");

// config current date and time
var currentDate = moment().format("dddd, MMMM Do YYYY, h a");
var afterDate = moment().format("h a");
currentDay.text(currentDate);

// check the time slot hours
function checkHours() {

    // get current hour & either am or pm
    var currentHour = moment().hour();
    var am_pm = afterDate.substring(afterDate.lastIndexOf(' '));

    // check if current hour matches between 9 AM - 5 PM
    for (var a = 1, p = 6; a < 9, p < 12; a++, p++) {
        if (currentHour + am_pm == a + " am" ||
            currentHour + am_pm == p + " pm" ||
            currentHour + am_pm == "12 am") {
            console.log("Time is not current");
            workHours.text("Current time is outside of work hours!");
            timeSlot.addClass("past");
        return;
        };
    }

    // loop through the time blocks and return time
    timeSlot.each(function() {
        var $this = $(this),
            timeSlotHour = $this.attr("data-hour");
        parseInt(timeSlotHour);

        // change classes accordingly

        // past
        if (timeSlotHour < currentHour) {

            // remove previous classes assigned
            $this.removeClass("present");
            $this.removeClass("future");

            // add new class
            $this.addClass("past");
        }

        // present
        else if (timeSlotHour == currentHour) {

            // remove previous classes assigned
            $this.removeClass("past");
            $this.removeClass("future");

            // add new class
            $this.addClass("present");
        }

        // future
        else if (timeSlotHour > currentHour) {

            // remove previous classes assigned
            $this.removeClass("past");
            $this.removeClass("present");

            // add new class
            $this.addClass("future");
        }
    });
}

// add click event listener for save btn
saveBtn.click(function() {
    var $this = $(this),
        time = $this.parent().attr("data-hour"),
        data = $this.siblings(".description").val();

    // save into local storage
    localStorage.setItem(time, data);
});

// load time slots from local storage
for (var i = 1; i < 13; i++) {
    $('*[data-hour="' + i + '"] .description').val(localStorage.getItem(i));
};

// clear the tasks
clearTasks.click(function() {
    localStorage.clear();
    document.location.reload();
});

checkHours();