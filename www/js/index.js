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
            dateDifference = correctWeekends(dateNow.getDay(),dateInput.getDay(),dateDifference);
        }
        
        wordsToWrite = Math.round(numberInput / dateDifference);

        switch(roundingPrecision) {
            case 1:
                break;
            case 100:
                wordsToWrite /= 100;
                wordsToWrite = Math.round(wordsToWrite);
                wordsToWrite *= 100;
            case 10:
                wordsToWrite /= 10;
                wordsToWrite = Math.round(wordsToWrite);
                wordsToWrite *= 10;
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

function correctWeekends(startDay, endDay, dateDifference) {
    let weekDifference = dateDifference / 7;

    for(i = 0;i < Math.floor(weekDifference); i++) {
        dateDifference -= 2;
    }

    if(weekDifference - Math.floor(weekDifference) > 0) {
        if(0 < startDay < 6 & 0 < endDay < 6 & startDay < endDay) {
            return dateDifference;
        }
        if(0 < startDay < 6 & 0 < endDay < 6 & startDay > endDay) {
            dateDifference -= 2;
            return dateDifference;
        }
        if((startDay == 6 & endDay == 0) | (startDay == 6 & 0 < endDay < 6)) {
            dateDifference -= 2;
            return dateDifference;
        }
        if(startDay == 0) {
            dateDifference -= 1;
            return dateDifference;
        }
    }
    return dateDifference;
}