"use strict";

document.getElementById("go").addEventListener("click", getWeightAdvice);

const COLOR_BLUE = '#1fddff';
const COLOR_GREEN = '#00bf8f';
const COLOR_RED = '#F11712';
const COLOR_BLACK = '#000';

function displayMessage (message, color, fontsize, fontfamily) {
    document.getElementById("res").innerHTML = message;
    document.getElementById("res").style.color = color;
    document.getElementById("res").style.fontSize = fontsize;
    document.getElementById("res").style.fontFamily = fontfamily;
}


function getWeightAdvice() {
    let weightValue = document.getElementById("uW").value;

    if (weightValue == "" || isNaN(weightValue)) {
        displayMessage("Введены неверные данные", COLOR_BLACK, '10px', 'sans-serif');
    } else if (weightValue <= 40) {
        displayMessage("Вам необходимо пройти программу по набору массы", COLOR_BLUE, '30px', 'serif');
    } else if (weightValue <= 95) {
        displayMessage("Ваш вес соответствует требованиям", COLOR_GREEN, '25px', 'sans-serif');
    } else if (weightValue >= 96) {
        displayMessage(`К сожалению вес привышает допустимое значение. 
        Необходимо пройти программу по сброссу массы`, COLOR_RED, '15px', 'serif');
    }
   
}




