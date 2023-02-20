const buttonClean = document.getElementById('clean');
const buttonCalculate = document.getElementById('calculate');
const amount = document.getElementById('amount');
const percentage = document.getElementById('percentage');
const year = document.getElementById('year');
const result = document.getElementById('result');
const values = /[0-9]/gi

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

    let interest = capital*duration*percen;

    document.getElementById("result").value = interest
}



console.log(calculate())


buttonClean.addEventListener("click", clean);
buttonCalculate.addEventListener('click', calculate);