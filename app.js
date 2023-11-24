const arrayButtons = document.querySelectorAll('.btn');

const int1 = document.querySelector('.int1');
const int2 = document.querySelector('.int2');
const int3 = document.querySelector('.int3');
const int4 = document.querySelector('.int4');

const res1 = document.querySelector('.output1');
const res2 = document.querySelector('.output2');
const res3 = document.querySelector('.output3');
const res4 = document.querySelector('.output4');
const res5 = document.querySelector('.output5');

function sum(operationCode) {

    var num1 = Number(int1.value);
    var num2 = Number(int2.value);
    if (operationCode === 'sum') {
        var sum = num1 + num2;
        res1.textContent = sum;
        return;
    }

    else if (operationCode === 'calculated') {
        var plus = num1 + num2;
        var m = num1 - num2;
        var x = num1 * num2;
        var d = num1 / num2;
        var sum = (plus + ' ' + ' ' + m + ' ' + x + ' ' + d)
        res2.textContent = sum;
    }

}

function numberCheck(number) {
    if (number === 'evencheck') {
        var number = Number(int3.value);

        if (number % 2 == 0) {
            res3.textContent = "Yes";
        }
        else if (number % 2 != 0) { res3.textContent = "No"; }
    }
    else if (number === ('numbercheck')) {
        var number = Number(int3.value);
        if (number > 0) { res4.textContent = "Positive"; }
        else if (number < 0) { res4.textContent = "negative"; }
        else (res4.textContent = "zero")
    }
}

document.getElementById('fat').addEventListener('click', function () {

    var height = parseInt(document.querySelector('.int5').value);
    var waist = parseInt(document.querySelector('.int6').value);
    const gender = document.querySelector('.str').value.toUpperCase();

    if ((gender === 'M')) {
        var fatPercentage = 64 - (20 * height / waist)
    }
    else if (gender === 'Ж') {
        var fatPercentage = 76 - (20 * height / waist);
    }
    res5.textContent = fatPercentage;
}
);
function clickbtn(eventbtn) {
    var btn = eventbtn.currentTarget;
    var operation = btn.innerHTML;
    var number = btn.innerHTML;
    var fat = btn.innerHTML;
    numberCheck(number);
    sum(operation);



}

for (i = 0; i < arrayButtons.length; i++) {
    arrayButtons[i].addEventListener('click', clickbtn);
}
