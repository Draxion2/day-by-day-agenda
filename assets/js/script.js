// config variables
var currentDay = $("#currentDay"),
    saveBtn = $(".saveBtn"),
    timeSlot = $(".time-block"),
    hour = $(".hour");

// config current date and time
var currentDate = moment().format("dddd, MMMM Do YYYY, h a");
currentDay.text(currentDate);

// check the time slot hours
function checkHours() {

    // get current hour
    var currentHour = moment().hour();

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
        else if (timeSlotHour === currentHour) {

            // remove previous classes assigned
            $this.removeClass("past");
            $this.removeClass("future");

            // add new class
            $this.addClass("present");
        }

        // future
        else {

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
        text = $this.siblings(".description").val(),
        time = $this.parent().attr("data-hour");
    console.log(text, time);

    // save into local storage
    localStorage.setItem(time, text);
});

// load time slots from local storage
for (var i = 1; i < 13; i++) {
    $('*[data-hour="' + i + '"] .description').val(localStorage.getItem(i));
};

checkHours();