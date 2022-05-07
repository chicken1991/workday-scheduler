var timeBlockEl = document.querySelector("#startingPoint");
// console.log(timeBlockEl);

//display current day
var today = moment();
$("#currentDay").text(today.format("ha, dddd, MMM Do, YYYY"));


// for each workday hour (9am - 5pm), display a timeblock
// TODO: Create 8 timeblocks and append them to the last? Label each with appropriate hours
function timeBlock(){
    var startTime = 9;
    // console.log(startTime);
    for(var i = 0; i <= 8; i++){
        // var actualTime = moment().format("H");
        // Hardcoded time for testing
        var actualTime = 14;
        var loopTime = startTime + i;
        var currentRow = document.createElement("div");   
        var currentHour = document.createElement("h4");
        // default inputField color to green - we'll handle actual color with if statement of moment()
        var inputField = document.createElement("input");
        var saveBtn = document.createElement("button")

        // Go through and build each row
        timeBlockEl.appendChild(currentRow);
        currentRow.setAttribute("class", "row");
        currentRow.appendChild(currentHour);
        currentHour.setAttribute("class", "hour");
        currentRow.appendChild(inputField);
        // inputField.setAttribute();
        currentRow.appendChild(saveBtn);
        saveBtn.setAttribute("class", "saveBtn");
        saveBtn.textContent = "💾"
        currentHour.textContent = moment(loopTime, "H").format("ha");
        // console.log(currentHour);
        console.log(moment().format("H"));
        if(actualTime > loopTime){
            inputField.setAttribute("class", "past");
        } else if (actualTime === loopTime)  {
            inputField.setAttribute("class", "present");
        } else {
            inputField.setAttribute("class", "future");
        }
        console.log(actualTime);
    }
}

timeBlock();




//If timeblock is in past, make background-color gray
//if timeblock is the current hour, make background-color red
//if timeblock is in the future, make background-color green

//timeblock is a text field that can be saved

//when the text field is saved, it is stored in localstorage and displayed upon reload

