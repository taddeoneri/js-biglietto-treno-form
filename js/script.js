const discountU = 0.2;
const discountO = 0.4;
const forKm = 0.21;

let ticketPrice;

const buttonCalc = document.querySelector('.btnCalc');

buttonCalc.addEventListener('click', function(){
    let km = document.getElementById('nKm').value;
    let age = document.getElementById('age').value;    
    if(age < 18){
    let discount = km * forKm * discountU;
    ticketPrice = km * forKm - discount;
    }else if (age >= 65){
    let discount = km * forKm * discountU;
    ticketPrice = km * forKm * discountO;
    }else{
    ticketPrice = km * forKm;
    }
    document.getElementById('result').innerHTML = ticketPrice;
})
