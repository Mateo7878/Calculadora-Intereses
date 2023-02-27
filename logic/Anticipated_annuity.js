const buttonClean = document.getElementById('clean');
const buttonCalculate = document.getElementById('calculate');
const amount = document.getElementById('amount');
const percentage = document.getElementById('percentage');
const year = document.getElementById('year');
const result = document.getElementById('result');

function clean()
{
    document.getElementById("amount").value = '';
    document.getElementById("percentage").value = '';
    document.getElementById("year").value = '';
    document.getElementById("result").value = '';
}

function calculate()
{
    let rent = document.getElementById('amount').value;
    let number_of_pays = document.getElementById('year').value;
    let percen = document.getElementById('percentage').value;
    let power = Math.pow(Number(1) + Number(percen), number_of_pays);
    let first_cal = (power - Number(1)) / percen;
    let fv = (rent * (Number(1) + Number(percen))) * first_cal;

    document.getElementById("result").value = fv.toFixed(2);
}


buttonClean.addEventListener("click", clean);
buttonCalculate.addEventListener('click', calculate);