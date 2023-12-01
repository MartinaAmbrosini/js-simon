// Descrizione:

// Visualizzare in pagina 5 numeri casuali.
// Da lì parte un timer di 30 secondi. Dopo 30 secondi i numeri scompaiono e l’utente deve inserire, i numeri che ha visto precedentemente.

// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.
// Il layout lo decidete voi.
// Non perdetevi solo nei suoi dettagli da subito, ma date priorità a farlo funzionare.

// Poi se volete lo abbellite quanto volete, quando funziona tutto.


// Consigli del giorno:
// * Pensate prima in italiano.
// * Dividete in piccoli problemi la consegna.
// * Individuate gli elementi di cui avete bisogno per realizzare il programma.
// *Fate sempre una cosa sola alla volta, risolvendo un problema alla volta.
// *OCIO che se arrivate al punto in cui stampate i numeri in pagina che poi devono sparire, ma la richiesta dei numeri all’utente la state facendo ancora con il prompt, su Chrome facile che non vi aggiorni la pagina nei tempi giusti (e quindi i numeri non scompaiano quando glielo dite voi).


// array random number
const arrayRandomNum = [];

// generation 5 random number
for (let i = 0; i < 5; i++) {
    // call function
    randomNum = randomNumbMinMax(1, 100);
    // console.log(randomNum);

    //push randomNum nell'array
    arrayRandomNum.push(randomNum);

}

// selection element
const containerRandomNumber = document.querySelector(".num");;

// show on screen
containerRandomNumber.innerHTML = arrayRandomNum;

// array user number
const arrayUserNum = [];

// after 30s
setTimeout(function() {

    // array disapper from screen
    containerRandomNumber.classList.add("hidden");

    // prompt user num 
    for (let i = 0; i < 5; i++) {
        userNum = parseInt(prompt("Inserisci qui i numeri"));
        arrayUserNum.push(userNum);
    }

    console.log(`Array user number: ${arrayUserNum}`);   
    console.log(`Array random number: ${arrayRandomNum}`);  

    // ...

    // Verifica se tutti gli elementi di arrayRandomNum sono presenti in arrayUserNum
    const check = arrayRandomNum.every(function(randomNum) {
        return arrayUserNum.includes(randomNum);
    });

    // Stampa il risultato
    if (check) {
        console.log("Ci sono tutti gli elementi di" + arrayRandomNum);
    } else {
        console.log("Non ci sono tutti gli elementi di " + arrayRandomNum);
    }



}, 3000)



// Functions

// Random number between min and max (both included) 
function randomNumbMinMax (min, max) {
    const randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
    return randomNum;
}
