// var timeBlockEl = document.querySelector("#startingPoint");
var timeBlockEl = $(".time-block");
// console.log(timeBlockEl);

//display current day
var today = moment();
$("#currentDay").text(today.format("ha, dddd, MMM Do, YYYY"));

//Hardcode object with empty strings
var storedEvents = {
    9: "hi",
    10: "sup",
    11: "just",
    12: "testing this",
    13: "out",
    14: "",
    15: "",
    16: "",
    17: ""
}

localStorage.setItem("storedStuff", JSON.stringify(storedEvents));

// for each workday hour (9am - 5pm), display a timeblock
// TODO: Create 8 timeblocks and append them to the last? Label each with appropriate hours
function timeBlock(){
    var startTime = 9;
    // console.log(startTime);
    for(var i = 0; i <= 8; i++){
        // var actualTime = moment().format("H");
        // Hardcoded time for testing 
        var actualTime = 14;        // ============== Changeme
        var loopTime = startTime + i;

        // Create elements
        var currentRow = $("<div>");
        var currentHour = $("<h4>");
        var inputField = $("<input>");
        var saveBtn = $("<button>");

        // Go through and build each row containing time, input, button
        timeBlockEl.append(currentRow);
        currentRow.addClass("row");
        currentRow.append(currentHour);
        currentHour.addClass("hour");
        currentRow.append(inputField);
        inputField.attr("name", loopTime);
        inputField.attr("type", "text");
        inputField.attr("placeholder", storedEvents[loopTime]);
        console.log(storedEvents.looptime);
        currentRow.append(saveBtn);
        saveBtn.addClass("saveBtn");
        saveBtn.attr("id", loopTime);
        saveBtn.text("💾");
        currentHour.text(moment(loopTime, "H").format("ha"));
        
        //Change color of the time block depending on if it is past, future, or present
        if(actualTime > loopTime){
            inputField.addClass("past");
        } else if (actualTime === loopTime)  {
            inputField.addClass("present");
        } else {
            inputField.addClass("future");
        }

        //Create an eventlistener and save input to an object
        // saveBtn.on('click', function () {
        //     console.log(inputField.text);
        //     var savedInput = $("inputField").text;
        //   });
        saveBtn.on('click', function (event) {
            var btnIndex = event.target.id;
            var currentInput = inputField.attr("name", btnIndex);  // ============= FIX ME!!!!!!
            console.log(currentInput);
            //based on index above, save the input text to an object
            console.log(btnIndex);
            // console.log(inputField.name);
            // storedEvents[btnIndex] = "TESTING"
            // console.log(storedEvents[btnIndex]);
            // console.log(inputField.val());

          });
    }
}

timeBlock();

// saveBtn.on('click', function (event) {
//     var btnIndex = event.target.id;
//     console.log(btnIndex);
//     // inputField.text(storedEvents.
//   });
//If timeblock is in past, make background-color gray
//if timeblock is the current hour, make background-color red
//if timeblock is in the future, make background-color green

//timeblock is a text field that can be saved

//when the text field is saved, it is stored in localstorage and displayed upon reload

