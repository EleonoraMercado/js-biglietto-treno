//chiedere all'utente il numero di km che vuole percorrere

let kmDaPercorrere =  parseFloat(prompt('Inserisci il numero di km da percorrere:')); //string | null \ number
console.log("Percorrerai:" + kmDaPercorrere);

//chiedere l'età del passeggero

const eta = parseInt(prompt('Inserisci la tua età:')); //string | null \ number
console.log("La tua età è:" + eta); //function
//calcolare prezzo base

const prezzoBase = kmDaPercorrere * 0.21; //string | null
console.log("Questo è il tuo prezzo base:" + prezzoBase); //function

//variabile prezzo finale

let prezzoFinale; //string | null

//applicare sconto del 20% se minorenni

if (eta < 18) {
prezzoFinale = prezzoBase * 0.8;
console.log("Al tuo biglietto è stato applicato lo sconto del 20%:" + prezzoFinale);
}
//applicare sconto del 40% se over 65

else if (eta > 65) {
    prezzoFinale = prezzoBase * 0.6;    //statement
    console.log("Al tuo biglietto è stato applicato lo sconto del 40%:" + prezzoFinale);    //function
}
//calcolare il prezzo fascia eta normale

else {
    prezzoFinale = prezzoBase;  //statement
    console.log("Al tuo biglietto è stata applicata la tariffa base:" + prezzoBase);    //function
}

//formattare il prezzo finale a due cifre decimali

prezzoFinale = prezzoFinale.toFixed(2); //string | null

//stampare il prezzo finale del biglietto nella consoledel browswer in forma umana

console.log("Il prezzo del bigliettoè: €" + prezzoFinale);  //function

//stampare il prezzo finale nella pagina html dentro a un tag p

const paragrafoPrezzo = document.getElementById("prezzo");  //string | null

paragrafoPrezzo.innerHTML = "Prezzo del biglietto del treno: €" + prezzoFinale; //function

