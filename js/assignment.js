"use strict";

// Declaring constant variables to store references to the elements
// that will be updated by your code.
const currentYearElement = document.getElementById("year");
const resolutionElement = document.getElementById("resolution")
const willMeetResolutionElement = document.getElementById("will-meet-resolution")
const submissionBtn = document.getElementById("submission-btn")

// Declare your variables here.

const currentYear = 2025;
const resolution = "I will do enough work to take hold of an entry level front end development position, play music and excercise regularly, as well as sell artwork.";

let willMeetResolution = "YES!";

function updatecurrentYear() {
    // write the logic
    currentYearElement.innerText = currentYear
}

function updateResolution() {
    // Update this function 
    resolutionElement.innerText = resolution
}

function updatewillMeetResolution() {

    willMeetResolutionElement.innerText = willMeetResolution

}

function render() {
    // Finish writing this function
    updatecurrentYear();
    updateResolution();
    updatewillMeetResolution();
}

submissionBtn.addEventListener("click", function () {
    // Finish writing this function
    render();
})
