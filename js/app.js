"use strict";

document.getElementById("go").addEventListener("click", getWeightAdvice);

let message1 = "Вам необходимо пройти программу по набору массы";
let message2 = "Ваш вес соответствует требованиям";
let message3 = "К сожалению вес привышает допустимое значение. Необходимо пройти программу по сброссу массы";
let messageError = "Введены неверные данные";

let colorBlue = '#1fddff';
let colorGreen = '#00bf8f';
let colorRed = '#F11712';
let colorBlack = '#000';


function getWeightAdvice() {
    let w1 = document.getElementById("uW").value;


    if (w1 <= 40) {
        document.getElementById("res").innerHTML = message1;
        document.getElementById("res").style.color = colorBlue;
    } else if (w1 <= 95) {
        document.getElementById("res").innerHTML = message2;
        document.getElementById("res").style.color = colorGreen;
    } else if (w1 >= 96) {
        document.getElementById("res").innerHTML = message3;
        document.getElementById("res").style.color = colorRed;
    } else {
        document.getElementById("res").innerHTML = messageError;
        document.getElementById("res").style.color = colorBlack;
    }
    
}