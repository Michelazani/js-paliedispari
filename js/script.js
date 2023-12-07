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

const userWord = prompt('Type a word');

//Creo una funzione che prende come argomento una parola e restituisce la parola invertita. 
function getReversedWord(word){
    let reversedWord = '';

    //Creo un ciclo for che scorre la parola dalla fine all'inizio, aggiungendo i caratteri alla stringa della costante reverseWord.
    for (let i = word.length - 1; i >= 0; i--){
        reversedWord = reversedWord + word.charAt(i);
    }

    return reversedWord;
}

//Creo una funzione che prende una parola come argomento e restituisce true se la parola è un palindromo, false se non lo è.
function isPalindrome(word){
    let result = true;
    let index = 0;
    //Creo un ciclo while che compara i caratteri iniziali della parola con quelli finali. Se trova una differenza imposta il result su false e interrompe il ciclo.
    while ( index < Math.floor(word.length / 2) ){
        if ( word.charAt(index) !== word.charAt(word.length - 1 - index) ){
            result = false;
            index = word.length;
        }
        index++;
    }
    return result;
}

//Stampo il risultato della parola inserita dall'utente utilizzando la funzione isPalindrome. Se la parola è un palindromo, verrà stampato true, altrimenti verrà stampato false.
console.log(isPalindrome(userWord));
