/*jshint esversion: 6 */

/*
 * This is the logical part of the WFTC app
 * 
 */
$(document).on("pagecreate", onPageLoaded);

function onPageLoaded() {
    $("#buttonCalculate").attr("onclick", "myCalculationEventHandler();");
}

function myCalculationEventHandler() {
    let numberInput = $("#inputNumber").val();
    numberInput = parseFloat(numberInput);
    let dateInput = $("#inputDate").val();
    dateInput = new Date(dateInput);

    if(numberInput.toString() == "NaN" || dateInput.toString() == "Invalid Date") {
        myTextErrorHandler();
    } else {
        $("#valuesForCalculation").append(`
            <p>Needed Words: ${numberInput}</p>
            <p>Finishing Date: ${dateInput}</p>
            `);
        $("#resultsCalculation").text("Hey it works!");
        $("body").pagecontainer("change","#OutputPage");
    }
}

function myTextErrorHandler() {
    $("#popupNameError_emptyValues").popup("open");
}

