/*Pari e Dispari:
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando un'altra funzione)
Dichiariamo chi ha vinto. */

// prompt per chiedere numero a utente

const chooseANumber = parseInt(prompt('type a number between 1 and 5'));

/*creo funzione per numero random del pc*/
function randomNumber(numberOne, numberTwo){
    return chooseANumber , Math.floor(Math.random () * (numberTwo - numberOne +1) + numberOne);
}
// visulizzo numero random e numero utente  
console.log(chooseANumber); 
console.log(randomNumber (1,5));




/*Palidroma:
Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma
E' vietato usare split(), reverse() e simili.*/