
// Creazione di un array con i cognomi
var lista_cognomi =['Fortunio', 'Torres', 'Parejo', 'Amatista'];
console.log(lista_cognomi);

//chiedi al utente il cognome

var cognome_utente = prompt('Inserisci il tuo cognome');
cognome_utente = cognome_utente.charAt(0).toUpperCase()+cognome_utente.slice(1);
console.log(cognome_utente);


// inserisco il cognome inserito dal utente nella nostra lista di cognomi

lista_cognomi.push(cognome_utente);
console.log(lista_cognomi);

// ordinare alfabeticamente
lista_cognomi.sort();
console.log(lista_cognomi);


//la posizione del utente più uno.

for (posizione=0; posizione < lista_cognomi.length; posizione++){

    if (lista_cognomi[posizione] == cognome_utente){
        console.log(posizione + 1);
    }


}
