// Palidroma
// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma

let parola = prompt("inserisci una parola e verifichiamo se questa è palindroma");
let parolaReverse = ''; 
console.log(parola);

// PRIMO METODO.. CONFRONTO DELLE DUE PAROLE

//creo la parola invertita
for (let i = parola.length - 1; i >= 0; i--){
    parolaReverse += parola[i];

}

if (parola == parolaReverse){
    console.log("la parola è palindroma")
} else {
    console.log("la parola non è palindroma")
}


// Pari e Dispari
// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.

let userNum = parseInt(prompt("inserisci un numero da 1 a 5"));
console.log("il mio numero è " + userNum)
let scelta = prompt(`inserisci 1 per scegliere PARI o 2 per scegliere DISPARI`);;
let pari = 1;
let dispari = 2;
// controllo dell'inserimento del numero corretto 
while ( userNum <= 0 || userNum >= 6){
    userNum = parseInt(prompt("inserisci un numero da 1 a 5"));
};

let pcNum = parseInt(Math.floor(Math.random()*5) + 1);
console.log("il numero del pc è " + pcNum)



// funzione scelta tra pari o dispari
function sceltaPariDispari(scelta){

    if (scelta === "1"){
        
        return scelta
    } else if( scelta === "2") {
        
        return scelta
    }
}

// sommo i due valori
let somma = userNum + pcNum;
console.log(" la somma dei due valore è: " + somma)

// funzione verifica pari o dispari della somma
function verificaPariDispari(somma){
    if ( somma % 2 == 0){
        return true
    } else {
        return false
    }
}




if (sceltaPariDispari(scelta) == pari && verificaPariDispari(somma) == true){
    console.log("hai scelto pari ed è uscito pari... hai vinto")

} else if( sceltaPariDispari(scelta) == pari && verificaPariDispari(somma) == false){
    console.log("hai scelto pari ed è uscito dispari... hai perso")

}else if( sceltaPariDispari(scelta) == dispari && verificaPariDispari(somma) == false){
    console.log("hai scelto dispari ed è uscito dispari... hai vinto")

} else {
    console.log("hai scelto dispari ed è uscito pari... hai perso")
}

verificaPariDispari(somma)