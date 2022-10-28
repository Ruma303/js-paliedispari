/*
Palindroma
Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma
Pari e Dispari
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto.
Consigli del giorno
1. Scriviamo sempre in italiano i passaggi che vogliamo fare
2. Scriviamo sempre solo un pezzetto di codice alla volta, se funziona allora andiamo avanti.
*/

const userWord = prompt('Inserisci una parola');

if(palindromeCheck(userWord)) {
    console.log(userWord + 'è una parola palindroma!');
} else {
    console.log(userWord + 'non è una parola palindroma!');
}
 
function palindromeCheck(word) {
    if (Array.from(word).toString() == (Array.from(word).reverse()).toString()) { return true;
} else {
    return false;
}}