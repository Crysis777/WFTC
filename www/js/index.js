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
    let dateNow = new Date(Date.now());
    let wordsToWrite;
    let dateDifference;
    let roundingPrecision = $("input[name=radiogroup_1]:checked").val();
    roundingPrecision = parseFloat(roundingPrecision);
    let weekendYesNo = $("input[name=weekendYesNo]:checked").val();

    if(numberInput.toString() == "NaN" || dateInput.toString() == "Invalid Date") {
        myTextErrorHandler();
    } else {
        dateDifference = parseFloat(dateInput - dateNow);
        dateDifference = Math.round(dateDifference / (1000*60*60*24));
        
        if(weekendYesNo != "on") {
            let startDay = dateNow.getDay();
            let endDay = dateInput.getDay();
            let weeksDifference = dateDifference / 7;

            
        }
        
        wordsToWrite = Math.round(numberInput / dateDifference);

        switch(roundingPrecision) {
            case 1:
                break;
            case 10:
                wordsToWrite = roundToValue(wordsToWrite,10);
            case 100:
                wordsToWrite = roundToValue(wordsToWrite,100);
        }

        $("#valuesForCalculation").html(`
            <p>Needed Words: ${numberInput}</p>
            <p>Finishing Date: ${dateInput}</p>
            `);
        if(wordsToWrite == 0) {
            $("#resultsCalculation").html(`
            <p>You need to write at least ${wordsToWrite} words per day to finish in time.</p>
            <p>Mhhh, something seems wrong, maybe you change your rounding precision ;-)</p>
            `);
        } else {
            if(wordsToWrite < 0) {
                $("#resultsCalculation").html(`
                    <p>You need to write at least ${wordsToWrite} words per day to finish in time.</p>
                    <p>Sorry bro you messed it up... the deadline is already over ;-)</p>
                    `);
            } else {
                $("#resultsCalculation").html(`
                    <p>You need to write at least ${wordsToWrite} words per day to finish in time.</p>
                    `);
            }
        }
        $("body").pagecontainer("change","#OutputPage");
    }
}

function myTextErrorHandler() {
    $("#popupNameError_emptyValues").popup("open");
}

function roundToValue(wordNumber, digits) {
    let wordNumberCorrected;

    return wordNumberCorrected;
}