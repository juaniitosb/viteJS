
import { addCard } from "./useCases/addCard";
import { deckData } from "./useCases/createDeck";
import { createCard } from "./useCases/createImg";
import { valueCard } from "./useCases/valueCard";


(() => {
    "use strict";

    let deck = [],
        letterCards = ["C", "D", "S", "H"],
        LetterEspecialCards = ["A", "J", "Q", "K"];

    let puntosJugador = 0,
        puntajeIa = 0;

    //delectores de html
    const
        buttonPlayCard = document.querySelector("#btnPedir"),
        buttonNewGame = document.querySelector("#btnNuevoJuego"),
        buttonStop = document.querySelector("#btnDetener"),

        imgCardJugador = document.querySelector(".id-jugador"),
        imgCardIA = document.querySelector(".id-computadora"),

        smallPuntos = document.querySelectorAll("small");

    //se llena baraja la funcion retorna los valores a la variable
    deck = deckData(letterCards, LetterEspecialCards);
    //turno ia
    const turnIa = (puntajePlayer) => {
        do {
            const carta = addCard(deck);
            puntajeIa = puntajeIa + valueCard(carta)
            createCard(carta, false,imgCardJugador,imgCardIA);
            smallPuntos[1].innerText = puntajeIa

        } while (puntajePlayer <= 21 && (puntajeIa < puntajePlayer));
        if (puntajeIa === puntajePlayer) {
            alert("desempate");
        }
        //validaciones
        //que llegue mas de 21 y solo recorra una vez porque ya gano
        //que llegue 21 y tenga que sacar 21 sino pierde
        //que llegue menos y tenga que sacar un poco mas 

    }
    //eventos
    buttonPlayCard.addEventListener("click", () => {
        const carta = addCard(deck);
        puntosJugador = puntosJugador + valueCard(carta)
        createCard(carta, true,imgCardJugador,imgCardIA);
        smallPuntos[0].innerText = puntosJugador

        if (puntosJugador > 21) {
            console.warn("te pasate perdiste");
            buttonPlayCard.disabled = true;
            turnIa(puntosJugador);

        } else if (puntosJugador === 21) {
            console.warn("Ganaste");
            buttonPlayCard.disabled = true;
            turnIa(puntosJugador)
        } else {

        }
    })
    buttonStop.addEventListener("click", () => {
        buttonPlayCard.disabled = true;
        buttonStop.disabled = true;
        turnIa(puntosJugador);
    })

    buttonNewGame.addEventListener("click", () => {
        deckData(letterCards, LetterEspecialCards);
        smallPuntos.forEach(ele => ele.innerText = 0);
        imgCardIA.innerHTML = ""
        imgCardJugador.innerHTML = ""
        puntajeIa = 0;
        puntosJugador = 0;

        buttonPlayCard.disabled = false;
        buttonStop.disabled = false;
    })
})();
