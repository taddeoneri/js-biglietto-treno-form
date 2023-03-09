const discountU = 0.2;
const discountO = 0.4;
const forKm = 0.21;

let ticketPrice;

const buttonCalc = document.querySelector('.btnCalc');

let box = document.querySelector('.box')

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

buttonCalc.addEventListener('click', function(){

    let km = document.getElementById('nKm').value;
    let age = document.getElementById('age').value; 
    let name = document.getElementById('name').value;
    let carriage = getRandomInt(1, 25);
    let cpCode = getRandomInt(1000, 9999);

    if(age < 18){
    let discount = km * forKm * discountU;
    ticketPrice = km * forKm - discount;
    }else if (age >= 65){
    let discount = km * forKm * discountU;
    ticketPrice = km * forKm - discount;
    }else{
    ticketPrice = km * forKm;
    }

    document.getElementById('result-left').innerHTML = 
    `
    <p><b>Passenger:</b> ${name}</p>
    `

    document.getElementById('result-right').innerHTML = 
    `
    <table>
        <tr> 
            <th>Ticket</th>
            <th>Carriage</th>
            <th>CP Code</th>
            <th>Ticket Price</th>
        </tr>
        <tr> 
            <td>Standard Ticket</td>
            <td>${carriage}</td>
            <td>${cpCode}</td>
            <td>${ticketPrice} $</td>
        </tr>
    </table>
    `;

    box.classList.remove('d-none')
})
