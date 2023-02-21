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
    let capital = document.getElementById('amount').value;
    let duration = document.getElementById('year').value;
    let percen = document.getElementById('percentage').value;
    
    interest = (capital*(Math.pow((Number(percen) + Number(1)),duration))).toPrecision(7)


    document.getElementById("result").value = interest;
}


buttonClean.addEventListener("click", clean);
buttonCalculate.addEventListener('click', calculate);