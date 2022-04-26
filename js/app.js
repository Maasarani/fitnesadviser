"use strict";

document.getElementById("go").addEventListener("click", getWeightAdvice);


// 1. Повторяющиеся данные добавляем в переменные 
// 2. Изменить название переменных, на более осмысленные

let colorBlue = '#1fddff';
let colorGreen = '#00bf8f';
let colorRed = '#F11712';
let colorBlack = '#000';


function getWeightAdvice() {
    let w1 = document.getElementById("uW").value;


    if (w1 <= 40) {
        document.getElementById("res").innerHTML = "Вам необходимо пройти программу по набору массы";
        document.getElementById("res").style.color = colorBlue;
    } else if (w1 <= 95) {
        document.getElementById("res").innerHTML = "Ваш вес соответствует требованиям";
        document.getElementById("res").style.color = colorGreen;
    } else if (w1 >= 96) {
        document.getElementById("res").innerHTML = "К сожалению вес привышает допустимое значение. Необходимо пройти программу по сброссу массы";
        document.getElementById("res").style.color = colorRed;
    } else {
        document.getElementById("res").innerHTML = "Введены неверные данные";
        document.getElementById("res").style.color = colorBlack;
    }
    
}