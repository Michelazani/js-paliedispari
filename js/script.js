/*Pari e Dispari:
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando un'altra funzione)
Dichiariamo chi ha vinto. */

// prompt per chiedere numero a utente

const chooseEvenOrOdd = prompt ('even or odd?')
const chooseANumber = parseInt(prompt('type a number between 1 and 5'));
let numberOne = 1;
let numberTwo = 5; 
const randomN = randomNumber (numberOne, numberTwo)
/*creo funzione per numero random del pc*/
function randomNumber(numberOne, numberTwo){
    return Math.floor(Math.random () * (numberTwo - numberOne +1) + numberOne);
}
// visulizzo even or odd, numero utente e numero random  
console.log('even or odd?:' + chooseEvenOrOdd);
console.log('numero utente:' + chooseANumber); 
console.log('numero pc:' + randomN);

// somma dei due numeri
const sum = chooseANumber + randomN
console.log('sum:' + sum)

// funzione per stabilire se somma è pari o dispari
function evenOrOdd (sum){
    if (sum % 2 === 0){
        return 'even';
    }
    else {
        return 'odd';
    }
}
console.log(evenOrOdd(sum));

// dichiaro vincitore
// se il prompt utente è = a evenOrOdd(sum), console.log : hai vinto, altrimenti hai lost
if (chooseEvenOrOdd === evenOrOdd(sum)){
    console.log ('you won');
}
else {
    console.log('you lost');
}


/*Palindroma:
Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma
E' vietato usare split(), reverse() e simili.*/

const typeAWord = prompt('type a word');

function isWordPalindrome = (typeAWord){
    // if la word è palindroma>> true, se non lo è >> false
     
}
