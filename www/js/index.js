/*jshint esversion: 6 */

/*
 * This is the logical part of the WFTC app
 * 
 */
$(document).on("pagecreate", onPageLoaded);

function onPageLoaded() {
    $("#buttonName").attr("onclick", "myTextEventHandler();");
    $("#buttonList").attr("onclick", "myListEventHandler();");
}

function myTextEventHandler() {
    let textInput = $("#inputName").val();
    
    textInput = textInput.trim();
    console.log(`The name which was recognized is: "${textInput}"`);

    if(textInput.length === 0) {
        myTextErrorHandler();
    } else {
        $("#resultsCalculation").text("Hey " + textInput + "!");
        $("body").pagecontainer("change","#OutputPage");
    }
}

function myTextErrorHandler() {
    $("#popupNameError_emptyName").popup("open");
}
