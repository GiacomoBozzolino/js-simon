// creo una funzione per creare numeri randomici
function generateRandomNumber (min,max) {
    return Math.floor(Math.random() * (max - min +1) ) + min;
};

// aggiungo un controllo per non avere numeri doppi
function controlNumber (random_number){
    let controllo = false 
    let number
    while (controllo === false) {
        number = generateRandomNumber(1, 10)
        // setto la condizione per uscire dal ciclo while ( se il numero non è contenuto nell'array esco dal ciclo e genero un numero)
        if (!random_number.includes(number))
        controllo = true
    } 
    return number
};


let random_number=[]
let printNumber = document.getElementById('number')
console.log(printNumber)


// genero 5 numeri casuali
for (let i=0; i<5; i++){
    let number = controlNumber (random_number);
    random_number.push(number);
    console.log(random_number[i]) 
    let numbers= document.createElement('div')
    numbers.innerText = random_number[i]
    printNumber.append(numbers)
}







