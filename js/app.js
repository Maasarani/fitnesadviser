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
        fitAdviсe("Вам необходимо пройти программу по набору массы", colorBlue, '30px', 'serif');
    } else if (w1 <= 95) {
        fitAdviсe("Ваш вес соответствует требованиям", colorGreen, '25px', 'sans-serif');
    } else if (w1 >= 96) {
        fitAdviсe("К сожалению вес привышает допустимое значение. Необходимо пройти программу по сброссу массы", colorRed, '15px', 'serif');
    } else {
        fitAdviсe("Введены неверные данные", colorBlack, '10px', 'sans-serif');
    }
    
}

function fitAdviсe (message, color, fontsize, fontfamily) {
    
    document.getElementById("res").innerHTML = message;
    document.getElementById("res").style.color = color;
    document.getElementById("res").style.fontSize = fontsize;
    document.getElementById("res").style.fontFamily = fontfamily;
}



