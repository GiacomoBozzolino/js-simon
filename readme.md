Problema: Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi. Dopo 30 secondi i numeri scompaiono e l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt(). Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.

1- Creo uno funzione per la generazione di numeri casuali.
2- creo un array vuoto
3- utilizzo un ciclo for con i<5 dentro cui recupero la funzione per generare i numeri casuali così da ottenere 5 numeri causali
    3.1- utilizzo .push per inserire i numeri all'interno dell'array vuoto
    3.2- uso un console.log per controllare il corretto funzionamento dell'array
    3.3- stampo in pagina i numeri così trovati
4- setto una timing function con SetTimeOut impostata a 30 secondi (la funzione va impostata in millesimi) all'interno della quale:
    4.1- aggiungo una classe css con display none per nascondere i numeri dal DOM
    4.2- imposto un ciclo for con i<5 al cui interno inserisco un prompt dove chiedo all'utente di inserire il numero che ha visto nel dom
    4.3- creo un secondo array vuoto in cui inserire i numeri immessi dall'utente
    4.4- imposto una condizione di controllo:
        - ?SE i numeri inseriti nel secondo array sono presenti nel primo allora stampo un messaggio all'untente che riporti i singoli numeri corispondenti (posso usare array[i]) e quanti numeri sono stati presi [posso usare array.lenght]
