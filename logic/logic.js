let capital = 40000, tasa_interes = 0.24, plazo = 591;


interes = (tasa_interes, plazo, capital) =>
{
    let calculo  = tasa_interes*(plazo/360)*capital;
    return calculo;
}


console.log(interes(capital,tasa_interes,plazo));