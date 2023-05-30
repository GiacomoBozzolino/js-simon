// creo una funzione per creare numeri randomici
function generateRandomNumber (min,max) {
    return Math.floor(Math.random() * (max - min +1) ) + min;
};

// aggiungo un controllo per non avere numeri doppi
function controlNumber (numbers){
    let controllo = false ;
    let number;
    while (controllo === false) {
        number = generateRandomNumber(1, 10);
        // setto la condizione per uscire dal ciclo while ( se il numero non è contenuto nell'array esco dal ciclo e genero un numero)
        if (!numbers.includes(number));
        controllo = true;
    } 
    return number;
};


let random_number=[];
let printNumber = document.getElementById('number');
console.log(printNumber);


// genero 5 numeri casuali
for (let i=0; i<5; i++){
    let number = controlNumber (random_number);
    random_number.push(number);
    console.log(random_number[i]); 
    let numbers= document.createElement('div');
    numbers.innerText = random_number[i];
    printNumber.append(numbers);
};


// setto la funzione temporale per far sparire i numeri NB PER TEST A 3 SECONDI DA CAMBIARE
setTimeout(GameNumber, 3000);
function GameNumber() {
    printNumber.classList.add('none')  
}

// setto la funzione temporale per i prompt
setTimeout(question, 4000);
function question(){
    // creo il secondo array vuoto
    let user_number = []
    for (let i=0; i<5; i++){
        let question = parseInt(prompt('Che numero hai visto?'))
        console.log(question)
        // riempio l'array con i numeri inseriti dall'utente
        user_number.push(question)
    }
    console.log(random_number.length)
    console.log(user_number)
    
//    creo una condizione per confrontare i due numeri
    

}







