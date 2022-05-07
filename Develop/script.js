// var timeBlockEl = document.querySelector("#startingPoint");
var timeBlockEl = $(".time-block");
// console.log(timeBlockEl);

//display current day
var today = moment();
$("#currentDay").text(today.format("ha, dddd, MMM Do, YYYY"));

//Hardcode object with empty strings
var storedEvents = {
        9: "",
        10: "",
        11: "",
        12: "",
        13: "",
        14: "",
        15: "",
        16: "",
        17: ""
    }

// If storage exists, don't replace the stored values. Otherwise, initialize the objects and make them blank
function initStorage(){
    oldStoredEvents = JSON.parse(localStorage.getItem("storedStuff"));
    if (oldStoredEvents){
        storedEvents = oldStoredEvents;
    }
}

// for each workday hour (9am - 5pm), display a timeblock
function timeBlock(){
    var startTime = 9;
    for(var i = 0; i <= 8; i++){
        var actualTime = moment().format("H");
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
        inputField.attr("id", loopTime);
        inputField.attr("type", "text");
        inputField.attr("placeholder", storedEvents[loopTime]);
        currentRow.append(saveBtn);
        saveBtn.addClass("saveBtn");
        saveBtn.attr("id", loopTime);
        saveBtn.text("💾");
        currentHour.text(moment(loopTime, "H").format("ha"));
        
        //Change color of the time block depending on if it is past, future, or present
        if(actualTime > loopTime){
            inputField.addClass("past");
        } else if (actualTime == loopTime)  {
            inputField.addClass("present");
        } else {
            inputField.addClass("future");
        }

        // If you click a button, it stores that button id based on above. It uses that to store the text inside.
        saveBtn.on('click', function (event) {
            var btnIndex = event.target.id;
            var inputText = document.getElementById(btnIndex).value; //wtf is this
            //based on index above, save the input text to an object
            storedEvents[btnIndex] = inputText;
            setStorage();
          });
    }
}

// Set any new things
function setStorage(){
    localStorage.setItem("storedStuff", JSON.stringify(storedEvents));
}

initStorage();
timeBlock();
setStorage();
