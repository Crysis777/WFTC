/*jshint esversion: 6 */

/*
 * This is the logical part of the WFTC app
 * 
 */

function myButtonEventHandler() {
    alert(`You did not put any name inside the box...`);
}

function myTextEventHandler() {
    let textInput = $("#inputName").val();
    
    textInput = textInput.trim();
    console.log(`The name which was recognized is: "${textInput}"`);

    if(textInput.length === 0) {
        myButtonEventHandler();
    } else {
        $("#result").text(`Hey "${textInput}"`);
    }
}

function myTextDeleteHandler() {
    $("#inputName").val(``);
    $("#result").text(``);
}