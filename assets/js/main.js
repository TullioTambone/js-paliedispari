// Palidroma
// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma


let parola = prompt("inserisci una parola e verifichiamo se questa è palindroma");
let parolaReverse = ''; 



//creo la parola invertita
for (let i = parola.length - 1; i >= 0; i--){
    parolaReverse += parola[i];
}

if (parola == parolaReverse){
    console.log("la parola è palindroma")
} else {
    console.log("la parola non è palindroma")
}


