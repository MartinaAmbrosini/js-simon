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

// prendo gli elementi tramite loro ID 
const numToRem = document.getElementById("num");
const time = document.getElementById("time");
const writNum = document.getElementById("num-written");
const validOrNotNum = document.getElementById("valid-or-not");



// creo elementi array vuoti 

var numbers = [];
var seconds = 30;
var guessNum;
var guessNumArr = [];




//  l'utente vede 5 num  e gli si dice di memorizzarli
for (let i = 0; i < 5; i++){
    randomNumber = createRandomNumber();
    numbers.push(randomNumber);
}

numToRem.innerHTML = "Numeri: " + numbers.join(", ");

// creo un timer di 30 sec dove compaiono i numeri casuali

var timer = setInterval(

    function() {
        time.innerHTML = seconds;
        if(seconds === 0){
            clearInterval(timer);
            // dopo 30 sec i num spariscono
            numToRem.classList.add("hidden");
            time.classList.add("time-hidden");
        }

    //  ciclo for + 
        for (let i= 0; i < 5; i++){

        // appare messaggio che chiede all'utente di indovinare i num appena visti
            setTimeout(waitPrompt, 1500);

            function waitPrompt() {
                guessNum = parseInt(prompt("Inserisci uno dei 5 numeri visti"));
                guessNumArr.push(guessNum);
                console.log(guessNumArr);
            }

            setTimeout(waitText, 4000);
                function waitText(){
                    if(numbers.includes(guessNumArr[i])){
                    console.log("Hai indovinato il numero:" + guessNumArr[i]);
                    validOrNotNum.innerHTML += "Hai indovinato il numero:" + guessNumbArr[i];
                    } else{
                        console.log(`Il numero ${guessNumberArray[i]} è sbagliato`);
                    }

                    numToRem.classList.remove("hidden");
                    numToRem.innerHTML = "I numeri da indovinare erano: " + numbers };
                    writNum.innerHTML = "I numeri che hai scritto tu sono:" + guessNumArr}.;
                }   

});
     



// FUNZIONI

function createRandomNumber(){
    return Math.floor(Math.random() * 100 + 1);
}