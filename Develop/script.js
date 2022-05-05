// var timeBlock = document.createElement("div")

//display current day
var today = moment();
$("#currentDay").text(today.format("hA, dddd, MMM Do, YYYY"));


// for each workday hour (9am - 5pm), display a timeblock
// TODO: Create 8 timeblocks and append them to the last? Label each with appropriate hours
function timeBlock(){
    var startTime = 9;
    for(var i = 0; i <= 8; i++){
        var blockTime = startTime + i;
        //create a div
        //display the time using blockTime
        //attach a button with id=blockTime
        console.log(moment(blockTime, "H").format("hA"));
    }
}

timeBlock();




//If timeblock is in past, make background-color gray
//if timeblock is the current hour, make background-color red
//if timeblock is in the future, make background-color green

//timeblock is a text field that can be saved

//when the text field is saved, it is stored in localstorage and displayed upon reload

