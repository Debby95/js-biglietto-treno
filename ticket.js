/* Il programma dovrà chiedere all’utente 
-il numero di chilometri che vuole percorrere 
-l’età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.
L’output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.
Formula per il calcolo: km * 0.21 = prezzoBiglietto
Stampare in HTML una lista con eta inserità, km inseriti ed il prezzo finale
eta: 50
km: 120
prezzzo: 24,50 */

let kmDaPercorrere = prompt("Quanti km vuoi percorrere?")
let etaUtente = prompt("Quanti anni hai?")
kmDaPercorrere = parseInt(kmDaPercorrere);

let spanTicketPrice = document.getElementById("ticketPrice")

let ticketPrice = 0.21 * kmDaPercorrere

let etaUtente < 18 = 0.21 * kmDaPercorrere == ticketPrice - 20%

spanTicketPrice.innerHTML = `<span> ${kmDaPercorrere} ${etaUtente} ${ticketPrice}€</span>`

if (etaUtente < 18) {
    - 20%
}   
    






/* 
inserisco kmDaPercorrere
inserisco etaUtente 
    calcolo prezzo totale del viaggio
SE sono minorenne 
    20% di sconto
ALTRIMENTI prezzo pieno 
SE ho superato i 65 anni 
    40% di sconto
ALTRIMENTI prezzo pieno
*/ 


